import { useKeycloak } from "@react-keycloak/web";
import { useEffect, useState } from "react";
import Logout from "../auth/Logout";
import AddOrders from "./AddOrders";

// A component that shows all orders
const mockOrders = [
  {
    id: 1,
    orderNumber: "492178bb-3270-4f87-8381-948f29e0b886",
    skuCode: "Another best phone ever",
    price: 699.0,
    quantity: 2,
  },
  {
    id: 2,
    orderNumber: "7b320611-e72e-4a9b-945e-fa65a75f4f66",
    skuCode: "iphone_15",
    price: 699.0,
    quantity: 2,
  },
];

export default function Orders() {
  const [ordersValues, setOrdersValues] = useState([]); // if no orders, empty [] default.
  const { keycloak } = useKeycloak();

  // this function updates the values(read from ordersValues)
  useEffect(() => {
    // useEffect() it executes on page load as there are no dependencies to it.
    // setOrdersValues(mockOrders);
    fetch("http://localhost:9000/api/order", {
      headers: {
        authorization: `Bearer ${keycloak.token}`,
      },
    })
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
        setOrdersValues(data);
      })
      .catch((error) => setOrdersValues([]));
  }, []); // no dependencies, hence []

  return (
    <>
      <h2>Previous orders</h2>
      <table>
        <thead>
          <tr>
            <th>id</th>
            {/* <th>orderNumber</th> */}
            <th>skuCode</th>
            <th>price</th>
            <th>quantity</th>
          </tr>
        </thead>
        <tbody>
          {ordersValues.map((order) => (
            <tr key={order.id}>
              {/* Each child in a list should have a unique "key" prop. */}
              <td> {order.id} </td>
              {/* <td> {mockOrder.orderNumber} </td> */}
              <td> {order.skuCode} </td>
              <td> {order.price} </td>
              <td> {order.quantity} </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr></hr>
      <div>
        <AddOrders />
      </div>
      <Logout />
    </>
  );
}
