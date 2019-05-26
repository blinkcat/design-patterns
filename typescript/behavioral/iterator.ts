/**
 * 迭代器模式
 *
 * 提供一种方法顺序访问一个聚合对象中各个元素，而又不需要暴露该对象的内部表示
 *
 * when to use
 * - 访问一个聚合对象的内容而无需暴露它的内部表示
 * - 支持对聚合对象的多种遍历
 * - 为遍历不同的聚合结构提供一个统一的接口
 */
function iterator() {
  // 迭代器定义访问和遍历元素的接口
  interface Iterator<T> {
    first(): void;
    next(): void;
    isDone(): boolean;
    currentItem(): T;
  }

  // 聚合定义创建相应迭代器对象的接口
  abstract class Aggregate<T> {
    abstract createIterator(): Iterator<T>;
  }

  class ConcreteIterator<T> implements Iterator<T> {
    private current = 0;

    constructor(private list: T[]) {}

    first() {
      this.current = 0;
    }

    next() {
      this.current++;
    }

    isDone() {
      return this.current >= this.list.length;
    }

    currentItem() {
      return this.list[this.current];
    }
  }

  class ConcreteAggregate<T> extends Aggregate<T> {
    constructor(private list: T[]) {
      super();
    }

    createIterator() {
      return new ConcreteIterator<T>(this.list);
    }
  }

  // usage
  const aggregate: Aggregate<number> = new ConcreteAggregate([1, 2, 3, 4]);

  const iterator = aggregate.createIterator();

  for (iterator.first; !iterator.isDone; iterator.next) {
    console.log(iterator.currentItem());
  }
}
