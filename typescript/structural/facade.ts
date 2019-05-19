/**
 * 外观模式
 *
 * 为子系统中的一组接口提供一个一致的界面，facade 模式定义了一个高层接口，这个接口使得这一子系统更加容易使用
 *
 * when to use
 * - 当你要为一个复杂子系统提供一个简单接口时
 * - 客户程序与抽象类的实现部分之间存在着很大的依赖性。引入 facade 将这个子系统与客户以及其他的子系统分离，可以提高子系统的独立性和可移植性
 * - 当你需要构建一个层次结构的子系统时，使用 facade 模式定义子系统中每层的入口点。如果子系统之间是相互依赖的，你可以让它们仅通过 facade
 * 进行通讯，从而简化了它们之间的依赖关系
 */
function facade() {
  // computer inner system
  class Cpu {
    work1() {}
    work2() {}
  }

  class Memory {
    work() {}
  }

  class HardDrive {
    work() {}
  }

  // facade
  class Computer {
    work() {
      const cpu = new Cpu();
      const memory = new Memory();
      const hardDrive = new HardDrive();

      cpu.work1();
      memory.work();
      hardDrive.work();
      cpu.work2();
    }
  }

  // usage
  const computer = new Computer();

  computer.work();
}
