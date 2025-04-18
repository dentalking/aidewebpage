import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* 소개 섹션 */}
      <section className="mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">AIDE 소개</h1>
          <p className="text-xl text-slate-600 mb-8">
            AIDE는 프라이버시 중심 설계를 핵심 가치로 하는 AI 기반 시간 자산 관리 플랫폼입니다.
            우리는 사용자의 데이터를 가장 소중히 여기며, 혁신적인 방법으로 시간 관리를 돕습니다.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
            <Link href="/contact">베타테스터로 참여하기</Link>
          </Button>
        </div>
      </section>

      {/* 비전과 철학 */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">우리의 비전과 철학</h2>
            <div className="space-y-4">
              <p className="text-lg">
                <span className="font-bold">"Time is Life, We Invest It Better"</span> – AIDE는 '시간'을 단순히 흘러가는 개념이 아닌, 
                삶을 풍요롭게 만들 수 있는 가장 중요한 자산으로 재정의합니다.
              </p>
              <p className="text-lg">
                그리고 이러한 시간 자산을 안전하고 신뢰도 높게 관리하기 위해, 개인정보를 최소한으로 수집·저장하고, 
                사용자 스스로 데이터를 통제하도록 설계된 프라이버시 중심 접근을 도입했습니다.
              </p>
            </div>
          </div>
          <Card className="bg-slate-50 border-none">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">AIDE의 시간 자산 철학</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium">시간의 자산화</p>
                    <p className="text-slate-600">모든 순간은 삶에 긍정적 가치를 더할 수 있는 귀중한 자원입니다.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium">시간의 가치 발견</p>
                    <p className="text-slate-600">각 시간을 어떻게 쓰느냐에 따라 삶의 질이 달라진다고 믿습니다.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium">시간의 균형</p>
                    <p className="text-slate-600">일·휴식·성장 사이에 시간을 조화롭게 배치해야 합니다.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium">시간의 증식</p>
                    <p className="text-slate-600">오늘의 현명한 선택이 내일의 더 큰 가치를 낳습니다.</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 핵심 페르소나 */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">우리가 도움을 드리는 사용자</h2>
        <div className="bg-slate-50 rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="bg-white rounded-full w-48 h-48 mx-auto flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-slate-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-2">박지영, 28세 프리랜서 마케터</h3>
              <p className="text-slate-600 mb-4">체계적이고 목표 지향적인 성격으로 여러 프로젝트를 동시에 관리합니다.</p>
              <div className="mb-4">
                <h4 className="font-bold mb-2">필요:</h4>
                <p>여러 일정을 편리하게 통합 관리하고, 자신만의 성장·휴식 균형을 잡을 솔루션</p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold mb-2">문제점:</h4>
                <p>기존 생산성 도구들은 대부분 클라우드 중심으로 개인정보를 지나치게 요구하거나, 수동 입력이 많아 번거로움</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">AIDE 활용 기대:</h4>
                <p>자동 추적 + 신뢰 설계(개인정보가 클라우드로 넘어가지 않음)에 매력을 느낌</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: '학생',
              items: [
                '학습 시간 최적화',
                '시험 대비 플랜 추천',
                '민감 정보 최소화에 대한 안심'
              ]
            },
            {
              title: '직장인',
              items: [
                '업무 일정 자동화',
                '회의·집중 시간 안배',
                '번아웃 방지'
              ]
            },
            {
              title: '부모',
              items: [
                '가정·일 균형 관리',
                '자녀 돌봄·개인 시간 구분',
                '효율적인 시간 활용'
              ]
            },
            {
              title: '프로젝트 매니저',
              items: [
                '팀 일정 조율',
                '자원·인력 배분 최적화',
                '데드라인 관리'
              ]
            }
          ].map((user, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">{user.title}</h3>
                <ul className="space-y-2">
                  {user.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 팀 소개 */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">AIDE 개발팀</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: '김성민',
              role: '창업자 & CEO',
              bio: '10년간의 소프트웨어 개발 경험과 개인정보 보호에 대한 열정으로 AIDE를 설립했습니다.'
            },
            {
              name: '이지원',
              role: 'CTO',
              bio: '온디바이스 AI 전문가로, AIDE의 핵심 기술 아키텍처를 설계했습니다.'
            },
            {
              name: '박미영',
              role: '디자인 책임자',
              bio: '사용자 중심 디자인과 윤리적 UX를 통해 AIDE의 사용자 경험을 만들어갑니다.'
            }
          ].map((member, index) => (
            <Card key={index} className="border-none shadow-md text-center">
              <CardContent className="pt-6">
                <div className="bg-slate-200 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-slate-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-purple-600 mb-2">{member.role}</p>
                <p className="text-slate-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 로드맵 */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">AIDE 개발 여정</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {[
              {
                date: '2023년 Q2',
                title: '안드로이드 MVP 내부 테스트',
                description: '자동 시간 추적 핵심 기능과 온디바이스 분석 아키텍처 개발'
              },
              {
                date: '2023년 Q3',
                title: '알파 테스트 500명까지 확대',
                description: '프라이버시 중심 설계를 바탕으로 사용자 경험 개선 및 기능 확장'
              },
              {
                date: '2023년 Q4',
                title: '베타 출시 및 프리미엄 플랜 시험 운영',
                description: '핵심 사용자층 확보 및 수익 모델 테스트'
              },
              {
                date: '2024년 Q1',
                title: 'iOS 동시 지원, B2B 기능 개발 착수',
                description: '플랫폼 확장 및 기업 고객을 위한 프라이버시 중심 솔루션 개발'
              }
            ].map((milestone, index) => (
              <div key={index} className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  {index < 3 && <div className="h-full w-0.5 bg-purple-200 my-1"></div>}
                </div>
                <div className="pb-8">
                  <div className="text-sm text-purple-600 font-medium mb-1">{milestone.date}</div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-slate-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}