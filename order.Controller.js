export class OrderController {
    constructor(orderService){
        this.orderService=orderService
    }
  create(req, res) {
    const order=this.orderService.createOrder(req.body)
    return res.json({ order });
  }
}
