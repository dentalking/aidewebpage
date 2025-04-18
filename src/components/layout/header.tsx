"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const navItems = [
  { title: '소개', href: '/about' },
  { title: '기능', href: '/features' },
  { title: 'FAQ', href: '/faq' },
  { title: '문의', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-slate-900">AIDE</span>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-600 hover:text-purple-600 font-medium"
              >
                {item.title}
              </Link>
            ))}
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700" asChild>
              <Link href="/contact">베타 테스트 참여</Link>
            </Button>
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-600 hover:text-purple-600 font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700 mt-2" asChild>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  베타 테스트 참여
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}