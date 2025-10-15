import React, { useState } from "react";
import terms from "./data/terms.json";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [selectedTerm, setSelectedTerm] = useState(null);

  const filteredTerms = terms.filter((item) =>
    item.term.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (term) => {
    setSelectedTerm(term);
    setSearch(term.term);
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        background: "#f9fafb",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        🔍 Tra cứu thuật ngữ Địa lí
      </h1>

      <div style={{ position: "relative", width: "300px" }}>
        <input
          type="text"
          placeholder="Nhập thuật ngữ cần tìm (ví dụ: khí hậu)"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSelectedTerm(null);
          }}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        {search && filteredTerms.length > 0 && !selectedTerm && (
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              background: "white",
              border: "1px solid #ddd",
              borderRadius: "5px",
              position: "absolute",
              width: "100%",
              top: "40px",
              zIndex: 10,
              maxHeight: "200px",
              overflowY: "auto",
            }}
          >
            {filteredTerms.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSelect(item)}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  borderBottom: "1px solid #f0f0f0",
                  textAlign: "left",
                }}
              >
                {item.term}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div
        style={{
          marginTop: "30px",
          width: "80%",
          maxWidth: "700px",
          background: "white",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        {selectedTerm ? (
          <>
            <h2 style={{ color: "#0070f3" }}>{selectedTerm.term}</h2>
            <p style={{ lineHeight: "1.6", whiteSpace: "pre-line" }}>
              {selectedTerm.definition}
            </p>
            {selectedTerm.image && (
              <img
                src={selectedTerm.image}
                alt={selectedTerm.term}
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  marginTop: "20px",
                  borderRadius: "10px",
                }}
              />
            )}
          </>
        ) : (
          <p style={{ color: "#666" }}>
            Nhập một thuật ngữ vào ô tìm kiếm để tra cứu định nghĩa và hình ảnh.
          </p>
        )}
      </div>
    </div>
  );
