/**
 * 代理模式
 *
 * 为其他对象提供一种代理以控制对这个对象的访问
 *
 * when to use
 * - 远程代理，为一个对象在不同的地址空间提供局部代表
 * - 虚代理，根据需要创建开销很大的对象
 * - 保护代理，控制对原始对象的访问。保护代理用于对象应该有不同的访问权限的时候
 * - 智能引用，取代了简单的指针，它在访问对象时执行一些附加操作。如 引用计数
 */
function proxy() {
  // 定义实体和代理的共用接口，这样就在任何使用实体的地方都可以使用代理
  interface Image {
    displayImage(): void;
  }

  // 实体
  class RealImage implements Image {
    displayImage() {}
  }

  // 和实体有相同的接口，这样代理就可以用来替代实体
  class ProxyImage implements Image {
    // 保存一个引用使得代理可以访问实体
    private image: RealImage;

    displayImage() {
      if (this.image == null) {
        this.image = new RealImage();
      }

      this.image.displayImage();
    }
  }

  // usage
  const image: Image = new ProxyImage();

  image.displayImage();
}

/**
 * es6提供了原生的代理 Proxy
 *
 * @see http://es6.ruanyifeng.com/#docs/proxy
 */
