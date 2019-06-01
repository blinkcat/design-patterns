/**
 * 观察者
 *
 * 定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都能得到通知并被自动更新
 *
 * when to use
 * - 当一个抽象模型有两个方面，其中一个方面依赖于另一个方面。将这两者封装在独立地对象中以使它们可以各自独立地改变和复用
 * - 当对一个对象的改变需要同时改变其他对象，而不知道具体有多少对象有待改变
 * - 当一个对象必须通知其他对象，而它又不能假定其他对象是谁。换言之，你不希望这些对象是紧密耦合的
 */
function observer() {
  // 观察者
  abstract class Observer {
    abstract update(theChangedSubject: Subject): void;
  }

  // 目标
  abstract class Subject {
    private list = new Set<Observer>();

    attach(observer: Observer) {
      this.list.add(observer);
    }

    detach(observer: Observer) {
      this.list.delete(observer);
    }

    notify() {
      for (const observer of this.list) {
        observer.update(this);
      }
    }
  }

  class ClockTimer extends Subject {
    tick() {
      this.notify();
    }

    getHour() {}
    getMinute() {}
    getSecond() {}
  }

  class DigitalClock extends Observer {
    constructor(private subject: ClockTimer) {
      super();
    }

    update() {
      console.log(this.subject.getHour, this.subject.getMinute(), this.subject.getSecond());
    }
  }

  class AnalogClock extends Observer {
    constructor(private subject: ClockTimer) {
      super();
    }

    update() {
      console.log(this.subject.getHour, this.subject.getMinute(), this.subject.getSecond());
    }
  }

  // usage
  const timer = new ClockTimer();

  const digitalClock = new DigitalClock(timer);
  const analogClock = new AnalogClock(timer);

  timer.tick();
}
