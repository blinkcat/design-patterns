/**
 * 备忘录
 *
 * 在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。这样以后就可将该对象恢复到原先保存的状态。
 *
 * when to use
 * - 必须保存一个对象在某一时刻的状态，这样以后需要时它才能恢复到先前的状态
 * - 如果一个用接口来让其他对象直接得到这些状态，将会暴露对象的实现细节并破坏对象的封装性
 */
function memento() {
  // 备忘录，存储原发器对象的内部状态
  class Memento {
    constructor(private state: string) {}

    getState() {
      return this.state;
    }
  }

  // 原发器创建一个备忘录，用以记录当前时刻它的内部状态。
  class Originator {
    private state: string;

    setState(state: string) {
      this.state = state;
    }

    createMemento() {
      return new Memento(this.state);
    }
    // 使用备忘录恢复内部状态
    setMemento(m: Memento) {
      this.state = m.getState();
    }
  }

  // 负责保存好备忘录
  class Caretaker {
    private list: Memento[] = [];

    add(m: Memento) {
      this.list.push(m);
    }

    get(index: number) {
      return this.list[index];
    }
  }

  // usage
  const originator = new Originator();
  originator.setState('state1');

  const caretaker = new Caretaker();
  caretaker.add(originator.createMemento());

  originator.setState('state2');
  caretaker.add(originator.createMemento());

  originator.setMemento(caretaker.get(0));
}
