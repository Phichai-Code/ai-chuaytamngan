const services = [
  {
    id: 1,
    icon: "📖",
    type: "ฟรี ไม่มีค่าใช้จ่าย",
    typeColor: "bg-green-900 text-green-300",
    name: "คลังความรู้ & เกร็ดเทคนิค",
    desc: "บทความ Prompt ตัวอย่าง และวิดีโอสั้นที่ใช้ได้จริง อัปเดตทุกสัปดาห์",
    items: [
      "Prompt สำเร็จรูปสำหรับงานราชการ",
      "วิธีใช้ AI เขียนเอกสารต่างๆ",
      "เคล็ดลับประหยัดเวลาด้วย Claude",
      "กรณีศึกษาจากผู้ใช้จริง",
    ],
    price: "ฟรี 100%",
    priceColor: "text-green-400",
  },
  {
    id: 2,
    icon: "💬",
    type: "ให้คำปรึกษา",
    typeColor: "bg-blue-900 text-blue-300",
    name: "ปรึกษารายเคส",
    desc: "พูดคุยและให้แนวทางเฉพาะสำหรับงานของคุณ ทั้งแบบฟรีและมีค่าใช้จ่าย",
    items: [
      "ปรึกษาเขียนคู่มือปฏิบัติงาน",
      "แนะนำแนวทางทำวิจัย",
      "ตรวจและให้ Feedback งานวิชาการ",
      "ออกแบบ Prompt เฉพาะงาน",
    ],
    price: "ฟรี – 2,000 บาท",
    priceColor: "text-blue-400",
  },
  {
    id: 3,
    icon: "🛠",
    type: "รับทำงาน",
    typeColor: "bg-yellow-900 text-yellow-300",
    name: "รับจ้างทำครบวงจร",
    desc: "รับทำงานตามขอบเขตที่ตกลง พร้อมส่งผลงานคุณภาพสูงภายในกำหนดเวลา",
    items: [
      "รับทำคู่มือปฏิบัติงาน",
      "รับทำงานวิจัย ครบ 5 บท",
      "รับทำรายงานและการวิเคราะห์",
      "รับทำเอกสารขอตำแหน่ง",
    ],
    price: "3,000 – 15,000+ บาท",
    priceColor: "text-yellow-400",
  },
]

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-950 text-white pt-28 px-8 pb-16">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-black mb-2">บริการของเรา</h1>
        <p className="text-gray-400 mb-12">
          เลือกรูปแบบที่เหมาะกับคุณ ตั้งแต่ฟรีจนถึงจ้างทำ
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(service => (
            <div
              key={service.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col hover:border-gray-600 transition-all"
            >
              <div className="text-4xl mb-4">{service.icon}</div>

              <span className={`text-xs px-3 py-1 rounded-full font-medium w-fit mb-4 ${service.typeColor}`}>
                {service.type}
              </span>

              <h2 className="text-xl font-bold mb-3">{service.name}</h2>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {service.desc}
              </p>

              <ul className="flex flex-col gap-2 mb-6 flex-1">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-blue-400 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="border-t border-gray-700 pt-4">
                <span className={`text-xl font-black ${service.priceColor}`}>
                  {service.price}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}