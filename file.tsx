import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";

import { Provider } from "react-redux";
import AppMain from "./screens/AppMain";
import store from "./redux/createStore";
import { StripeProvider, useStripe } from "@stripe/stripe-react-native";

const StripeTest = () => {
  const [key, setKey] = useState("");
  const { confirmPayment } = useStripe();
  useEffect(() => {
    fetch("http://localhost:3000/create-payment-intent", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        const intent = res as { clientSecret: string };
        setKey(intent.clientSecret);
      });
  }, []);
  const handlePayment = async () => {
    const { error } = await confirmPayment(key, {
      type: "Card",
      billingDetails: {
        email: "oussama.abdallah.1998@gmail.com",
      },
    });
    if (error) {
      console.log("this error => ", error);
    } else {
      console.log("Payment successful!");
    }
  };
  return (
    <View>
      <CardField
        postalCodeEnabled={false}
        style={{
          height: 50,
          width: "100%",
        }}
      />
      <Button title="Pay now" onPress={handlePayment} />
    </View>
  );
};
