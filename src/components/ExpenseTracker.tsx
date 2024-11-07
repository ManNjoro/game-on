import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters" })
    .max(50),
  amount: z.number({ invalid_type_error: "Amount is required" }).min(1),
  category: z.string(),
});

type FormData = z.infer<typeof schema>;

const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState([])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValues) => {
    setExpenses([...expenses, data]);
};
console.log(expenses);

const handleDelete = (category: string) => {
    setExpenses(expenses.filter((expense) => expense.category!== category));
}

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            type="text"
            id="description"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            type="number"
            id="amount"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option disabled></option>
            <option value="groceries">Groceries</option>
            <option value="utilities">Utility</option>
            <option value="entertainment">Entertainment</option>
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="mb-3">
          <select
            {...register("category")}
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected value="all">All categories</option>
            <option value="groceries">Groceries</option>
            <option value="utilities">Utility</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Display expense data here */}
          {expenses.length > 0 &&
          expenses.map((expense, index) => (
            <tr key={index}>
                <td>{expense.description}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td><button className="btn btn-danger" onClick={()=> handleDelete(expense.category)}>Delete</button></td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </>
  );
};

export default ExpenseTracker;
