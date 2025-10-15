import React, { useState } from "react";

// Dữ liệu mẫu để thử
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
      "Là hai đường vĩ tuyến giới hạn khu vực có hiện tượng Mặt Trời lên thiên đỉnh một lần trong năm.",
    info: `Đường chí tuyến Bắc nằm ở 23°27'B (chí tuyến Bắc) và đường chí tuyến Nam ở 23°27'N (chí tuyến Nam). 
Khu vực giữa hai đường chí tuyến là vùng nội chí tuyến – nơi có nhiệt độ cao quanh năm và có thể có hai lần Mặt Trời lên thiên đỉnh.`,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Tropic_of_Cancer_Tropic_of_Capricorn.png",
  },
];

function App() {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const found = data.find((item) =>
      item.term.toLowerCase().includes(term.toLowerCase())
    );
    setResult(found || null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">
          🔍 Tra cứu thuật ngữ Địa lí
        </h1>

        {/* Ô tìm kiếm */}
        <div className="flex gap-2 mb-4">
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Nhập thuật ngữ cần tìm (ví dụ: ngày địa cực)..."
            className="flex-1 border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Tìm
          </button>
        </div>

        {/* Hiển thị kết quả */}
        {result ? (
          <div className="mt-6 space-y-4 animate-fadeIn">
            <div className="border-b pb-2">
              <h2 className="text-xl font-semibold text-gray-800">
                {result.term}
              </h2>
              <p className="text-gray-700 whitespace-pre-line mt-1">
                {result.definition}
              </p>
            </div>

            {result.info && (
              <div>
                <h3 className="font-medium text-gray-800 mb-2">
                  Thông tin chi tiết:
                </h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {result.info}
                </p>
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
        ) : term ? (
          <p className="text-center text-gray-500 mt-6">
            ❌ Không tìm thấy thuật ngữ phù hợp.
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default App;
