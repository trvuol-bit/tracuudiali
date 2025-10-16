import React, { useState } from "react";
import { Search } from "lucide-react";

const termsData = [
  {
    term: "GDP",
    definition: "Tổng sản phẩm quốc nội, phản ánh giá trị của tất cả hàng hóa và dịch vụ cuối cùng được sản xuất trong một quốc gia trong một khoảng thời gian nhất định.",
    info: "Đơn vị: USD. GDP toàn cầu năm 2024 đạt hơn 105 nghìn tỷ USD.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/GDP_world_map.svg",
    category: "Kinh tế",
  },
  {
    term: "Dân số",
    definition: "Tổng số người sinh sống trong một khu vực nhất định tại một thời điểm cụ thể.",
    info: "Dân số thế giới năm 2024 khoảng 8,1 tỷ người, với châu Á chiếm hơn 60%.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/World_population_density_map.png",
    category: "Dân cư",
  },
  {
    term: "Amazon",
    definition: "Rừng mưa nhiệt đới lớn nhất thế giới, nằm chủ yếu ở Brazil và trải rộng trên 9 quốc gia Nam Mỹ.",
    info: "Chiếm khoảng 20% lượng oxy toàn cầu, diện tích hơn 5,5 triệu km².",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Amazon_rainforest.jpg",
    category: "Tự nhiên",
  },
  {
    term: "AI",
    definition: "Trí tuệ nhân tạo, là khả năng của máy tính hoặc hệ thống thực hiện các nhiệm vụ yêu cầu trí thông minh của con người.",
    info: "Ứng dụng trong nhận diện giọng nói, xe tự lái, phân tích dữ liệu và nhiều lĩnh vực khác.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Artificial_Intelligence_%26_Machine_Learning.png",
    category: "Công nghệ",
  },
  {
    term: "Nhiệt độ trung bình toàn cầu",
    definition: "Là giá trị trung bình của nhiệt độ trên toàn bề mặt Trái Đất trong một năm.",
    info: "Tăng khoảng 1,2°C kể từ thời kỳ tiền công nghiệp. Năm 2023 là năm nóng nhất từng được ghi nhận.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Global_Temperature_Anomaly_1880-2023.png",
    category: "Khí hậu",
  },
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    const matches = termsData.filter((t) =>
      t.term.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(matches);
  };

  const handleSelectTerm = (term) => {
    setSelectedTerm(term);
    setSearchTerm(term.term);
    setSuggestions([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">
          🔍 Từ điển các thuật ngữ ấn tượng
        </h1>

        {/* Ô tìm kiếm */}
        <div className="relative">
          <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2">
            <Search className="text-gray-500 mr-2" />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Nhập từ khóa (VD: GDP, Amazon, AI...)"
              className="w-full bg-transparent outline-none"
            />
          </div>

          {/* Gợi ý từ khóa */}
          {suggestions.length > 0 && (
            <ul className="absolute z-10 bg-white shadow-lg w-full mt-2 rounded-lg overflow-hidden border border-gray-200">
              {suggestions.map((item) => (
                <li
                  key={item.term}
                  onClick={() => handleSelectTerm(item)}
                  className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
                >
                  <span className="font-semibold text-indigo-600">
                    {item.term}
                  </span>{" "}
                  <span className="text-gray-500 text-sm">({item.category})</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Kết quả hiển thị */}
        {selectedTerm && (
          <div className="bg-white mt-6 rounded-2xl shadow-lg p-6 border-l-4 border-indigo-500">
            <div className="flex flex-col items-center">
              <img
                src={selectedTerm.image}
                alt={selectedTerm.term}
                className="rounded-xl w-full max-h-64 object-cover mb-4 shadow-sm"
              />
              <h2 className="text-2xl font-bold text-indigo-700 mb-2">
                {selectedTerm.term}
              </h2>
              <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm mb-3">
                {selectedTerm.category}
              </span>
            </div>

            <p className="text-gray-700 mb-2">
              <strong>Khái niệm:</strong> {selectedTerm.definition}
            </p>
            <p className="text-gray-700">
              <strong>Thông tin thêm:</strong> {selectedTerm.info}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
