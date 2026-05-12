import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "AI ช่วยทำงาน",
  description: "แพลตฟอร์ม AI สำหรับบุคลากรการศึกษาไทย",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body>

        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800 px-8 py-4 flex justify-between items-center">
          <span className="font-black text-white text-lg">
            AI ช่วยทำงาน
          </span>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="/"         className="hover:text-white transition-colors">หน้าแรก</a>
            <a href="/blog"     className="hover:text-white transition-colors">บทความ</a>
            <a href="/services" className="hover:text-white transition-colors">บริการ</a>
            <a href="/contact"  className="hover:text-white transition-colors">ติดต่อ</a>
          </div>
        </nav>

        {children}

      </body>
    </html>
  )
}