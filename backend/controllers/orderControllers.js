import Order from "../models/orderModel.js";
import asyncHandler from "express-async-handler";

export const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemPrice,
    taxPrice,
    ShippingPrice,
    totalPrice,
  } = req.body;

  if(orderItems && orderItems.length === 0){
    res.status(400)
    throw new Error('No order items')
  }else{
    const order = new Order({
        orderItems,
        user: req.user._id,
        shippingAddress,
        paymentMethod,
        itemPrice,
        taxPrice,
        ShippingPrice,
        totalPrice,        
    })

    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
  }
});
