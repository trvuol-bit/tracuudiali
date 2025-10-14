import React, { useState } from "react";
import terms from "./data/terms.json";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const filteredTerms = terms.filter((item) =>
    item.term.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App" style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h1>📘 TRA CỨU THUẬT NGỮ ĐỊA LÍ</h1>

      <input
        type="text"
        placeholder="Nhập thuật ngữ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "20px",
        }}
      />

      {filteredTerms.length > 0 ? (
        <ul>
          {filteredTerms.map((item, index) => (
            <li key={index} style={{ margin: "10px 0", textAlign: "left" }}>
              <strong>{item.term}</strong>: {item.definition}
            </li>
          ))}
        </ul>
      ) : (
        <p>Không tìm thấy thuật ngữ nào phù hợp.</p>
      )}
    </div>
  );
}

export default App;
