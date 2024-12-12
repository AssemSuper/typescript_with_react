import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { getAllPayments, PaymentType } from "../../data/DataFunctions";
import PaymentTableRow from "./PaymentTableRow";
import { useNavigate, useParams } from "react-router-dom";

const Transactions = (): ReactElement => {
  //debugger;
  //const payments = getAllPayments();
  const [payments, setPayments] = useState<PaymentType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedOrder, setSelectedOrder] = useState<string>("");
  const navigate=useNavigate()

  // getAllPayments().then((response) => {
  //   response.json().then((data) => {
  //     setPayments(data);
  //     setLoading(false);
  //   });
  // });

  const loadData = () => {
    getAllPayments().then((response) => {
      //response.json().then((data) => {

      setPayments(response.data);
      setLoading(false);
    });
  };

  useEffect(() => loadData(), []);
  const params = useParams();
  console.log("in transaction component", params);
  console.log(params.orderId);
  const desiredOrder: string = params.orderId != null ? params.orderId : "";
  console.log("desired order is", desiredOrder);
  if (desiredOrder !== selectedOrder) {
    setSelectedOrder(desiredOrder);
  }

  // console.log()

  // const changeCountry =(e:ChangeEvent<HTMLSelectElement>) =>{
  //   const option =e.target.options.selectedIndex;
  //   console.log("the item was selected"+option)
  // }
  const countries: string[] = payments.map((payment) => payment.country);
  const unique_countries: string[] = Array.from(new Set(countries));
  const [selectedCountry, setselectedCountry] = useState<string>("");

  const changeCountry = (e: ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.options.selectedIndex;
    navigate('/find')
    setselectedCountry(unique_countries[option]);
  };

  return (
    <div>
      {loading && (
        <p className="loadingMessage">The data is laoding please wait</p>
      )}
      {!loading && (
        <>
          <div className="transactionCountrySelector">
            Select country:{" "}
            <select id="countrySelectory" onChange={changeCountry}>
              {unique_countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <table className="transactionsTable">
            <thead>
              <tr>
                <th>Id</th>
                <th>orderId</th>
                <th>Date</th>
                <th>Country</th> <th>Currency</th> <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {selectedOrder !== "" &&
                payments
                  .filter((payment) => payment.orderId === selectedOrder)
                  .map((payment) => (
                    <PaymentTableRow key={payment.id} {...payment} />
                  ))}
              {selectedOrder === "" &&
                payments
                  .filter((payment) => payment.country === selectedCountry)
                  .map((payment) => (
                    <PaymentTableRow key={payment.id} {...payment} />
                  ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};
export default Transactions;
