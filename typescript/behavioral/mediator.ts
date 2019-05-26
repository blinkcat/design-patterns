/**
 * 中介者
 *
 * 用一个中介对象来封装一系列的对象交互。中介者使各对象不需要显示地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。
 *
 * when to use
 * - 一组对象以定义良好但是复杂的方式进行通信。产生的相互依赖关系结构混乱且难以理解。
 * - 一个对象引用其他很多对象并且直接与这些对象通信，导致难以复用该对象
 * - 想定制一个分布在多个类中的行为，而又不想生成太多的子类
 */
function mediator() {
  // 中介者定义一个接口用于与各同事对象通信
  abstract class Mediator {
    abstract contact(message: string, person: Person): void;
  }

  abstract class Person {
    constructor(protected name: string, protected mediator: Mediator) {}

    abstract contact(message: string): void;
  }

  // 每一个同事类都知道它的中介者对象
  // 每一个同事对象在需要与其他的同事通信的时候，与它的中介者通信
  class HouseOwner extends Person {
    constructor(name: string, mediator: Mediator) {
      super(name, mediator);
    }

    contact(message: string) {
      this.mediator.contact(message, this);
    }
  }

  class Tenant extends Person {
    constructor(name: string, mediator: Mediator) {
      super(name, mediator);
    }

    contact(message: string) {
      this.mediator.contact(message, this);
    }
  }

  // 具体的中介者通过协调各同事对象实现协作行为
  class HouseMediator extends Mediator {
    private houseOwner: HouseOwner;
    private tenant: Tenant;

    setHouseOwner(houseOwner: HouseOwner) {
      this.houseOwner = houseOwner;
    }

    setTenant(tenant: Tenant) {
      this.tenant = tenant;
    }

    contact(message: string, person: Person) {
      if (person === this.tenant) {
        console.log('tenant: ', message);
      } else if (person === this.houseOwner) {
        console.log('houseOwner: ', message);
      }
    }
  }

  // usage
  const houseMediator = new HouseMediator();

  const houseOwner = new HouseOwner('tom', houseMediator);
  const tenant = new Tenant('jerry', houseMediator);

  houseMediator.setHouseOwner(houseOwner);
  houseMediator.setTenant(tenant);

  houseOwner.contact('hi jerry');
  tenant.contact('hi, tom');
}
