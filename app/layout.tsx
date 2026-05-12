import type { Metadata } from "next"
import Link from "next/link"
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
            <Link href="/"         className="hover:text-white transition-colors">หน้าแรก</Link>
            <Link href="