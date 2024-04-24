
import Link from "next/link"
import { FiUser, FiLogOut } from 'react-icons/fi'

export function Header() {
  return (
    <header className="w-full flex items-center px-2 bg-white h-20 shadow-sm">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/">
          <h1 className="font-bold text-2xl pl-1">
            <span className="text-blue-500">PARK</span> FAST
          </h1>
        </Link>

        <div className="flex items-baseline gap-4">
          <Link href="/dashboard">
            <FiUser size={26} color="#4b5563" />
          </Link>

          <button>
            <FiLogOut size={26} color="#f03" />
          </button>
        </div>
      </div>
    </header>
  )
}