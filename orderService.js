export class OrderService {
  constructor(emailService, InverntryService) {
    this.emailService = emailService;
    this.InverntryService = InverntryService;
  }
  createOrder(orderData) {
    //create order logic

    //if success
    this.emailService.sendEmail(orderData);
    this.InverntryService.updateInventry(orderData);

    return { id: Date.now().toString(), ...orderData };
  }
}
