import {
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
ResponsiveContainer,
BarChart,
Bar
} from "recharts";

import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import StatsCard from "../components/StatsCard";
import "../styles/Dashboard.css";
import "../styles/Table.css";

function Dashboard() {

const revenueData = [
{month:"Jan", revenue:1200},
{month:"Feb", revenue:1900},
{month:"Mar", revenue:1500},
{month:"Apr", revenue:2600},
{month:"May", revenue:2100},
{month:"Jun", revenue:3200},
];

const topProducts = [
{name:"Wireless Headphones", sales:120},
{name:"Smart Watch", sales:95},
{name:"Laptop Stand", sales:78},
{name:"USB-C Hub", sales:64},
];

const recentOrders = [
{
id:"#1001",
customer:"Sara Ali",
product:"Smart Watch",
status:"Completed",
total:"$120"
},
{
id:"#1002",
customer:"Maya Hassan",
product:"USB-C Hub",
status:"Pending",
total:"$45"
},
{
id:"#1003",
customer:"Lina Ahmad",
product:"Headphones",
status:"Completed",
total:"$80"
},
{
id:"#1004",
customer:"Rami Khaled",
product:"Laptop Stand",
status:"Cancelled",
total:"$35"
},
];

return (
<div className="dashboard-page">

<div className="row g-4">

<StatsCard
title="Total Users"
value="1,240"
change="+12% from last month"
color="#4f75a8"
icon={<PeopleAltOutlinedIcon/>}
/>

<StatsCard
title="Total Products"
value="320"
change="+8% from last month"
color="#16a34a"
icon={<Inventory2OutlinedIcon/>}
/>

<StatsCard
title="Total Orders"
value="890"
change="+18% from last month"
color="#f59e0b"
icon={<ShoppingCartOutlinedIcon/>}
/>

</div>


<div className="row g-4 mt-1">

<div className="col-12 col-xl-8">
<div className="card dashboard-section-card">
<div className="card-body">

<h5 className="section-title">
Revenue Overview
</h5>

<div className="chart-box">
<ResponsiveContainer width="100%" height={300}>
<LineChart data={revenueData}>
<CartesianGrid strokeDasharray="3 3"/>
<XAxis dataKey="month"/>
<YAxis/>
<Tooltip/>

<Line
type="monotone"
dataKey="revenue"
stroke="#4f75a8"
strokeWidth={3}
/>

</LineChart>
</ResponsiveContainer>
</div>

</div>
</div>
</div>


<div className="col-12 col-xl-4">
<div className="card dashboard-section-card">
<div className="card-body">

<h5 className="section-title">
Top Products
</h5>

<ResponsiveContainer width="100%" height={300}>
<BarChart data={topProducts}>
<XAxis dataKey="name" hide/>
<YAxis/>
<Tooltip/>

<Bar
dataKey="sales"
fill="#4f75a8"
radius={[8,8,0,0]}
/>

</BarChart>
</ResponsiveContainer>

</div>
</div>
</div>

</div>


<div className="card data-card border-0 mt-4">
<div className="card-body">

<h5 className="section-title">
Recent Orders
</h5>

<div className="table-responsive">

<table className="table users-table align-middle mb-0">

<thead>
<tr>
<th>Order ID</th>
<th>Customer</th>
<th>Product</th>
<th>Status</th>
<th>Total</th>
</tr>
</thead>

<tbody>

{recentOrders.map(order=>(
<tr key={order.id}>

<td>
<strong className="order-id">
{order.id}
</strong>
</td>

<td>{order.customer}</td>

<td>{order.product}</td>

<td>
<span
className={`status-badge ${
order.status==="Completed"
? "status-delivered"
: order.status==="Pending"
? "status-pending"
: order.status==="Shipped"
? "status-shipped"
: "status-cancelled"
}`}
>
{order.status}
</span>
</td>

<td>
<strong>{order.total}</strong>
</td>

</tr>
))}

</tbody>

</table>

</div>

</div>
</div>


</div>
);
}

export default Dashboard;