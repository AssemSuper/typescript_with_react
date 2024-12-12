import { ChangeEvent, FormEvent, useReducer, useState } from "react";
import { addNewTransaction, PaymentType } from "../../data/DataFunctions";

const AddTransactions = (): JSX.Element => {
  const initialNewTransactionState: PaymentType = {
    id: 0,
    orderId: "",
    date: new Date().toISOString().slice(0, 10),
    amount: 0,
    country: "USA",
    currency: "USD",
    taxCode: 0,
    taxRate: 0.21,
    type: "SALE",
  };
  const [message, setMessage] = useState<string>("");
  const formReducer = (
    state: PaymentType,
    data: { field: string; value: any }
  ): PaymentType => {
    return { ...state, [data.field]: data.value };
  };

  const [newTransaction, dispatch] = useReducer(
    formReducer,
    initialNewTransactionState
  );
  const handlesubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setMessage("saving");
    console.log(newTransaction);
    const response = addNewTransaction(newTransaction);
    //console.log(response);
    response
      .then((result) => {
        if (result.status === 200) {
          setMessage("Saving new transaction");
        } else {
          setMessage("something went wrong");
        }
      })
      .catch((error) => console.log("Went Wrong", console.error));
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch({ field: event.target.id, value: event.target.value });
  };
  return (
    <form className="addTransactionsForm" onSubmit={handlesubmit}>
      <h2>New transaction</h2>
      <label htmlFor="orderId">Order Id</label>
      <input
        type="text"
        id="orderId"
        value={newTransaction.orderId}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        value={newTransaction.date}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        value={newTransaction.country}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="currency">Currency</label>
      <input
        type="text"
        id="currency"
        value={newTransaction.currency}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="amount">Amount</label>
      <input
        type="text"
        id="amount"
        value={newTransaction.amount}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="taxCode">Tax Code</label>
      <input
        type="text"
        id="taxCode"
        value={newTransaction.taxCode}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="taxRate">Tax Rate</label>
      <input
        type="text"
        id="taxRate"
        value={newTransaction.taxRate}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="type">Type</label>
      <input
        type="text"
        id="type"
        value={newTransaction.type}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Save</button>
      <p>{message}</p>
    </form>
  );
};

export default AddTransactions;
