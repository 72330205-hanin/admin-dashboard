import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";

import StatsCard from "../components/StatsCard";
import "../styles/Dashboard.css";
import "../styles/Table.css";

function Analytics() {
  const performanceData = [
    { week: "Week 1", visitors: 1200, sales: 420 },
    { week: "Week 2", visitors: 1800, sales: 690 },
    { week: "Week 3", visitors: 1500, sales: 520 },
    { week: "Week 4", visitors: 2300, sales: 880 },
  ];

  const categoryData = [
    { category: "Electronics", sales: 320 },
    { category: "Clothing", sales: 210 },
    { category: "Food", sales: 160 },
    { category: "Accessories", sales: 120 },
  ];

  const orderStatusData = [
    { name: "Delivered", value: 55, color: "#16a34a" },
    { name: "Pending", value: 20, color: "#f59e0b" },
    { name: "Shipped", value: 18, color: "#2563eb" },
    { name: "Cancelled", value: 7, color: "#dc2626" },
  ];

  return (
    <div className="dashboard-page">
      <div className="mb-4">
        <h2 className="page-heading">Analytics</h2>
        <p className="page-subtitle">
          Monitor performance, conversion, and business growth
        </p>
      </div>

      <div className="row g-4">
        <StatsCard
          title="Conversion Rate"
          value="12.8%"
          change="+2.4% improvement"
          color="#4f75a8"
          icon={<PercentOutlinedIcon />}
        />

        <StatsCard
          title="Average Order Value"
          value="$86.40"
          change="+9% this month"
          color="#16a34a"
          icon={<ShoppingCartCheckoutOutlinedIcon />}
        />

        <StatsCard
          title="Customer Retention"
          value="74%"
          change="+5% returning users"
          color="#f59e0b"
          icon={<TrendingUpIcon />}
        />
      </div>

      <div className="row g-4 mt-1">
        <div className="col-12 col-xl-8">
          <div className="card dashboard-section-card">
            <div className="card-body">
              <h5 className="section-title">Visitors vs Sales Performance</h5>

              <ResponsiveContainer width="100%" height={330}>
                <AreaChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="visitors"
                    stroke="#4f75a8"
                    fill="#dbeafe"
                    strokeWidth={3}
                  />

                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#16a34a"
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-4">
          <div className="card dashboard-section-card">
            <div className="card-body">
              <h5 className="section-title">Orders Status</h5>

              <ResponsiveContainer width="100%" height={330}>
                <PieChart>
                  <Pie
                    data={orderStatusData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={105}
                    label
                  >
                    {orderStatusData.map((item, index) => (
                      <Cell key={index} fill={item.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4 mt-1">
        <div className="col-12 col-xl-7">
          <div className="card dashboard-section-card">
            <div className="card-body">
              <h5 className="section-title">Sales by Category</h5>

              <ResponsiveContainer width="100%" height={300}>
  <BarChart data={categoryData} margin={{ bottom: 30 }}>
    <CartesianGrid strokeDasharray="3 3" />

    <XAxis
      dataKey="category"
      interval={0}
      angle={-25}
      textAnchor="end"
      height={70}
    />

    <YAxis />
    <Tooltip />

    <Bar
      dataKey="sales"
      fill="#4f75a8"
      radius={[8, 8, 0, 0]}
    />
  </BarChart>
</ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-5">
          <div className="card dashboard-section-card">
            <div className="card-body">
              <h5 className="section-title">Sales Target</h5>

              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <strong>Monthly Target</strong>
                  <strong>78%</strong>
                </div>
                <div className="progress" style={{ height: "14px" }}>
                  <div className="progress-bar" style={{ width: "78%" }}></div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <strong>Customer Growth</strong>
                  <strong>64%</strong>
                </div>
                <div className="progress" style={{ height: "14px" }}>
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "64%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="d-flex justify-content-between mb-2">
                  <strong>Order Completion</strong>
                  <strong>86%</strong>
                </div>
                <div className="progress" style={{ height: "14px" }}>
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "86%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;