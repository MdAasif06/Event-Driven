import express from "express";
import { OrderController } from "./order.Controller.js";
import { emailService } from "./EmailService.js";
import { InventoryService } from "./inventryService.js";
import { OrderService } from "./orderService.js";
const app = express();

//built in middleware
app.use(express.json());

//Dependency initilization
const emailervice = new emailService();
const inventoryService = new InventoryService();
const orderService = new OrderService();
const ordercontroler = new OrderController(orderService);

//routes
app.use("/orders", (req, res) => ordercontroler.create(req, res));

//register listener
orderService.on("order:created", (orderData) => {
  //   console.log("event received:order created", orderData);
  emailervice.sendEmail(orderData);
});
orderService.on("order:created", (orderData) => {
  inventoryService.updateInventry(orderData);
});

app.listen(4500, () => {
  console.log(`server is running port 4500`);
});
