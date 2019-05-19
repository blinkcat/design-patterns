/**
 * 适配器模式
 *
 * 将一个类的接口转换成客户希望的另外一个接口。adapter 模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。
 *
 * when to use
 *
 * - 你想使用一个已经存在的类，而它的接口不符合你的需求
 * - 你想创建一个可以复用的类，该类可以与其他不相关的类或不可预见的类协同工作
 * - 你想使用一些已经存在的子类，但是不可能对每一个都进行子类化以匹配它们的接口。对象适配器可以适配它的父类接口
 */
function adapter() {
  // 目标对象，拥有与特定领域相关的接口
  abstract class Target {
    abstract request();
  }

  // 需要被适配的类
  class Adaptee {
    specificRequest() {}
  }

  // 对 Adaptee 的接口与 Target 的接口进行适配
  class Adapter extends Target {
    constructor(private adaptee: Adaptee) {
      super();
    }

    request() {
      return this.adaptee.specificRequest();
    }
  }

  // usage
  const target: Target = new Adapter(new Adaptee());

  target.request();
}
