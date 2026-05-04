"use client";


const Dashboard = () => {
  const stats = [
    { label: "Total Pages", value: "24", icon: "📄" },
    { label: "Media Files", value: "128", icon: "🖼" },
    { label: "Active Users", value: "53", icon: "👥" },
    { label: "Updates", value: "8", icon: "⚙" },
  ];


  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Overview</h1>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-xl font-bold">{stat.value}</div>
            <div className="text-gray-500 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
     
    </div>
  );
};


export default Dashboard;
