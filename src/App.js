import React, { useState } from "react";

// ==== DỮ LIỆU MẪU CHO 4 CHỦ ĐỀ ====
const data = {
  "Tự nhiên": [
    {
      term: "Ngày địa cực và đêm địa cực",
      definition:
        "Hiện tượng xảy ra ở các vùng vĩ độ cao, khi Mặt Trời không lặn (ngày địa cực) hoặc không mọc (đêm địa cực) trong 24 giờ.",
      info: `Số ngày toàn ngày chỉ xảy ra trong mùa nóng ở mỗi bán cầu. 
Bán cầu Bắc có số ngày toàn ngày nhiều hơn bán cầu Nam vì thời gian từ 21/3–23/9 dài hơn (186 ngày) do Trái Đất di chuyển chậm hơn ở điểm viễn nhật. 
Ngược lại, ở bán cầu Nam thời kì nóng chỉ 179 ngày nên số ngày toàn ngày ít hơn và số ngày toàn đêm nhiều hơn (186 ngày).`,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Polar_day_and_night.svg/800px-Polar_day_and_night.svg.png",
    },
    {
      term: "Đường xích đạo",
      definition:
        "Đường vĩ tuyến lớn nhất trên Trái Đất, chia địa cầu thành hai bán cầu Bắc và Nam.",
      info: `Đường xích đạo có vĩ độ 0°, chiều dài khoảng 40.075 km. 
Nơi đây có nhiệt độ cao quanh năm, độ dài ngày và đêm gần như bằng nhau.`,
      image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Equator_map.png",
    },
    {
      term: "Đường chí tuyến",
      definition:
        "Hai đường vĩ tuyến giới hạn khu vực có hiện tượng Mặt Trời lên thiên đỉnh một lần trong năm.",
      info: `Chí tuyến Bắc nằm ở 23°27'B và chí tuyến Nam ở 23°27'N. 
Khu vực giữa hai chí tuyến là vùng nội chí tuyến – nơi có thể có hai lần Mặt Trời lên thiên đỉnh.`,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/4d/Tropic_of_Cancer_Tropic_of_Capricorn.png",
    },
  ],

  "Dân cư": [
    {
      term: "Mật độ dân số",
      definition: "Số dân trung bình sinh sống trên một đơn vị diện tích (người/km²).",
      info: `Mật độ dân số phản ánh mức độ tập trung dân cư, là chỉ tiêu quan trọng trong quy hoạch phát triển kinh tế – xã hội.`,
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/World_population_density_map.PNG",
    },
    {
      term: "Gia tăng dân số tự nhiên",
      definition: "Sự chênh lệch giữa tỉ suất sinh và tỉ suất tử trong một giai đoạn.",
      info: `Gia tăng dân số tự nhiên = Tỉ suất sinh - Tỉ suất tử. 
Chỉ số này dương → dân số tăng; âm → dân số giảm.`,
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Birth_rate_world_map.PNG",
    },
  ],

  "Kinh tế": [
    {
      term: "Công nghiệp hóa",
      definition:
        "Quá trình chuyển đổi nền kinh tế từ dựa chủ yếu vào nông nghiệp sang công nghiệp và dịch vụ.",
      info: `Công nghiệp hóa gắn liền với hiện đại hóa, đòi hỏi đầu tư lớn về cơ sở hạ tầng, khoa học – công nghệ.`,
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Industrial_Revolution.jpg",
    },
    {
      term: "Kinh tế tri thức",
      definition:
        "Nền kinh tế dựa chủ yếu vào tri thức, khoa học – công nghệ và sáng tạo.",
      info: `Ví dụ: Nhật Bản, Hoa Kỳ, Hàn Quốc là các nước điển hình của kinh tế tri thức, trong đó tỉ trọng ngành dịch vụ và công nghệ cao chiếm trên 70% GDP.`,
      image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Innovation_economy.jpg",
    },
  ],

  "Môi trường": [
    {
      term: "Ô nhiễm môi trường",
      definition:
        "Sự thay đổi các yếu tố tự nhiên khiến môi trường trở nên độc hại đối với con người và sinh vật.",
      info: `Các dạng ô nhiễm phổ biến: không khí, nước, đất, tiếng ồn, ánh sáng. 
Nguyên nhân chủ yếu là do hoạt động công nghiệp, giao thông và đô thị hóa.`,
      image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Air_pollution.jpg",
    },
    {
      term: "Biến đổi khí hậu",
      definition:
        "Sự thay đổi dài hạn về nhiệt độ, lượng mưa và các yếu tố khí hậu khác của Trái Đất.",
      info: `Nguyên nhân chính là do hiệu ứng nhà kính gia tăng. 
Hậu quả: băng tan, mực nước biển dâng, thời tiết cực đoan.`,
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Climate_change.jpg",
    },
  ],
};

function App() {
  const [topic, setTopic] = useState("Tự nhiên");
  const [search, setSearch] = useState("");
  const [selectedTerm, setSelectedTerm] = useState(null);

  const terms = data[topic];
  const filtered = terms.filter((item) =>
    item.term.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (term) => {
    setSelectedTerm(term);
    setSearch(term.term);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#eef3f8",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          width: "90%",
          maxWidth: "700px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#1a56db", marginBottom: "20px" }}>
          🔍 Tra cứu thuật ngữ Địa lí
        </h1>

        {/* Chọn chủ đề */}
        <select
          value={topic}
          onChange={(e) => {
            setTopic(e.target.value);
            setSelectedTerm(null);
            setSearch("");
          }}
          style={{
            padding: "10px",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginBottom: "15px",
            fontSize: "15px",
          }}
        >
          {Object.keys(data).map((key) => (
            <option key={key}>{key}</option>
          ))}
        </select>

        {/* Ô tìm kiếm */}
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder={`Tìm thuật ngữ trong chủ đề ${topic.toLowerCase()}...`}
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

        {/* Kết quả hiển thị */}
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
