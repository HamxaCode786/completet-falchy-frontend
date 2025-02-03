import React, { useState, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { MDBContainer, MDBCard, MDBCardBody, MDBBtn } from "mdb-react-ui-kit"; // Import MDB components
import { FormContext } from "../../contextapi/formContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const StripePayment = () => {
  const { formDataContext } = useContext(FormContext);
  const [loading, setLoading] = useState(false);
  const [cardComplete, setCardComplete] = useState(false); // Track if card details are valid
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      console.error("Stripe or elements not loaded");
      setLoading(false);
      return;
    }

    try {
      const sanitizedAmount = parseFloat(
        formDataContext?.payment_amount?.toString().replace(/[^\d.]/g, "")
      );

      if (isNaN(sanitizedAmount)) {
        throw new Error("Invalid payment amount");
      }

      const amountInCents = Math.round(sanitizedAmount * 100);

      const { data } = await axios.post("https://nijaga8856.pythonanywhere.com/transfers/create-payment-intent/", {
        amount: amountInCents,
      });

      const clientSecret = data.clientSecret;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        console.error(result.error.message);
        Swal.fire({
          title: "Payment Failed",
          text: result.error.message,
          icon: "error",
          confirmButtonColor: "#05021f",
          customClass: {
            popup: "swal-popup-custom",
            confirmButton: "swal-button-custom",
          },
        });
      } else if (result.paymentIntent.status === "succeeded") {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your payment has been transferred successfully, Our Team Wil Get In Touch With You In 10 Minutes",
          iconColor: "#05021f",
          confirmButtonColor: "#05021f",
          customClass: {
            popup: "swal-popup-custom",
            confirmButton: "swal-button-custom",
          },
        }).then(() => {
          navigate('/');
        });
      }
    } catch (error) {
      console.error(error.message);
      Swal.fire({
        title: "Payment Error",
        text: "Something went wrong during the payment process. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
        iconColor: "#05021f",
        confirmButtonColor: "#05021f",
        customClass: {
          popup: "swal-popup-custom",
          confirmButton: "swal-button-custom",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <MDBContainer className="main_container_stripe">
      <MDBCard style={{ margin: "0 auto", paddingRight: "10px", paddingLeft: "10px" }} className="card_stripe">
        <MDBCardBody className="body_card_stripe">
          <h3 className="text-center mb-4 text_123">Payment Details</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Full Name</label>
              <p className="form-control">{formDataContext?.full_name || "N/A"}</p>
            </div>

            <div className="mb-3">
              <label>Phone Number</label>
              <p className="form-control">{formDataContext?.phone_number || "N/A"}</p>
            </div>

            <div className="mb-3">
              <label>Amount</label>
              <p className="form-control">{formDataContext?.payment_amount || "0.00"}</p>
            </div>

            <div className="mb-3">
              <label>Card Details</label>
              <div className="card-details-container">
                <div className="card-input-group">
                  <div className="card-number">
                    <CardElement 
                      options={{ hidePostalCode: true, style: { base: { fontSize: '16px' } } }} 
                      onChange={(event) => setCardComplete(event.complete)} // Track card validity
                    />
                  </div>
                </div>
              </div>
            </div>

            <MDBBtn 
              className="button_stripe_1" 
              block 
              type="submit" 
              disabled={!stripe || loading || !cardComplete} // Disable button if card is invalid
            >
              {loading ? "Processing..." : "Pay Now"}
            </MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

const StripePaymentWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <StripePayment />
    </Elements>
  );
};

export default StripePaymentWrapper;



