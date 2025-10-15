import React, { useState } from "react";
import terms from "./data/terms.json";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const filteredTerms = terms.filter((item) =>
    item.term.toLowerCase().includes(search.toLowerCase())
  );

  return (
  <div className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">
        Tra cứu thuật ngữ Địa lí
      </h1>

      <div className="flex gap-2 mb-4">
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Nhập thuật ngữ cần tìm..."
          className="flex-1 border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Tìm
        </button>
      </div>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="border-b pb-2">
            <h2 className="text-xl font-semibold text-gray-800">{result.term}</h2>
            <p className="text-gray-700 whitespace-pre-line">{result.definition}</p>
          </div>

          {result.info && (
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Thông tin thêm:</h3>
              <p className="text-gray-600 whitespace-pre-line">{result.info}</p>
            </div>
          )}

          {result.image && (
            <div className="flex justify-center mt-4">
              <img
                src={result.image}
                alt={result.term}
                className="max-h-64 rounded-xl shadow-lg"
              />
            </div>
          )}
        </div>
      )}
    </div>
  </div>
);


export default App;
