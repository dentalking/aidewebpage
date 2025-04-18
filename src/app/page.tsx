import Link from 'next/link';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/sections/hero-section';
import CoreValuesSection from '@/components/sections/core-values-section';
import DemoSection from '@/components/sections/demo-section';
import TestimonialsSection from '@/components/sections/testimonials-section';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Core Values Section */}
      <CoreValuesSection />
      
      {/* Demo Section */}
      <DemoSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <section className="w-full bg-slate-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">AIDE와 함께 소중한 시간을 관리하세요</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            프라이버시를 보호하면서도 인공지능의 도움을 받아 시간을 효율적으로 관리하세요.
            지금 베타 테스터로 참여하고 AIDE를 먼저 경험해보세요.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">베타 테스트 참여하기</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/features">더 알아보기</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}