export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-950 text-white pt-28 px-8 pb-16">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-black mb-2">ติดต่อเรา</h1>
        <p className="text-gray-400 mb-12">
          ส่งคำถามมาได้เลย ตอบภายใน 24 ชั่วโมง
        </p>

        {/* Contact Channels */}
        <div className="grid grid-cols-1 gap-4 mb-12">
          <div className="bg-green-900/30 border border-green-800 rounded-2xl p-5 flex items-center gap-4">
            <span className="text-3xl">💚</span>
            <div>
              <div className="font-bold text-green-300">Line OA</div>
              <div className="text-gray-400 text-sm">ติดต่อเร็วที่สุด ตอบทุกวัน</div>
              <div className="text-green-400 text-sm mt-1">@aichuaytamngan</div>
            </div>
          </div>

          <div className="bg-blue-900/30 border border-blue-800 rounded-2xl p-5 flex items-center gap-4">
            <span className="text-3xl">📘</span>
            <div>
              <div className="font-bold text-blue-300">Facebook Page</div>
              <div className="text-gray-400 text-sm">บทความและอัปเดตใหม่ๆ</div>
              <div className="text-blue-400 text-sm mt-1">AI ช่วยทำงาน</div>
            </div>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-5 flex items-center gap-4">
            <span className="text-3xl">📧</span>
            <div>
              <div className="font-bold text-gray-300">อีเมล</div>
              <div className="text-gray-400 text-sm">สำหรับงานทางการและสัญญาจ้าง</div>
              <div className="text-gray-400 text-sm mt-1">aichuaytamngan@gmail.com</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold mb-6">ส่งข้อความมาหาเรา</h2>

          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm text-gray-400 mb-2 block">ชื่อ-นามสกุล</label>
              <input
                type="text"
                placeholder="กรอกชื่อของคุณ"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">ประเภทงานที่ต้องการ</label>
              <select className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
                <option value="">เลือกประเภทงาน</option>
                <option>คำปรึกษาด้านการใช้ AI</option>
                <option>รับทำคู่มือปฏิบัติงาน</option>
                <option>รับทำงานวิจัย</option>
                <option>รับทำรายงานและวิเคราะห์</option>
                <option>อื่นๆ</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">รายละเอียด</label>
              <textarea
                rows={5}
                placeholder="อธิบายงานที่ต้องการ ขอบเขต และกำหนดส่ง..."
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-colors mt-2">
              ส่งข้อความ →
            </button>
          </div>
        </div>

      </div>
    </main>
  )
}