import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const scenarios = [
  {
    id: "professional",
    title: "직장인",
    description: "효율적인 업무 시간 관리",
    features: [
      "회의와 집중 작업 시간의 자동 구분",
      "업무와 개인 시간의 균형 분석",
      "번아웃 방지를 위한 휴식 시간 제안",
      "일일 성취도와 효율성 리포트"
    ],
    imageUrl: "/placeholder-professional.png"
  },
  {
    id: "student",
    title: "학생",
    description: "학습 효율 최적화",
    features: [
      "과목별 학습 시간 자동 추적",
      "집중력 저하 시점 알림",
      "개인화된 학습 일정 추천",
      "시험 대비 최적 시간 분배 제안"
    ],
    imageUrl: "/placeholder-student.png"
  },
  {
    id: "freelancer",
    title: "프리랜서",
    description: "프로젝트 관리와 시간 자산화",
    features: [
      "프로젝트별 시간 투자 분석",
      "수익성 기반 시간 ROI 계산",
      "미래 프로젝트 시간 예측",
      "성장과 수익의 균형 최적화"
    ],
    imageUrl: "/placeholder-freelancer.png"
  }
];

export default function DemoSection() {
  return (
    <section className="w-full py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">AIDE로 달라지는 일상</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            다양한 라이프스타일에 맞춰 AIDE가 어떻게 도움이 되는지 살펴보세요.
          </p>
        </div>

        <Tabs defaultValue="professional" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {scenarios.map((scenario) => (
              <TabsTrigger key={scenario.id} value={scenario.id}>
                {scenario.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {scenarios.map((scenario) => (
            <TabsContent key={scenario.id} value={scenario.id}>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-2">{scenario.description}</h3>
                  <ul className="space-y-3 mt-4">
                    {scenario.features.map((feature, index) => (
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
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      {/* 실제 앱 스크린샷 또는 GIF로 대체 필요 */}
                      <div className="bg-slate-200 h-[400px] flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-lg font-medium">AIDE {scenario.title} 인터페이스</p>
                          <p className="text-sm text-slate-500">앱 스크린샷으로 교체 예정</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}