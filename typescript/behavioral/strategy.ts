/**
 * 策略
 *
 * 定义一系列的算法，把它们一个个封装起来，并且使它们可相互替换。本模式使得算法可独立于使用它的客户而变化
 *
 * when to use
 * - 许多相关的类仅仅是行为有异
 * - 需要使用一个算法的不同变体
 * - 算法使用客户不应知道的数据
 * - 一个类定义了多种行为，并且这些行为在这个类的操作中以多个条件语句的形式出现
 */
function strategy() {
  // 定义所有支持的算法的公共接口
  interface Strategy {
    execute(): void;
  }

  class FirstStrategy implements Strategy {
    execute() {
      console.log('first');
    }
  }

  class SecondStrategy implements Strategy {
    execute() {
      console.log('second');
    }
  }

  // 用一个具体的strategy对象来配置，维护一个对strategy对象的引用
  class Context {
    constructor(private strategy: Strategy) {}

    execute() {
      this.strategy.execute();
    }
  }

  // usage
  let context = new Context(new FirstStrategy());

  context.execute();

  context = new Context(new SecondStrategy());

  context.execute();
}
