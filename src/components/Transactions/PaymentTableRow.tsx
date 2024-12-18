import { ReactElement } from "react";
import { PaymentType } from "../../data/DataFunctions";

const PaymentTableRow = (props: PaymentType): ReactElement => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.orderId}</td>
      <td>{props.date}</td>
      <td>{props.country}</td>
      <td>{props.currency}</td>
      <td>{props.amount}</td>
    </tr>
  );
};
export default PaymentTableRow;
