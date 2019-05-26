/**
 * 解释器
 *
 * 给定一个语言，定义它的文法的一种表示，并定义一个解释器，这个解释器使用该表示来解释语言中的句子。
 *
 * when to use
 * - 当有一个语言需要解释执行，并且你可将该语言中的句子表示为一个抽象语法树时，可使用解释器模式。
 */
function interpreter() {
  // bao'han
  type Context = string;

  // 声明一个抽象的解释操作，这个接口为抽象语法树中所有的节点所共享
  interface Expression {
    interpret(context: Context): boolean;
  }

  // 终结符表达式
  class TerminalExpression implements Expression {
    constructor(private data: string) {}

    interpret(context: Context) {
      return context.indexOf(this.data) > -1;
    }
  }

  // 非终结符表达式
  class OrExpression implements Expression {
    constructor(private expr1: Expression, private expr2: Expression) {}

    interpret(context: Context) {
      return this.expr1.interpret(context) || this.expr2.interpret(context);
    }
  }

  class AndExpression implements Expression {
    constructor(private expr1: Expression, private expr2: Expression) {}
    interpret(context: Context) {
      return this.expr1.interpret(context) && this.expr2.interpret(context);
    }
  }

  // usage
  // tom || jerry
  const maleExpression: Expression = new OrExpression(new TerminalExpression('tom'), new TerminalExpression('jerry'));

  maleExpression.interpret('tom');
}
