/**
 * 组合模式
 *
 * 将对象组合成树形结构以表示“部分-整体”的层次结构，composite 使得用户对单个对象和组合对象的使用具有一致性。
 *
 * when to use
 * - 你想表示对象的部分-整体层次结构
 * - 你希望用户忽略组合对象与单个对象的不同，用户将统一地使用组合结构中的所有对象
 */
function composite() {
  // 为组合中的对象声明
  // 拥有最大化的接口
  abstract class Component {
    abstract operation();
    add(component: Component) {}
    remove(component: Component) {}
    getChild() {}
  }

  // 有子组件的组件
  class Composite extends Component {
    children: Component[];

    operation() {
      for (const child of this.children) {
        child.operation();
      }
    }

    add(component: Component) {
      this.children.push(component);
    }
  }

  // 叶子节点，没有子组件
  class Leaf extends Component {
    operation() {
      console.log('leaf');
    }
  }

  // usage
  const component1: Component = new Leaf();
  const component2: Component = new Leaf();
  const component3: Component = new Composite();

  component3.add(component1);
  component3.add(component2);

  component3.operation();
}
