import { EventEmitter } from "node:events";

export class OrderService extends EventEmitter {
  //   constructor(emailService, InverntryService) {
  //     this.emailService = emailService;
  //     this.InverntryService = InverntryService;
  //   }
  createOrder(orderData) {
    //create order logic

    //if success
    this.emit("order:created", orderData);

    // this.emailService.sendEmail(orderData);
    // this.InverntryService.updateInventry(orderData);

    return { id: Date.now().toString(), ...orderData };
  }
}
