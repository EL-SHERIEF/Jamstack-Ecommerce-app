import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
import Loading from './loading'
import { CartContext } from '../../_context/CartContext';
import { useUser } from '@clerk/nextjs';
import OrderApis from '../../_utils/OrderApis';
import CartApis from '../../_utils/CartApis';
const CheckoutForm = ({amount,currency,websitecurrency}) => {

const {cart,setCart} = useContext(CartContext);
const {user} = useUser();

  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();
  createOrder();
  sendEmail();
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

event.preventDefault();
    const handleError = (error)=>{
        setLoading(false)
        setErrorMessage(error.message)
    }
    
    const {error: submitError} = await elements.submit();
    if (submitError){
        handleError(submitError);
        return;
    }
const res = await fetch('api/create-intent',{
    method:'POST',
    body: JSON.stringify({
        currency: currency,
        amount: amount,
    })
})
const clientSecret = await res.json()
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  const [ShowLoading, setShowLoading] = useState(false);

  const handleloading = () => {
    setShowLoading(true); //
  };

	const createOrder = () => {
		let productIds = [];
		cart.forEach(el => {
			productIds.push(el?.product?.id)
		})
		const data = {
			data: {
				email: user.primaryEmailAddress.emailAddress,
				username: user.fullName,
				amount,
				products: productIds
			}
		}
		OrderApis.createOrder(data).then((res) => {
			if (res) {
				cart.forEach(el => {
					CartApis.deleteCartItem(el?.id).then(result => {

					})
				})
			}
		})
	}
	const sendEmail = async () => {
		const res = await fetch('api/send-email', {
			method: 'POST',
			body: JSON.stringify({
				amount: amount,
				email: user.primaryEmailAddress.emailAddress,
				fullName: user.fullName
			})
		})
	}


  return (
    <form onSubmit={handleSubmit} className='my-14'>
      <PaymentElement />
      {ShowLoading && <Loading richingammount={amount} currency={websitecurrency}/>}
      <button disabled={!stripe} className='btn filled w-full my-7 noanim' onClick={handleloading}>Submit</button>
    </form>
  )
};

export default CheckoutForm;