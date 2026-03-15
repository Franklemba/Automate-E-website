import { useState } from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, Wallet, Users, ShoppingCart, FolderKanban, Bell, Search, 
  ChevronDown, TrendingUp, TrendingDown, DollarSign, FileText, 
  Calendar, CheckCircle2, Clock, AlertCircle, ArrowLeft
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from "recharts";
import { Link } from "react-router-dom";

const barData = [
  { name: "Jan", revenue: 42000, expenses: 28000 },
  { name: "Feb", revenue: 48000, expenses: 31000 },
  { name: "Mar", revenue: 55000, expenses: 29000 },
  { name: "Apr", revenue: 51000, expenses: 33000 },
  { name: "May", revenue: 62000, expenses: 35000 },
  { name: "Jun", revenue: 58000, expenses: 30000 },
];

const pieData = [
  { name: "Finance", value: 35, color: "hsl(207, 90%, 50%)" },
  { name: "Procurement", value: 25, color: "hsl(45, 95%, 55%)" },
  { name: "HR", value: 20, color: "hsl(150, 60%, 45%)" },
  { name: "Projects", value: 20, color: "hsl(280, 60%, 55%)" },
];

const lineData = [
  { name: "Mon", tasks: 12, completed: 10 },
  { name: "Tue", tasks: 18, completed: 15 },
  { name: "Wed", tasks: 14, completed: 14 },
  { name: "Thu", tasks: 22, completed: 18 },
  { name: "Fri", tasks: 16, completed: 16 },
];

const recentActivity = [
  { icon: CheckCircle2, text: "Purchase Order #4521 approved", time: "2 min ago", color: "text-green-500" },
  { icon: FileText, text: "Invoice INV-2024-089 generated", time: "15 min ago", color: "text-primary" },
  { icon: Users, text: "3 new employee records added", time: "1 hour ago", color: "text-purple-500" },
  { icon: AlertCircle, text: "Budget threshold alert — IT Dept", time: "2 hours ago", color: "text-amber-500" },
  { icon: Clock, text: "Leave request pending approval", time: "3 hours ago", color: "text-muted-foreground" },
];

const sidebarItems = [
  { icon: BarChart3, label: "Dashboard", active: true },
  { icon: Wallet, label: "Finance" },
  { icon: ShoppingCart, label: "Procurement" },
  { icon: Users, label: "HR Management" },
  { icon: FolderKanban, label: "Projects" },
  { icon: FileText, label: "Reports" },
  { icon: Calendar, label: "Calendar" },
];

const Demo = () => {
  const [activeModule, setActiveModule] = useState("Dashboard");

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -260 }}
        animate={{ x: 0 }}
        className="hidden lg:flex w-64 bg-card border-r border-border flex-col"
      >
        <div className="p-5 border-b border-border">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-4">
            <ArrowLeft size={16} /> Back to Website
          </Link>
          <h2 className="text-xl font-bold text-foreground">Automate E</h2>
          <p className="text-xs text-muted-foreground font-body">Enterprise ERP Demo</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveModule(item.label)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeModule === item.label
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
              AD
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Admin Demo</p>
              <p className="text-xs text-muted-foreground">admin@demo.com</p>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-card border-b border-border px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="lg:hidden">
              <Link to="/" className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-sm">
                <ArrowLeft size={16} /> Back
              </Link>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                placeholder="Search modules, reports..."
                className="pl-9 pr-4 py-2 bg-muted rounded-lg text-sm w-64 outline-none focus:ring-2 focus:ring-ring text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
              <Bell size={18} className="text-muted-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
            </button>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <span className="font-medium hidden sm:inline">Admin Demo</span>
              <ChevronDown size={14} />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-foreground">{activeModule}</h1>
                <p className="text-sm text-muted-foreground font-body">Welcome back! Here's your organization overview.</p>
              </div>
              <span className="px-3 py-1 bg-secondary/20 text-secondary-foreground text-xs font-bold rounded-full border border-secondary/30">
                DEMO MODE
              </span>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { label: "Total Revenue", value: "K 316,000", change: "+12.5%", up: true, icon: DollarSign },
                { label: "Active POs", value: "47", change: "+8", up: true, icon: ShoppingCart },
                { label: "Employees", value: "234", change: "+3", up: true, icon: Users },
                { label: "Active Projects", value: "12", change: "-1", up: false, icon: FolderKanban },
              ].map((kpi) => (
                <motion.div
                  key={kpi.label}
                  className="bg-card rounded-xl p-5 shadow-card"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                      <kpi.icon className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <span className={`text-xs font-semibold flex items-center gap-1 ${kpi.up ? "text-green-600" : "text-destructive"}`}>
                      {kpi.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                      {kpi.change}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
                  <p className="text-xs text-muted-foreground font-body mt-1">{kpi.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid lg:grid-cols-3 gap-6 mb-6">
              {/* Revenue Chart */}
              <div className="lg:col-span-2 bg-card rounded-xl p-5 shadow-card">
                <h3 className="text-sm font-bold text-foreground mb-4">Revenue vs Expenses (K)</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 20%, 90%)" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="hsl(207, 90%, 50%)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="expenses" fill="hsl(45, 95%, 55%)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Module Distribution */}
              <div className="bg-card rounded-xl p-5 shadow-card">
                <h3 className="text-sm font-bold text-foreground mb-4">Module Usage</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={3}>
                      {pieData.map((entry, i) => (
                        <Cell key={i} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex flex-wrap gap-2 mt-2">
                  {pieData.map((d) => (
                    <span key={d.name} className="flex items-center gap-1 text-xs text-muted-foreground">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
                      {d.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Task Completion */}
              <div className="bg-card rounded-xl p-5 shadow-card">
                <h3 className="text-sm font-bold text-foreground mb-4">Weekly Task Completion</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 20%, 90%)" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Area type="monotone" dataKey="tasks" stroke="hsl(207, 90%, 50%)" fill="hsl(207, 90%, 50%)" fillOpacity={0.1} />
                    <Area type="monotone" dataKey="completed" stroke="hsl(150, 60%, 45%)" fill="hsl(150, 60%, 45%)" fillOpacity={0.1} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Recent Activity */}
              <div className="bg-card rounded-xl p-5 shadow-card">
                <h3 className="text-sm font-bold text-foreground mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {recentActivity.map((a, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <a.icon size={16} className={`mt-0.5 shrink-0 ${a.color}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground">{a.text}</p>
                        <p className="text-xs text-muted-foreground">{a.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Demo;
