const articles = [
  {
    id: 1,
    category: "งานวิจัย",
    categoryColor: "bg-blue-900 text-blue-300",
    title: "Claude ช่วยร่างงานวิจัย 5 บทได้อย่างไร",
    desc: "คู่มือฉบับสมบูรณ์พร้อม Prompt สำหรับแต่ละขั้นตอน เหมาะสำหรับบุคลากรที่ขอตำแหน่งชำนาญการ",
    time: "8 นาที",
  },
  {
    id: 2,
    category: "คู่มือ",
    categoryColor: "bg-green-900 text-green-300",
    title: "วิธีใช้ AI เขียนคู่มือการปฏิบัติงานจากขั้นตอนที่มีอยู่แล้ว",
    desc: "ไม่ต้องเริ่มจากศูนย์ แค่บอก AI ว่าทำงานอะไร คู่มือมาตรฐานพร้อมในไม่กี่ชั่วโมง",
    time: "6 นาที",
  },
  {
    id: 3,
    category: "สำหรับครู",
    categoryColor: "bg-yellow-900 text-yellow-300",
    title: "AI ช่วยเขียนแผนการสอนครบ 5 องค์ประกอบ พร้อมใบงาน",
    desc: "ครูประถม-มัธยมใช้ได้เลย มี Prompt ตัวอย่างสำหรับทุกกลุ่มสาระการเรียนรู้",
    time: "5 นาที",
  },
  {
    id: 4,
    category: "วิเคราะห์",
    categoryColor: "bg-red-900 text-red-300",
    title: "วิเคราะห์เอกสารราชการด้วย Claude ได้ในเวลาไม่กี่นาที",
    desc: "อัปโหลดไฟล์ บอก Prompt ที่ถูกต้อง ได้รายงานวิเคราะห์พร้อมข้อเสนอแนะทันที",
    time: "7 นาที",
  },
]

export default function Blog() {
  return (
    <main className="min-h-screen bg-gray-950 text-white pt-28 px-8 pb-16">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-black mb-2">คลังความรู้</h1>
        <p className="text-gray-400 mb-12">
          บทความพร้อม Prompt ตัวอย่างใช้ได้จริง อัปเดตทุกสัปดาห์
        </p>

        {/* Article Cards */}
        <div className="flex flex-col gap-5">
          {articles.map(article => (
            <div
              key={article.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 hover:bg-gray-800 transition-all cursor-pointer group"
            >
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${article.categoryColor}`}>
                {article.category}
              </span>

              <h2 className="text-lg font-bold mt-4 mb-2 group-hover:text-blue-400 transition-colors">
                {article.title}
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {article.desc}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-xs">
                  🕐 อ่าน {article.time}
                </span>
                <span className="text-blue-400 text-xs group-hover:translate-x-1 transition-transform">
                  อ่านต่อ →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}