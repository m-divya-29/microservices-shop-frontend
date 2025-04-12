import { useKeycloak } from "@react-keycloak/web";
import { useEffect, useState } from "react";

export default function AddOrders() {
  const [allProducts, setAllProducts] = useState([]);
  const { keycloak } = useKeycloak();

  useEffect(() => {
    fetch("http://localhost:9000/api/product", {
      headers: {
        authorization: `Bearer ${keycloak.token}`,
      },
    }).then(async (responseData) => {
      const data = await responseData.json();
      setAllProducts(data);
    });
  }, []);

  function placeOrder(prod) {
    // backend call to post order
    fetch("http://localhost:9000/api/order", {
      method: "POST",
      headers: {
        authorization: `Bearer ${keycloak.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: prod.price,
        skuCode: prod.skuCode,
        quantity: prod.computedQuantity,
      }),
    })
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  function handleInputChange(event, id) {
    const mappedProds = allProducts.map((prod) => {
      if (prod.id == id) {
        return {
          ...prod,
          computedQuantity: event.target.value,
        };
      } else {
        return prod;
      }
    });

    setAllProducts(mappedProds);
    console.log(event.target.value + " @handling id: " + id);
  }
  return (
    <>
      <ul>
        {allProducts.map((prod) => (
          <div key={prod.id}>
            <p>
            {prod.id}  {prod.name} ${prod.price}
            </p>
            <input
              type="number"
              value={prod.quantity}
              placeholder="Enter quantity"
              onChange={(e) => handleInputChange(e, prod.id)}
            ></input>
            <button onClick={() => placeOrder(prod)}>Place order</button>
          </div>
        ))}
      </ul>
    </>
  );
}
