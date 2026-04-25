import { useState } from "react";
import productsData from "../data/productsData";

import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";

import "../styles/Table.css";

function Products() {
  const [products, setProducts] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory = category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="table-page">
      <div className="mb-4">
        <h2 className="page-heading">Products</h2>
        <p className="page-subtitle">{products.length} total products</p>
      </div>

      <div className="row g-3 mb-4 align-items-center">
        <div className="col-lg-6">
          <div className="search-box">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="col-lg-3">
          <select
            className="form-select category-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Food">Food</option>
          </select>
        </div>

        <div className="col-lg-3">
          <button className="btn btn-primary add-btn w-100">
            <AddIcon /> Add Product
          </button>
        </div>
      </div>

      <div className="card data-card border-0">
        <div className="table-responsive">
          <table className="table users-table align-middle mb-0">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="user-circle"
                        style={{ backgroundColor: product.color }}
                      >
                        {product.initials}
                      </div>

                      <strong>{product.name}</strong>
                    </div>
                  </td>

                  <td>
                    <span className="role-badge role-viewer">
                      {product.category}
                    </span>
                  </td>

                  <td>
                    <strong>{product.price}</strong>
                  </td>

                  <td>
                    {product.stock <= 7 ? (
                      <span className="low-stock">
                        <WarningAmberOutlinedIcon />
                        {product.stock}
                      </span>
                    ) : (
                      product.stock
                    )}
                  </td>

                  <td>
                    <span
                      className={`status-badge ${
                        product.status === "Active"
                          ? "status-active"
                          : "status-low"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>

                  <td>
                    <div className="d-flex gap-2">
                      <button className="action-btn edit-btn">
                        <EditOutlinedIcon />
                      </button>

                      <button
                        className="action-btn delete-btn"
                        onClick={() => deleteProduct(product.id)}
                      >
                        <DeleteOutlineOutlinedIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredProducts.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-5">
                    No products found.
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

export default Products;