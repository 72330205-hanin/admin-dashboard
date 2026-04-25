import { useState } from "react";
import usersData from "../data/usersData";

import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import "../styles/Table.css";

function Users() {
  const [users, setUsers] = useState(usersData);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="table-page">
      <div className="mb-4">
        <h2 className="page-heading">Users</h2>
        <p className="page-subtitle">{users.length} total users</p>
      </div>

      <div className="row g-3 mb-4 align-items-center">
        <div className="col-lg-9">
          <div className="search-box">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search users by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="col-lg-3">
          <button className="btn btn-primary add-btn w-100">
            <AddIcon />
            Add User
          </button>
        </div>
      </div>

      <div className="card data-card border-0">
        <div className="table-responsive">
          <table className="table users-table align-middle mb-0">
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Joined</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="user-circle"
                        style={{ backgroundColor: user.color }}
                      >
                        {user.initials}
                      </div>

                      <strong>{user.name}</strong>
                    </div>
                  </td>

                  <td>{user.email}</td>

                  <td>
                    <span
                      className={`role-badge role-${user.role.toLowerCase()}`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`status-badge ${
                        user.status === "Active"
                          ? "status-active"
                          : "status-inactive"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td>{user.joined}</td>

                  <td>
                    <div className="d-flex gap-2">
                      <button className="action-btn edit-btn">
                        <EditOutlinedIcon />
                      </button>

                      <button
                        className="action-btn delete-btn"
                        onClick={() => deleteUser(user.id)}
                      >
                        <DeleteOutlineOutlinedIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-5">
                    No users found.
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

export default Users;