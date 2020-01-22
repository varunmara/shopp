import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_bt5Uf00jQ6ZFv2tGB1mmyB1q00bWLFIpjs";

  const onToken = token => {
    console.log(token);
    alert("payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Varun Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
