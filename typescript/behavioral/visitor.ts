/**
 * 访问者
 *
 * 表示一个作用于某对象结构中的各元素的操作。它使你可以在不改变各元素的类的前提下定义作用于这些元素的新操作
 *
 * when to use
 * - 一个对象结构包含很多类对象，它们有不同的接口，而你想对这些对象实施一些依赖于其具体类的操作
 * - 需要对一个对象结构中的对象进行很多不同的并且不相关的操作，而你想避免让这些操作污染这些对象的类
 * - 定义对象结构的类很少改变，但经常需要在此结构上定义新的操作
 */
function visitor() {
  // 定义一个accept操作，它以一个访问者为参数
  abstract class ComputerPart {
    abstract accept(computerPartVisitor: ComputerPartVisitor): void;
  }

  class Keyboard extends ComputerPart {
    accept(computerPartVisitor: ComputerPartVisitor) {
      computerPartVisitor.visit(this);
    }
  }

  class Mouse extends ComputerPart {
    accept(computerPartVisitor: ComputerPartVisitor) {
      computerPartVisitor.visit(this);
    }
  }

  class UsbPort extends ComputerPart {
    accept(computerPartVisitor: ComputerPartVisitor) {
      computerPartVisitor.visit(this);
    }
  }

  class Box extends ComputerPart {
    parts: ComputerPart[] = [new UsbPort(), new UsbPort(), new Mouse(), new Keyboard()];

    accept(computerPartVisitor: ComputerPartVisitor) {
      for (const part of this.parts) {
        part.accept(computerPartVisitor);
      }
      computerPartVisitor.visit(this);
    }
  }

  // 为对象结构中每个子类声明一个visit方法
  interface ComputerPartVisitor {
    visit(computerPart: ComputerPart): void;
  }

  class ComputerDisplayVisitor implements ComputerPartVisitor {
    visit(keyboard: Keyboard): void;
    visit(mouse: Mouse): void;
    visit(usbPort: UsbPort): void;
    visit(box: Box): void;
    visit(computerPart: ComputerPart) {
      if (computerPart instanceof Keyboard) {
        console.log('Keyboard');
      } else if (computerPart instanceof Mouse) {
        console.log('Mouse');
      } else if (computerPart instanceof UsbPort) {
        console.log('UsbPort');
      } else if (computerPart instanceof Box) {
        console.log('Box');
      }
    }
  }

  // usage
  const box: ComputerPart = new Box();

  box.accept(new ComputerDisplayVisitor());
}
