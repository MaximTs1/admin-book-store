import React from "react";
import "./OrderStatus.css"; // Ensure this CSS file exists and is styled correctly

const OrderStatusBar = ({ order }) => {
  // Define the stages and their corresponding symbols
  const stages = {
    Placed: { name: "Order Placed", symbol: "📝" },
    Processing: { name: "Processing", symbol: "🔄" },
    Shipped: { name: "Shipped", symbol: "🚚" },
    Delivered: { name: "Delivered", symbol: "📦" },
    Canceled: { name: "Canceled", symbol: "❌" },
    Refunded: { name: "Refunded", symbol: "🔙" },
  };

  // Find the symbol for the current status
  const currentStage = stages[order.status];

  return (
    <div className="order-status-bar">
      {currentStage ? (
        <div className="stage">
          <span className="stage-symbol">{currentStage.symbol}</span>
          <span className="stage-name">{currentStage.name}</span>
        </div>
      ) : (
        <div className="stage">Unknown Status</div>
      )}
    </div>
  );
};

export default OrderStatusBar;
