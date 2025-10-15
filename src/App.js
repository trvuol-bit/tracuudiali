import React, { useState } from "react";

// Dữ liệu mẫu
const data = [
  {
    term: "Ngày địa cực và đêm địa cực",
    definition:
      "Hiện tượng xảy ra ở các vùng vĩ độ cao, khi Mặt Trời không lặn (ngày địa cực) hoặc không mọc (đêm địa cực) trong 24 giờ.",
    info: `Số ngày toàn ngày chỉ xảy ra trong mùa nóng ở mỗi bán cầu. 
Bán cầu Bắc có số ngày có 24 giờ toàn ngày (ngày địa cực) nhiều hơn ở bán cầu Nam, 
vì thời gian từ 21/3 đến 23/9 dài hơn (186 ngày) do Trái Đất di chuyển chậm hơn khi ở điểm viễn nhật. 
Ngược lại, ở bán cầu Nam, thời kì nóng chỉ dài 179 ngày, nên số ngày toàn ngày ít hơn và số ngày toàn đêm nhiều hơn (186 ngày).`,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Polar_day_and_night.svg/800px-Polar_day_and_night.svg.png",
  },
  {
    term: "Đường chí tuyến",
    definition:
      "Hai đường vĩ tuyến giới hạn khu vực có hiện tượng Mặt Trời lên thiên đỉnh một lần trong năm.",
    info: `Đường chí tuyến Bắc nằm ở 23°27'B (chí tuyến Bắc) và chí tuyến Nam ở 23°27'N (chí tuyến Nam). 
Khu vực giữa hai đường chí tuyến là vùng nội chí tuyến – nơi có nhiệt độ cao quanh năm và có thể có hai lần Mặt Trời lên thiên đỉnh.`,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Tropic_of_Cancer_Tropic_of_Capricorn.png",
  },
  {
    term: "Đường xích đạo",
    definition:
      "Đường vĩ tuyến lớn nhất trên Trái Đất, chia địa cầu thành hai bán cầu Bắc và Nam.",
    info: `Đường xích đạo có vĩ độ 0°, chiều dài khoảng 40.075 km. 
Nơi đây có nhiệt độ cao quanh năm, độ dài ngày và đêm gần như bằng nhau.`,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Equator_map.png",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [selectedTerm, setSelectedTerm] = useState(null);

  const filtered = data.filter((item) =>
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
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f6f8",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          width: "90%",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#1a56db", marginBottom: "20px" }}>
          🔍 Tra cứu thuật ngữ Địa lí
        </h1>

        {/* Ô tìm kiếm */}
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Nhập thuật ngữ cần tìm (ví dụ: chí tuyến, địa cực...)"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedTerm(null);
            }}
            style={{
              padding: "10px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
              marginBottom: "10px",
            }}
          />

          {/* Gợi ý */}
          {search && !selectedTerm && filtered.length > 0 && (
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: "5px",
                background: "white",
                border: "1px solid #ccc",
                borderRadius: "8px",
                position: "absolute",
                top: "42px",
                width: "100%",
                textAlign: "left",
                zIndex: 10,
                maxHeight: "200px",
                overflowY: "auto",
              }}
            >
              {filtered.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(item)}
                  style={{
                    padding: "8px",
                    cursor: "pointer",
                    borderBottom: "1px solid #eee",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.background = "#f0f4ff")
                  }
                  onMouseOut={(e) => (e.target.style.background = "white")}
                >
                  {item.term}
                </li>
              ))}
            </ul>
          )}

          {/* Không tìm thấy */}
          {search && filtered.length === 0 && !selectedTerm && (
            <div
              style={{
                background: "#fff",
                border: "1px solid #ccc",
                borderRadius: "8px",
                position: "absolute",
                top: "42px",
                width: "100%",
                padding: "10px",
                textAlign: "left",
                color: "#666",
              }}
            >
              ❌ Không tìm thấy thuật ngữ phù hợp.
            </div>
          )}
        </div>

        {/* Hiển thị kết quả */}
        {selectedTerm && (
          <div style={{ textAlign: "left", marginTop: "20px" }}>
            <h2 style={{ color: "#333" }}>{selectedTerm.term}</h2>
            <p style={{ whiteSpace: "pre-line" }}>{selectedTerm.definition}</p>
            <p style={{ whiteSpace: "pre-line", color: "#555" }}>
              {selectedTerm.info}
            </p>
            {selectedTerm.image && (
              <div style={{ textAlign: "center", marginTop: "15px" }}>
                <img
                  src={selectedTerm.image}
                  alt={selectedTerm.term}
                  style={{
                    maxWidth: "100%",
                    borderRadius: "10px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  }}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
