/**
 * 单例
 *
 * 保证一个类仅有一个实例，并提供一个访问它的全局访问点
 *
 *  when to use
 * - 当类只能有一个实例而且客户可以从一个众所周知的访问点访问它时
 * - 当这个唯一实例应该是通过子类化可扩展的，并且客户应该无需要更改代码就能使用一个扩展的实例时
 */
function singleton() {
  class Singleton {
    static get instance() {
      if (Singleton._instance === undefined) {
        Singleton._instance = new Singleton();
      }
      return Singleton._instance;
    }

    private static _instance;

    protected constructor() {}
  }

  // usage
  const singleton = Singleton.instance;
}
