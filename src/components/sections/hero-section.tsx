import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="w-full bg-slate-900 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          우리는 당신을 모릅니다. <br />그래서 더 믿을 수 있습니다.
          </h1>
          <p className="text-lg md:text-xl mb-8 text-slate-300 max-w-md">
            AIDE는 프라이버시를 지키면서도 AI로 시간을 자동 추적하고 관리해주는 플랫폼입니다.
            당신의 데이터는 당신의 기기에만 남습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
              <Link href="/contact">베타 테스트 참여하기</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900" asChild>
              <Link href="/features">기능 살펴보기</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-[300px] h-[600px] md:w-[350px] md:h-[700px]">
            {/* 이미지 대신 플레이스홀더 사용 (실제 앱 스크린샷으로 교체 필요) */}
            <div className="bg-slate-800 rounded-3xl overflow-hidden w-full h-full flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto bg-purple-600 rounded-full mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-lg font-medium">AIDE</p>
                <p className="text-sm opacity-70">앱 인터페이스 미리보기</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}