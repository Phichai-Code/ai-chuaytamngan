export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">

        <div className="bg-blue-900 text-blue-300 text-sm px-4 py-2 rounded-full mb-8">
          🤖 แพลตฟอร์ม AI สำหรับบุคลากรการศึกษา
        </div>

        <h1 className="text-6xl font-black mb-4">
          AI ช่วยทำงาน
        </h1>

        <p className="text-gray-400 text-xl mb-10 leading-relaxed max-w-lg">
          เกร็ดความรู้ คำปรึกษา และบริการด้าน AI
          สำหรับบุคลากรมหาวิทยาลัยและครูทุกระดับ
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <button className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-full font-bold transition-colors">
            📖 คลังความรู้ฟรี
          </button>
          <button className="border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-full transition-colors">
            💬 ปรึกษาเรา
          </button>
        </div>

      </div>
    </main>
  )
}