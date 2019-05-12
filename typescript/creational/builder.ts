/**
 * builder 生成器
 *
 * 将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示
 *
 * when to use
 * - 当创建复杂对象的算法应该独立于该对象的组成部分以及它们的装配方式时
 * - 当构造过程必须允许被构造的对象有不同的表示时
 *
 */
function builder() {
  // 为创建一个 product 对象的各个部件指定抽象类
  abstract class Builder {
    buildPartA() {}
    buildPartB() {}
    getResult() {
      return null;
    }
  }

  // 使用 builder 的对象
  class Direcotr {
    constructor(private builder: Builder) {}

    construct() {
      this.builder.buildPartA();
      this.builder.buildPartB();
    }
  }

  // 实现 builder 来构造和装配产品的各个部件
  class ConcreteBuilder extends Builder {
    buildPartA() {}
    buildPartB() {}
    getResult() {}
  }

  //  usage
  const builder = new ConcreteBuilder();
  const director = new Direcotr(builder);

  director.construct();
  const product = builder.getResult();
}
