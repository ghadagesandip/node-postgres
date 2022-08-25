import Order from "./order.model";
export class OrderLib {
  public async getOrders() {
    try {
      let Orders = Order.findAll();
      return Promise.resolve(Orders);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  public async createOrder(data: any) {
    try {
      let orders = Order.create(data);
      return Promise.resolve(orders);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  public getOrdersPromise() {
    return Order.findAll();
  }
}
