import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import FormContainer from "../Components/FormContainer";
import CheckoutSteps from "../Components/CheckoutSteps";
import { savePaymentMethod } from "../actions/cartActions";

const PaymentScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const navigate = useNavigate();

  if (!shippingAddress) {
    navigate("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("paypal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));

    navigate("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
        <Col>
          <Form.Check
            type="radio"
            label="Paypal or Credit Card"
            id="paypal"
            name="paymentMethod"
            value="Paypal"
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></Form.Check>
          {/* <Form.Check
            type="radio"
            label="Stripe"
            id="stripe"
            name="paymentMethod"
            value="stripe"
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></Form.Check> */}
        </Col>
        </Form.Group>        
        <Button type="submit" variant="primary" className="my-2">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
