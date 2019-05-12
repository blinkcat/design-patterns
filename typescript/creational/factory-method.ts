/**
 * 工厂方法
 *
 * 定义一个用于创建对象的接口，让子类决定实例化哪一个类。使一个类的实例化延迟到其子类
 *
 * when to use
 * - 当一个类不知道它所必须创建的对象的类的时候
 * - 当一个类希望由它的子类来指定它所创建的对象的时候
 * - 当类将创建对象的职责委托给多个帮助子类中的某一个，并且你希望将哪一个帮助子类是代理者这一信息局部化的时候
 *
 */

function factoryMethod() {
  // 工厂方法所创建的产品抽象类
  abstract class Product {}

  // 产品的具体实现
  class ConcreteProduct extends Product {}

  // 在这里声明工厂方法，该方法返回 Product 对象
  abstract class Creator {
    abstract createProduct(): Product;
  }

  // 重新定义
  class ConcreteCreator extends Creator {
    createProduct() {
      return new ConcreteProduct();
    }
  }

  // usage
  const creator: Creator = new ConcreteCreator();
  const product = creator.createProduct();
}
