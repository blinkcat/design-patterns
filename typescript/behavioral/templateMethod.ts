/**
 * 模板方法
 *
 * 定义一个操作中的算法的骨架，而将一些步骤延迟到子类中。模板方法使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤
 *
 * when to use
 * - 一次性实现一个算法的不变的部分，并将可变的行为留给子类
 * - 各子类中公共的行为应被提取出来并集中到一个公共父类中以避免代码重复
 * - 控制子类扩展
 */
function templateMethod() {
  // 定义一个骨架
  abstract class Game {
    abstract init(): void;
    abstract start(): void;
    abstract end(): void;
    play() {
      this.init();
      this.start();
      this.end();
    }
  }

  class Football extends Game {
    init() {
      console.log('football game init');
    }

    start() {
      console.log('football game start');
    }

    end() {
      console.log('football game end');
    }
  }

  class Basketball extends Game {
    init() {
      console.log('basketball game init');
    }

    start() {
      console.log('basketball game start');
    }

    end() {
      console.log('basketball game end');
    }
  }

  // usage
  let game: Game = new Football();

  game.play();

  game = new Basketball();

  game.play();
}
