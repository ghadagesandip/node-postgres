import { Request, Response, Application } from "express";
import { BaseCotroller } from "../base-api";
import { OrderLib } from "./order.lib";

export class OrderApi extends BaseCotroller {
  constructor() {
    super();
    this.init();
  }

  public register(express: Application): void {
    express.use("/api/orders", this.router);
  }

  public init(): void {
    this.router.get("/", this.getOrders);
    this.router.post("/", this.addNewOrder);
    this.router.put("/:orderId", this.updateOrder);
  }

  //this is using aync await it actually await for query to execute
  public async getOrders(req: Request, res: Response) {
    const orderlib: any = new OrderLib();
    try {
      let orders = await orderlib.getOrders();
      res.json({data:orders});
    } catch (err) {
      res.status(400).send(err);
    }
  }

  //   //this is using promise continue execution of next task and
  //   // send response once promise is resolved
  //   public async getOrders(req: Request, res: Response) {
  //     const orderLib: any = new OrderLib();
  //     console.log("geting data");

  //     orderLib
  //       .getOrders()
  //       .then((orders: any) => {
  //         console.log("json data foud", orders);
  //         res.json(orders);
  //       })
  //       .catch((err: any) => {
  //         res.status(400).send(err);
  //       });

  //     console.log("done geting data");
  //   }

  public async addNewOrder(req: Request, res: Response){
    const orderlib: any = new OrderLib();
    try {
      let orders = await orderlib.createOrder(req.body);
      res.json(orders);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  public getContactWithID(req: Request, res: Response) {}

  public updateOrder(req: Request, res: Response) {}
}
