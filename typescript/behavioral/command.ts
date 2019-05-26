/**
 * 命令模式
 *
 * 将一个请求封装为一个对象，从而使你可用不同的请求对客户进行参数化。对请求排队或记录请求日志，以及支持可撤销的操作。
 *
 * when to use
 * - command模式是回调机制的一个面向对象的替代品
 * - 在不同的时刻指定、排列和执行请求
 * - 支持取消操作
 * - 支持修改日志，这样当系统崩溃时，这些修改可以被重做一遍
 * - 用构建在原语操作上的高层操作构造一个系统
 */
function command() {
  // 声明执行操作的接口
  interface Command {
    execute(): void;
  }

  // Invoker，要求该命令执行这个请求
  class Switch {
    private history: Command[] = [];

    storeAndExecute(command: Command) {
      this.history.push(command);
      command.execute();
    }
  }

  // 接收者，知道如何实施与执行一个请求相关的操作
  class Light {
    turnOn() {
      console.log('turn on the light');
    }

    turnOff() {
      console.log('turn off the light');
    }
  }

  // 具体的命令
  // 将一个接收者对象绑定于一个动作
  class FlipUpCommand implements Command {
    constructor(private light: Light) {}

    execute() {
      this.light.turnOn();
    }
  }

  class FlipDownCommand implements Command {
    constructor(private light: Light) {}

    execute() {
      this.light.turnOff();
    }
  }

  // usage
  const light: Light = new Light();

  const filpUpCommand: Command = new FlipUpCommand(light);
  const flipDownCommand: Command = new FlipDownCommand(light);

  const mySwitch: Switch = new Switch();

  mySwitch.storeAndExecute(filpUpCommand);
  mySwitch.storeAndExecute(flipDownCommand);
}
