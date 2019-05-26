/**
 * 职责链
 *
 * 使多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系。将这些对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它为止。
 *
 * when to use
 *
 * - 有多个对象可以处理一个请求，哪个对象处理该请求运行时刻自动确定
 * - 你想在不明确指定接收者的情况下，向多个对象中的一个提交一个请求
 * - 可处理一个请求的对象集合应被动态指定
 *
 */
function chainOfResponsibility() {
  enum Level {
    INFO = 1,
    DEBUG,
    ERROR
  }

  // 定义处理请求的抽象类
  abstract class Logger {
    protected level: Level;

    constructor(protected nextLogger: Logger) {}

    log(level: Level, message: string) {
      if (this.level <= level) {
        this.write(message);
      } else if (this.nextLogger) {
        this.nextLogger.write(message);
      }
    }

    protected abstract write(message: string): void;
  }

  // 具体实现
  class ConsoleLogger extends Logger {
    constructor(level: Level, nextLogger: Logger = null) {
      super(nextLogger);

      this.level = level;
    }

    write(message: string) {
      console.log(this.level, message);
    }
  }

  class ErrorLogger extends Logger {
    constructor(level: Level, nextLogger: Logger = null) {
      super(nextLogger);

      this.level = level;
    }

    write(message: string) {
      console.log(this.level, message);
    }
  }

  class FileLogger extends Logger {
    constructor(level: Level, nextLogger: Logger = null) {
      super(nextLogger);

      this.level = level;
    }

    write(message: string) {
      console.log(this.level, message);
    }
  }

  // usage
  const fileLogger: Logger = new FileLogger(Level.INFO);
  const errorLogger: Logger = new ErrorLogger(Level.ERROR, fileLogger);
  const consoleLogger: Logger = new ConsoleLogger(Level.DEBUG, errorLogger);

  consoleLogger.log(Level.INFO, 'chain of responsibility');
}
