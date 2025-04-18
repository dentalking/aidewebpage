import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 로고 및 간략한 설명 */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">AIDE</span>
            </Link>
            <p className="text-slate-300 mb-4">
              프라이버시 중심 설계를 핵심으로 하는 AI 기반 시간 자산 관리 플랫폼
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-slate-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.059 10.059 0 01-3.126 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-slate-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="text-slate-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white">
                  소개
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-slate-300 hover:text-white">
                  기능
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white">
                  문의
                </Link>
              </li>
            </ul>
          </div>

          {/* 법적 정보 */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">법적 정보</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-slate-300 hover:text-white">
                  개인정보 보호정책
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-300 hover:text-white">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-slate-300 hover:text-white">
                  쿠키 정책
                </Link>
              </li>
            </ul>
          </div>

          {/* 뉴스레터 구독 */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">뉴스레터 구독</h3>
            <p className="text-slate-300 mb-4">
              AIDE의 최신 소식과 업데이트를 받아보세요.
            </p>
            <form className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="이메일 주소"
                className="bg-slate-800 border-slate-700 text-white"
              />
              <Button className="bg-purple-600 hover:bg-purple-700">
                구독하기
              </Button>
            </form>
          </div>
        </div>

        <Separator className="bg-slate-700 my-8" />

        <div className="text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} AIDE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}