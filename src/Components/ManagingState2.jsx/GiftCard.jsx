import React, { useState } from "react";

function GiftCard() {
  const [giftCard, setGiftCard] = useState({
    firstName: "Roy",
    lastName: "Matar",
    text: "Free dinner for 2 guests",
    valid: true,
    instructions: "To use your coupon, click on the button below",
  });
  function spendGiftCard() {
    setGiftCard((prevState) => {
      alert("You have spent your gift card, Thank you");
      return {
        ...prevState,
        text: "Your coupon has been used",
        valid: false,
        instructions: "Please visit our restaurant to renew your coupon",
      };
    });
  }
  return (
    <div style={{ padding: "40px" }}>
      <h1>Gift card page</h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>{giftCard.text}</h3>
      <p>{giftCard.instructions}</p>
      {giftCard.valid && (
        <button onClick={spendGiftCard}>Spend Gift Card</button>
      )}
    </div>
  );
}

export default GiftCard;
