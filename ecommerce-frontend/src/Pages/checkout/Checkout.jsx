import './Checkout.css';
import './CheckoutHeader.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { OrderSummary } from './OrderSummary';

export function Checkout({ cart }) {

  const [deliveryOptions, setDeliveryOption] = useState([]);

  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    axios.get('/api/delivery-options?expand=estimatedDeliveryTime').then((response) => {

      setDeliveryOption(response.data);

    });

    axios.get('/api/payment-summary').then((response) => {
      setPaymentSummary(response.data);
    })
  }, []);

  return (
    <>
      <title>Checkout</title>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <a href="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </a>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<a className="return-to-home-link"
              href="/">3 items</a>)
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions}/>

          <div className="payment-summary">
            <div className="payment-summary-title">
              Payment Summary
            </div>

            {paymentSummary && (

              <>

              <div className="payment-summary-row">
              <div>
              Items ({paymentSummary.totalItems}):
              </div>
              <div className="payment-summary-money">${(paymentSummary.productCostCents/100).toFixed(2)}</div>
            </div>

            <div className="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div className="payment-summary-money">${(paymentSummary.shippingCostCents).toFixed(2)}</div>
            </div>

            <div className="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div className="payment-summary-money">${(paymentSummary.totalCostBeforeTaxCents).toFixed(2)}</div>
            </div>

            <div className="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div className="payment-summary-money">${(paymentSummary.taxCents/100).toFixed(2)}</div>
            </div>

            <div className="payment-summary-row total-row">
              <div>Order total:</div>
              <div className="payment-summary-money">${(paymentSummary.totalCostCents/100).toFixed(2)}</div>
            </div>

            <button className="place-order-button button-primary">
              Place your order
            </button>

              </>
            )
            }


        </div>
      </div>
    </div >

    </>
  )
}