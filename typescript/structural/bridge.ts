/**
 * 桥接模式
 *
 * 将抽象部分与它的实现部分分离，使它们都可以独立地变化
 *
 * when to use
 * - 你不希望在抽象类和它的实现部分之间有一个固定的绑定关系。
 * - 类的抽象以及它的实现都应该可以通过生成子类的方法加以扩充。这时 bridge 模式使你可以对不同的抽象接口和实现部分进行组合，并分别对它们进行扩充。
 * - 对一个抽象的实现部分的修改应对客户不产生影响，即客户的代码不必重新编译
 * - 你想对客户完全隐藏抽象的实现部分
 * - 你想在多个对象间共享实现，但同时要求客户并不知道这一点
 */
function bridge() {
  // 抽象类，有一个实现抽象方法的对象的引用
  abstract class Shape {
    constructor(protected drawAPI: DrawAPI) {}
    abstract draw();
  }

  class Circle extends Shape {
    // 这里的实现部分，DrawAPI 是通过参数方式传递进来的。也可以通过注入，抽象工厂等方式引入。
    constructor(private x: number, private y: number, private radius: number, drawAPI: DrawAPI) {
      super(drawAPI);
    }

    draw() {
      this.drawAPI.draw(this.x, this.y, this.radius);
    }
  }

  // 定义实现类的接口，该接口不一定要与上面抽象类的接口完全一致。该接口仅提供基本操作，而上面的抽象类定义了基于这些基本操作的较高层次的操作
  interface DrawAPI {
    draw(x: number, y: number, radius: number): void;
  }

  class DrawAPI1 implements DrawAPI {
    draw(x: number, y: number, radius: number) {
      console.log(x, y, radius, 'by DrawAPI1');
    }
  }

  class DrawAPI2 implements DrawAPI {
    draw(x: number, y: number, radius: number) {
      console.log(x, y, radius, 'by DrawAPI2');
    }
  }

  // usage
  const shape: Shape = new Circle(1, 2, 3, new DrawAPI1());

  shape.draw();

  const shape2: Shape = new Circle(1, 2, 3, new DrawAPI2());

  shape2.draw();
}
