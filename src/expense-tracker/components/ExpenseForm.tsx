import React from "react";

const ExpenseForm = () => {
  return (
    <form>
      <div className="mb3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input type="text" id="description" className="form-control" />
      </div>
      <div className="mb3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input type="number" id="amount" className="form-control" />
      </div>
      <div className="mb3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input type="text" id="description" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category</label>
        <select id="category" className="form-select">
          <option value=""></option>
        </select>
      </div>
    </form>
  );
};

export default ExpenseForm;
