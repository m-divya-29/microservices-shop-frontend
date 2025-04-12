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
  return (
    <>
      <table>
        <thead>
            <tr>
            <th>id</th>
            <th>orderNumber</th>
            <th>skuCode</th>
            <th>price</th>
            <th>quantity</th>
            </tr>
        </thead>
        <tbody>
          {mockOrders.map((mockOrder) => (
            <tr key = {mockOrder.id}>{/* Each child in a list should have a unique "key" prop. */}
              <td> {mockOrder.id} </td>
              <td> {mockOrder.orderNumber} </td>
              <td> {mockOrder.skuCode} </td>
              <td> {mockOrder.price} </td>
              <td> {mockOrder.quantity} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
