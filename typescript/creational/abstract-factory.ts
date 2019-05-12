/**
 * 抽象工厂
 *
 * 提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类
 *
 * when to use:
 * - 一个系统要独立于它的产品的创建、组合和表示时。
 * - 一个系统要由多个产品系列中的一个来配置时。
 * - 当你要强调一系列相关的产品对象的设计以便进行联合使用时。
 * - 当你提供一个产品类库，而只想显示它们的接口而不是实现时。
 *
 */
function abstractFactory() {
  // 为一类产品对象声明一个抽象类
  abstract class AbstractProductA {}
  abstract class AbstractProductB {}

  // 实现具体产品
  class ProductA1 extends AbstractProductA {}
  class ProductA2 extends AbstractProductA {}

  class ProductB1 extends AbstractProductB {}
  class ProductB2 extends AbstractProductB {}

  // 声明一个创建抽象产品对象的抽象类
  abstract class AbstractFactory {
    abstract createProductA(): AbstractProductA;
    abstract createProductB(): AbstractProductB;
  }

  // 实现创建具体产品对象的操作
  class ConcreteFactory1 extends AbstractFactory {
    createProductA() {
      return new ProductA1();
    }

    createProductB() {
      return new ProductB1();
    }
  }

  class ConcreteFactory2 extends AbstractFactory {
    createProductA() {
      return new ProductA2();
    }

    createProductB() {
      return new ProductB2();
    }
  }

  // usage
  function createProducts(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    return [productA, productB];
  }

  const factory1 = new ConcreteFactory1();
  createProducts(factory1);

  const factory2 = new ConcreteFactory2();
  createProducts(factory2);
}
