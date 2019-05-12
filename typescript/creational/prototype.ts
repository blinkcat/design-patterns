/**
 * 原型
 *
 * 用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象
 *
 * when to use
 * - 当一个系统应该独立与它的产品创建，构成和表示时
 */
function prototype() {
  // 声明一个克隆自身的接口
  interface Cloneable<T> {
    clone(): T;
  }

  // 实现克隆操作
  class Product implements Cloneable<Product> {
    constructor(public name: string) {}

    clone() {
      return new Product(this.name);
    }
    // 重定义某些属性
    initialize(name: string) {
      this.name = name;
    }
  }

  // usage
  const product = new Product('product');

  const copy: Product = product.clone();

  // *js 自身提供了 Object​.create()，直接实现了原型模式。
  const copy2: Product = Object.create(product);
}
