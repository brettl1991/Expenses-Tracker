import React from "react";

import "./ExpenseItem.css";

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>08. 02. 2023</div>
      <div className="expense-item__description">
        <h2>Clothes</h2>
        <div className="expense-item__price">£294.65</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
