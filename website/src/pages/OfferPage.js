import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function OfferPage() {
  const location = useLocation();
  const { address, ownerName = "Owner", userEmail, price = 0, image } = location.state || {}; // Fallback for undefined price

  // Dynamic email template with custom fields
  const initialEmailText = `
Hi ${ownerName},

I am interested in your property located at ${address}. I would like to discuss a potential offer.

Please let me know if you are available for a conversation.

Best regards,
Cojomada Team
  `;

  // Use the price directly as Cojomada Estimated Cost
  const cojomadaEstimatedCost = price;

  const [emailText, setEmailText] = useState(initialEmailText);

  const handleSendEmail = () => {
    const subject = `Offer for ${address}`;
    const body = encodeURIComponent(emailText);
    const mailtoLink = `mailto:${userEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="App-header">
      <h2>Offer Preview for {address}</h2>

      {/* Display the House Image */}
      {image && <img src={image} alt={`House at ${address}`} className="property-image" />}

      {/* Display Cojomada Estimated Cost*/}
      <div className="offer-details">
        <p><strong>Cojomada Estimated Cost:</strong> ${cojomadaEstimatedCost.toLocaleString()}</p>
      </div>

      {/* Editable Email Text Area */}
      <textarea
        value={emailText}
        onChange={(e) => setEmailText(e.target.value)}
        rows={10}
        cols={50}
        className="email-textarea"
      />
      <button onClick={handleSendEmail} className="button-64">Send</button>
    </div>
  );
}

export default OfferPage;
