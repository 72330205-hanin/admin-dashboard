import { useState } from "react";
import ordersData from "../data/ordersData";

import SearchIcon from "@mui/icons-material/Search";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import "../styles/Table.css";

function Orders() {
  const [orders, setOrders] = useState(ordersData);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const getCount = (status) => {
    if (status === "All") return orders.length;
    return orders.filter((order) => order.status === status).length;
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div className="table-page">
      <div className="mb-4">
        <h2 className="page-heading">Orders</h2>
        <p className="page-subtitle">{orders.length} total orders</p>
      </div>

      <div className="order-tabs mb-4">
        {["All", "Pending", "Shipped", "Delivered", "Cancelled"].map(
          (status) => (
            <button
              key={status}
              className={statusFilter === status ? "active" : ""}
              onClick={() => setStatusFilter(status)}
            >
              {status}
              <span>{getCount(status)}</span>
            </button>
          )
        )}
      </div>

      <div className="row g-3 mb-4 align-items-center">
        <div className="col-lg-7">
          <div className="search-box">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search by order ID or customer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="card data-card border-0">
        <div className="table-responsive">
          <table className="table users-table align-middle mb-0">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td>
                    <strong className="order-id">{order.orderId}</strong>
                  </td>

                  <td>{order.customer}</td>
                  <td>{order.items}</td>

                  <td>
                    <strong>{order.total}</strong>
                  </td>

                  <td>
                    <span
                      className={`status-badge status-${order.status.toLowerCase()}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td>{order.date}</td>

                  <td>
                    <div className="d-flex gap-2">
                     

                      <button className="action-btn edit-btn">
                        <EditOutlinedIcon />
                      </button>

                      <button
                        className="action-btn delete-btn"
                        onClick={() => deleteOrder(order.id)}
                      >
                        <DeleteOutlineOutlinedIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredOrders.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center py-5">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;