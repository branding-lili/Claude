"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

interface SidebarProps {
  navItems: NavItem[];
  userName: string;
  userEmail: string;
  avatarInitials: string;
  roleLabel: string;
  roleColor: string;
}

export default function Sidebar({ navItems, userName, userEmail, avatarInitials, roleLabel, roleColor }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-100 flex flex-col">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-gray-100">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
            <span className="text-white text-sm font-bold">L</span>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900 leading-none">Lili Sampedro</p>
            <p className="text-xs text-gray-400">lilisampedro.com.br</p>
          </div>
        </Link>
      </div>

      {/* Role badge */}
      <div className="px-6 py-3 border-b border-gray-100">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${roleColor}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
          Área do {roleLabel}
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? "bg-rose-50 text-rose-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <span className={`${isActive ? "text-rose-600" : "text-gray-400"}`}>{item.icon}</span>
              {item.label}
              {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-rose-500" />}
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="px-4 py-4 border-t border-gray-100">
        <div className="flex items-center gap-3 px-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-semibold">{avatarInitials}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">{userName}</p>
            <p className="text-xs text-gray-400 truncate">{userEmail}</p>
          </div>
        </div>
        <Link
          href="/"
          className="mt-3 flex items-center gap-2 px-2 py-1.5 text-xs text-gray-400 hover:text-rose-600 transition-colors rounded-lg hover:bg-rose-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Sair da conta
        </Link>
      </div>
    </aside>
  );
}
