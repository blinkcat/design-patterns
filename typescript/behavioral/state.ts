/**
 * 状态
 *
 * 允许一个对象在其内部状态改变时改变它的行为。对象看起来似乎修改了它的类。
 *
 * when to use
 * - 一个对象的行为取决于它的状态，并且它必须在运行时刻根据状态改变它的行为
 * - 一个操作中含有庞大的多分支的条件语句，且这些分支依赖于该对象的状态
 */
function state() {
  // 定义一个接口以封装与 context 的一个特定状态相关的行为
  interface State {
    writeName(context: Context, name: string): void;
  }

  // 每一个子类实现一个与 context 的一个状态相关的行为
  class LowerCaseState implements State {
    writeName(context: Context, name: string) {
      console.log(name.toLowerCase());
      context.setState(new UpperCaseState());
    }
  }

  class UpperCaseState implements State {
    writeName(context: Context, name: string) {
      console.log(name.toUpperCase());
      context.setState(new LowerCaseState());
    }
  }

  // 定义客户感兴趣的接口，维护一个具体state子类的实例，这个实例定义当前的状态
  class Context {
    private state: State;

    constructor() {
      this.state = new LowerCaseState();
    }

    setState(state: State) {
      this.state = state;
    }

    writeName(name: string) {
      this.state.writeName(this, name);
    }
  }

  // usage
  const context = new Context();

  context.writeName('test1');
  context.writeName('test2');
}
