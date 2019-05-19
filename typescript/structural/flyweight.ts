/**
 * 享元
 *
 * 运用共享技术有效地支持大量细粒度的对象
 *
 * - flyweight 执行时所需的状态必定是内部的或外部的。内部状态存储于具体的 flyweight 对象中。
 * 而外部对象则由 client 对象存储或计算。当用户调用 flyweight 对象的操作时，将该状态传递给它。
 * - 用户不应直接对具体的 flyweight 类进行实例化，而只能从 flyweightFactory 对象得到具体的 flyweight 对象，这可以保证对它们适当地进行共享。
 *
 * when to use
 * - 一个应用程序使用了大量的对象
 * - 完全由于使用大量的对象，造成很大的存储开销
 * - 对象的大多数状态都可变为外部状态
 * - 如果删除对象的外部状态，那么可以用相对较少的共享对象取代很多组对象
 * - 应用程序不依赖于对象标识。
 */
function flyweight() {
  // 描述一个接口，通过这个接口 flyweight 可以接受并作用于外部状态
  interface Circle {
    setX(x: number): void;

    setY(y: number): void;

    setRadius(radius: number): void;
    draw(): void;
  }

  class ColorfulCircle implements Circle {
    private x: number;
    private y: number;
    private radius: number;

    // color 是内部状态
    constructor(private color: string) {}

    setX(x: number) {
      this.x = x;
    }

    setY(y: number) {
      this.y = y;
    }

    setRadius(radius: number) {
      this.radius = radius;
    }

    draw() {}
  }

  // 创建并管理 flyweight 对象
  class ShapeFactory {
    private static map = new Map<string, Circle>();

    protected constructor() {}

    static getCircle(color: string): Circle {
      if (ShapeFactory.map.has(color)) {
        return ShapeFactory.map.get(color);
      } else {
        const colorfulCircle = new ColorfulCircle(color);

        ShapeFactory.map.set(color, colorfulCircle);

        return colorfulCircle;
      }
    }
  }

  // usage
  const colors = ['Red', 'Green', 'Blue', 'White', 'Black'];

  for (let i = 0; i < 100; i++) {
    const circle: Circle = ShapeFactory.getCircle(colors[i % colors.length]);

    circle.setX(getRandomX());
    circle.setY(getRandomY());
    circle.setRadius(getRandomX() + getRandomY());
    circle.draw();
  }

  function getRandomX() {
    return Math.random() * 100;
  }
  function getRandomY() {
    return Math.random() * 100;
  }
}
