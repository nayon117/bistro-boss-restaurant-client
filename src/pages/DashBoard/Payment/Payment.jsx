import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTile/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO:ADD PUBLISHABLE KEY
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading="payment"
        subheading="please pay to eat"
      ></SectionTitle>
      <div>
              <Elements stripe={stripePromise}>
                  <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};
export default Payment;
