import React, { useState } from "react";
import "./App.css";

const Dashboard = () => {
  const [tab, setTab] = useState(0);
  const handleChange = (index) => setTab(index);

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">🚀 RocketMQ Dashboard</h1>
        <nav className="nav">
          {[
            "OPS",
            "Dashboard",
            "Cluster",
            "Topic",
            "Consumer",
            "Producer",
            "Message",
            "DLT",
            "MessageTrace",
          ].map((label, index) => (
            <span key={index} className="nav-item">{label}</span>
          ))}
        </nav>
      </header>

      <div className="tabs">
        {["Dashboard", "Topic", "Consumer"].map((label, index) => (
          <button
            key={index}
            className={`tab ${tab === index ? "active" : ""}`}
            onClick={() => handleChange(index)}
          >
            {label}
          </button>
        ))}
      </div>

      <main className="main">
        {tab === 0 && (
          <div className="grid">
            {["Broker TOP 10", "Broker 5min trend", "Topic TOP 10", "Topic 5min trend"].map((title, idx) => (
              <div key={idx} className="card">
                <h2 className="card-title">{title}</h2>
                <div className="chart-placeholder">[Chart Placeholder]</div>
              </div>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div className="card">
            <h2 className="card-title">Topic Change</h2>
            <form className="form">
              {[
                { placeholder: "Cluster Name", value: "DefaultCluster" },
                { placeholder: "Broker Name", value: "broker-a" },
                { placeholder: "Topic Name", value: "topic_001" },
                { placeholder: "Write Queue", value: "2" },
                { placeholder: "Read Queue", value: "2" },
                { placeholder: "Perm (6)", value: "6" },
              ].map((field, idx) => (
                <input
                  key={idx}
                  className="input"
                  placeholder={field.placeholder}
                  defaultValue={field.value}
                />
              ))}
              <p className="note">read-write access permission: 2 write, 4 read, 6 read-write</p>
              <button type="submit" className="button">COMMIT</button>
            </form>
          </div>
        )}

        {tab === 2 && (
          <div className="card">
            <h2 className="card-title">Subscription Change</h2>
            <form className="form">
              {[
                { placeholder: "Cluster Name", value: "DefaultCluster" },
                { placeholder: "Broker Name", value: "broker-a" },
                { placeholder: "Group Name", value: "consumer_002" },
              ].map((field, idx) => (
                <input
                  key={idx}
                  className="input"
                  placeholder={field.placeholder}
                  defaultValue={field.value}
                />
              ))}
              <label className="checkbox">
                <input type="checkbox" defaultChecked /> Enable Consume
              </label>
              <label className="checkbox">
                <input type="checkbox" defaultChecked /> Enable Broadcast
              </label>
              {[
                { placeholder: "Retry Queue", value: "1" },
                { placeholder: "Retry Limit", value: "0" },
                { placeholder: "When Disable", value: "1" },
              ].map((field, idx) => (
                <input
                  key={idx}
                  className="input"
                  placeholder={field.placeholder}
                  defaultValue={field.value}
                />
              ))}
              <button type="submit" className="button">COMMIT</button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
