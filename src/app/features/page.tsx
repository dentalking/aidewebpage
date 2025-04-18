import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Features() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* 헤더 섹션 */}
      <section className="mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">AIDE의 핵심 기능</h1>
          <p className="text-xl text-slate-600 mb-8">
            프라이버시를 지키면서도 AI의 도움을 받아 시간을 효율적으로 관리할 수 있는 
            AIDE의 혁신적인 기능들을 소개합니다.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
            <Link href="/contact">베타테스터로 참여하기</Link>
          </Button>
        </div>
      </section>

      {/* 자동 시간 추적 */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">자동 시간 추적 시스템</h2>
            <div className="space-y-4">
              <p className="text-lg">
                스마트폰 센서(위치·움직임 등)를 활용해 사용자가 별도 조작 없이도 활동을 
                자동으로 기록하고 분석합니다.
              </p>
              <p className="text-lg">
                데이터 저장 원칙: 기본적으로 기기 내부(Room DB 등)에만 저장하여, 
                AIDE 서버에는 사용자의 상세 로그가 전송되지 않습니다.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">계층적 활동 분류 시스템</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">0</div>
                  <div>
                    <p className="font-medium">폰 위치 분류</p>
                    <p className="text-slate-600">주머니, 손, 탁자 등</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <p className="font-medium">이동성 분류</p>
                    <p className="text-slate-600">정적/동적</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <p className="font-medium">활동 유형 분류</p>
                    <p className="text-slate-600">앉기, 걷기, 이동수단 탑승 등</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <p className="font-medium">맥락 기반 분류</p>
                    <p className="text-slate-600">업무, 휴식, 이동 등</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Card className="border-none overflow-hidden shadow-xl">
              <CardContent className="p-0">
                {/* 실제 앱 스크린샷으로 교체 필요 */}
                <div className="bg-slate-100 h-[500px] flex items-center justify-center">
                  <div className="text-center p-10">
                    <div className="w-20 h-20 mx-auto bg-purple-600 rounded-full mb-6 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-lg font-medium">자동 시간 추적 인터페이스</p>
                    <p className="text-sm text-slate-500">
                      귀하의 활동이 자동으로 분석되고 있습니다.<br />
                      (모든 데이터는 귀하의 기기에만 저장됩니다)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI 시간 자산 관리자 */}
      <section className="mb-20 bg-slate-50 py-16 -mx-4 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI 시간 자산 관리자</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              기기 내부에서 데이터를 분석해 맞춤형 일정을 제안합니다. 프라이버시를 지키면서도 
              인공지능의 도움을 받을 수 있습니다.
            </p>
          </div>
          
          <Tabs defaultValue="morning" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="morning">아침: 하루 설계</TabsTrigger>
              <TabsTrigger value="noon">오전: 집중 피크 관리</TabsTrigger>
              <TabsTrigger value="evening">오후: 잔여 시간 재배치</TabsTrigger>
            </TabsList>
            
            {[
              {
                id: "morning",
                title: "아침: 하루 설계",
                description: "하루를 시작할 때 최적의 일정을 제안받으세요",
                features: [
                  "어제의 완료 상태에 따른 오늘의 우선순위 조정",
                  "에너지 수준과 일정의 중요도를 고려한 일정 배치",
                  "날씨와 외부 요인에 맞춘 활동 추천",
                  "집중력이 높은 시간대에 중요 작업 배치"
                ]
              },
              {
                id: "noon",
                title: "오전: 집중 피크 관리",
                description: "가장 생산적인 시간을 효율적으로 활용하세요",
                features: [
                  "집중 작업 구간과 휴식 시간 최적화",
                  "예상치 못한 방해 요소 발생 시 재조정 제안",
                  "실시간 진행 상황에 따른 일정 조정",
                  "회의 및 협업 시간 효율화 제안"
                ]
              },
              {
                id: "evening",
                title: "오후: 잔여 시간 재배치",
                description: "남은 시간을 효과적으로 활용하는 방법",
                features: [
                  "미완료 작업의 우선순위 재설정",
                  "에너지 수준에 맞는 작업 추천",
                  "내일을 위한 준비 활동 제안",
                  "휴식과 자기 계발 시간 균형 유지"
                ]
              }
            ].map((time) => (
              <TabsContent key={time.id} value={time.id}>
                <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-lg shadow-md">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-2">{time.title}</h3>
                    <p className="text-slate-600 mb-4">{time.description}</p>
                    <ul className="space-y-3">
                      {time.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="md:w-1/2">
                    <div className="bg-slate-100 rounded-lg h-[300px] flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-16 h-16 mx-auto bg-purple-600 rounded-full mb-4 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                          </svg>
                        </div>
                        <p className="text-lg font-medium">{time.title} 알림 예시</p>
                        <p className="text-sm text-slate-500">
                          AI가 분석한 추천 일정과 조언을<br />
                          프라이버시를 지키며 받아보세요
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* 프라이버시 보호 */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="border-none overflow-hidden shadow-xl h-full">
              <CardContent className="p-0 h-full">
                <div className="bg-slate-100 h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-purple-600 rounded-full mb-6 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    </div>
                    <div className="max-w-md mx-auto">
                      <p className="text-lg font-medium mb-4">프라이버시 보호형 인증(PPIA)</p>
                      <p className="mb-2 text-sm">
                        AIDE는 사용자 식별정보를 보관하지 않아도 인증이 가능합니다
                      </p>
                      <div className="border border-slate-300 rounded-lg p-4 bg-white mb-4">
                        <p className="font-medium text-sm text-purple-600">로그인 화면</p>
                        <div className="flex gap-3 mt-2">
                          <button className="border border-slate-300 rounded-md px-3 py-1 text-sm flex items-center gap-1">
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                              <path fill="currentColor" d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12 6.627 0 12-5.372 12-12 0-6.628-5.373-12-12-12zm7.369 8.432c.19.69.257 1.384.3 2.09-.918-.08-1.798-.222-2.645-.408-.078-.249-.185-.479-.306-.704.71-.467 1.508-.942 2.32-1.31a7.01 7.01 0 0 1 .331.332zm-5.288-3.001c.541.72 1.001 1.498 1.37 2.335-.867.175-1.74.334-2.609.475a11.28 11.28 0 0 0-.478-2.238c.416-.195 1.06-.459 1.717-.572zm-2.036.192a10.05 10.05 0 0 1 .466 2.188c-.874.092-1.758.144-2.654.153V5.221c.758.016 1.453.091 2.078.233l.11.021-.006.148zM9.5 5.22v2.756a27.37 27.37 0 0 1-2.66-.152 10.14 10.14 0 0 1 .473-2.196c.285-.063 1.316-.293 2.087-.387l.1-.021zm-2.74.554a10.96 10.96 0 0 0-.473 2.206 25.21 25.21 0 0 1-2.585-.467c.369-.833.83-1.604 1.37-2.325.537.114 1.115.365 1.688.586zm-2.13.462a9.07 9.07 0 0 0-1.432 2.403c-.616.08-1.134.175-1.491.267a9.85 9.85 0 0 1 2.924-2.67zm-2.924 7.68a7.745 7.745 0 0 1-.624-3.101c.284-.079 1.206-.287 2.188-.398-.106.742-.155 1.5-.155 2.258 0 .433.014.838.04 1.242zm.666 2.198c.387-.83.886-1.58 1.477-2.294.62.26 1.39.503 2.31.648a13.263 13.263 0 0 0-.568 2.978 9.84 9.84 0 0 1-3.22-1.332zm3.645 1.954a12.11 12.11 0 0 1 .573-3.418c.875.155 1.82.251 2.813.283v3.708a9.84 9.84 0 0 1-3.387-.573zm4.426.56V10.11c.99-.03 1.932-.126 2.806-.28.139.9.214 1.4.214 1.93 0 .521-.067 1.03-.189 1.511-.758.135-1.77.24-2.831.27zm3.169-.232c.13-.523.201-1.075.208-1.64 0-.563-.085-1.143-.235-1.718.916.184 1.796.326 2.633.408a7.79 7.79 0 0 1-2.606 2.95zm2.882-3.577c-.847-.074-1.738-.208-2.653-.387.105-.738.154-1.5.154-2.26 0-.26-.012-.518-.024-.772.821.111 1.55.241 2.057.341a7.776 7.776 0 0 1 .466 3.078zm-.692-4.073c-.386-.063-.82-.13-1.3-.207a9.06 9.06 0 0 0-1.298-2.39c1.092.496 2.058 1.17 2.85 1.968l-.252.63z" />
                            </svg>
                            <span>구글로 로그인</span>
                          </button>
                          <button className="border border-slate-300 rounded-md px-3 py-1 text-sm flex items-center gap-1">
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                              <path fill="currentColor" d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
                            </svg>
                            <span>애플로 로그인</span>
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-slate-500 italic">
                        AIDE는 로그인 인증을 제3자에게 위임하여 
                        사용자의 식별 정보를 직접 저장하지 않습니다
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">프라이버시 중심 설계</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">PPIA (Privacy-Preserving Identity Architecture)</h3>
                <p className="text-lg mb-4">
                  AIDE는 사용자 식별정보를 보관하지 않아도 인증이 가능한 구조를 채택했습니다.
                  로그인은 구글/애플 등 제3자 인증만 사용하므로 AIDE는 사용자 이메일/비밀번호를 
                  직접 저장하지 않습니다.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">로컬 저장 (Local Data Architecture)</h3>
                <p className="text-lg mb-4">
                  사용자의 모든 시간 로그 데이터는 기본적으로 기기 내부 DB에만 저장됩니다.
                  AIDE 서버로는 익명화된 요약 데이터만 선택적으로 전송됩니다.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">온디바이스 분석</h3>
                <p className="text-lg mb-4">
                  사용자 로그는 클라우드 서버가 아니라 스마트폰 내 AI 모델이 처리합니다.
                  이를 통해 개인정보 유출 위험을 최소화하면서도 AI 분석의 혜택을 누릴 수 있습니다.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">사용자 통제권</h3>
                <p className="text-lg">
                  "데이터 내보내기/삭제"를 자유롭게 할 수 있으며, 클라우드 동기화 시에도
                  부분적·익명화 전송을 지원합니다. 모든 데이터 사용 권한은 사용자에게 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 시간 시각화 */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">시간의 시각화</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            당신의 소중한 시간을 한눈에 파악하고 관리할 수 있도록 직관적인 시각화를 제공합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "남은 가능성 시간",
              description: "오늘 사용할 수 있는 남은 시간을 시각적으로 표현합니다.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            {
              title: "주간 성취 리포트",
              description: "지난 일주일 동안의 시간 사용 패턴과 성취도를 분석합니다.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              )
            },
            {
              title: "시간 균형 지표",
              description: "업무, 휴식, 성장 등 영역별 시간 배분의 균형을 확인합니다.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                </svg>
              )
            }
          ].map((item, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 flex flex-col items-center">
                <div className="text-purple-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
                <p className="text-center text-slate-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}