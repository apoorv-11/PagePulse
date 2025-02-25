/* eslint-disable react/jsx-key */
import { useGetOrderByEmailQuery } from "../../redux/features/orders/OrderApi.js";
import { useAuth } from "../../Context/auth.context.jsx";

const Order = () => {
  const { currentUser } = useAuth();
  console.log(currentUser.email);
  const { data } = useGetOrderByEmailQuery(currentUser.email);
  const orders = data;
  return (
    <div>
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
        {orders.length === 0 ? (
          <div>No orders found!</div>
        ) : (
          <div>
            {orders.map((order, index) => (
              <div key={order._id} className="border-b mb-4 pb-4">
                <p className="p-1 bg-secondary text-white w-10 rounded mb-1">
                  # {index + 1}
                </p>
                <h2 className="font-bold">Order ID: {order._id}</h2>
                <p className="text-gray-600">Name: {order.name}</p>
                <p className="text-gray-600">Email: {order.email}</p>
                <p className="text-gray-600">Phone: {order.phone}</p>
                <p className="text-gray-600">
                  Total Price: ${order.totalPrice}
                </p>
                <h3 className="font-semibold mt-2">Address:</h3>
                <p>
                  {" "}
                  {order.address.city}, {order.address.state},{" "}
                  {order.address.country}, {order.address.zipcode}
                </p>
                <h3 className="font-semibold mt-2">Products Id:</h3>
                {order.productsIds.map((productID, index) => (
                  <ul>
                    <li key={index}>{productID}</li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Order;
