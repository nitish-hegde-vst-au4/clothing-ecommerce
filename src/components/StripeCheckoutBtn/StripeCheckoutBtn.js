import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { clearCart } from '../../Redux/cart/cartActions';
import { useDispatch } from 'react-redux';

const StripeCheckoutBtn = ({ price }) => {
  const amount = price * 100;
  const publishableKey =
    'pk_test_51GreXsIwdMCp1LpY7WWax7fNQTxlguhMsipL9iT6JWkLA7zB0UcbIc6yX374WT6Swk7QJ7lU4uzypqMKkuraKHZf00B3hMgaLR';
  const dispatch = useDispatch();
  const onToken = (token) => {
    console.log(token);
    dispatch(clearCart());
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      description={`Your total is $${price}`}
      image='https://sendeyo.com/up/d/f3eb2117da'
      panelLabel='Pay '
      shippingAddress
      billingAddress
      amount={amount}
      stripeKey={publishableKey}
      token={onToken}
    />
  );
};

export default StripeCheckoutBtn;
