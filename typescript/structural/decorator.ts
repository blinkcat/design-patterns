/**
 * 装饰模式
 *
 * 动态地给一个对象添加一些额外的职责。就增加功能来说，decorator 模式相比生成子类更为灵活
 *
 * when to use
 * - 在不影响其他对象的情况下，以动态、透明的方式给单个对象添加职责
 * - 处理那些可以撤销的职责
 * - 当不能采用生成子类的方法进行扩充时
 */
function decorator() {
  abstract class VisualComponent {
    abstract draw();
  }

  class TextView extends VisualComponent {
    draw() {}
  }

  // 拥有一个指向 VisualComponent 的引用，并定义一个与 VisualComponent 一致的接口
  abstract class Decorator extends VisualComponent {
    constructor(private component: VisualComponent) {
      super();
    }

    draw() {
      this.component.draw();
    }
  }

  // 具体的 decorator，向组件添加职责
  class ScrollDecorator extends Decorator {
    constructor(component: VisualComponent) {
      super(component);
    }

    draw() {
      super.draw();
      this.scrollTo();
    }

    scrollTo() {}
  }

  class BorderDecorator extends Decorator {
    constructor(component: VisualComponent) {
      super(component);
    }

    draw() {
      super.draw();
      this.drawBorder();
    }

    drawBorder() {}
  }

  // usage

  const component: VisualComponent = new BorderDecorator(new ScrollDecorator(new TextView()));

  component.draw();
}
