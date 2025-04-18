import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// FAQ 데이터
const faqCategories = [
  {
    category: "개인정보 보호",
    questions: [
      {
        question: "내 데이터는 어디에 저장되나요?",
        answer: "AIDE는 사용자의 모든 활동 데이터를 기본적으로 사용자의 기기 내부 저장소에만 보관합니다. 클라우드 서버로는 익명화된 요약 정보만 사용자가 명시적으로 동의한 경우에 제한적으로 전송됩니다."
      },
      {
        question: "클라우드 동기화는 어떤 식으로 이뤄지나요?",
        answer: "클라우드 동기화는 사용자가 설정에서 명시적으로 활성화한 경우에만 이루어집니다. 동기화 시 민감한 개인정보와 상세 활동 로그는 제외되며, 익명화된 요약 데이터와 설정값만 동기화됩니다. 이를 통해 여러 기기에서도 AIDE를 사용할 수 있습니다."
      },
      {
        question: "AIDE는 어떤 개인정보를 수집하나요?",
        answer: "AIDE는 최소한의 개인정보만 수집합니다. 로그인은 구글/애플 등 제3자 인증을 통해 이루어지므로 AIDE는 사용자의 이메일이나 비밀번호를 직접 저장하지 않습니다. 위치 데이터 등 센서 정보는 모두 기기 내부에서만 처리되고 외부로 전송되지 않습니다."
      },
      {
        question: "내 데이터를 삭제하려면 어떻게 해야 하나요?",
        answer: "앱 내의 '설정 > 개인정보 > 데이터 관리'에서 언제든지 모든 데이터를 쉽게 삭제할 수 있습니다. 기기에 저장된 모든 정보가 완전히 삭제되며, 클라우드에 동기화된 정보가 있다면 그것도 함께 삭제됩니다."
      }
    ]
  },
  {
    category: "기술 및 성능",
    questions: [
      {
        question: "어떤 휴대폰 센서를 사용하나요?",
        answer: "AIDE는 위치 센서(GPS), 가속도계, 자이로스코프 등의 센서를 활용하여 사용자의 활동을 자동으로 추적합니다. 이 데이터는 모두 기기 내부에서만 처리되며, 온디바이스 AI 모델을 통해 사용자의 활동 패턴을 학습합니다."
      },
      {
        question: "배터리 소모는 어느 정도인가요?",
        answer: "AIDE는 최적화된 센서 활용 알고리즘을 통해 배터리 소모를 최소화합니다. 일반적인 사용 패턴에서 하루 평균 배터리 소모량은 5-7% 수준이며, 절전 모드를 활성화하면 더 줄일 수 있습니다. 배터리 소모를 줄이기 위해 불필요한 센서는 자동으로 비활성화됩니다."
      },
      {
        question: "오프라인에서도 작동하나요?",
        answer: "네, AIDE는 '오프라인 퍼스트' 원칙으로 설계되어 인터넷 연결 없이도 모든 핵심 기능이 작동합니다. 활동 추적, AI 분석, 일정 추천 등이 모두 기기 내부에서 처리되므로 언제 어디서나 사용 가능합니다."
      },
      {
        question: "자동 추적의 정확도는 어느 정도인가요?",
        answer: "AIDE는 설치 후 사용자의 활동 패턴을 학습하면서 정확도가 점진적으로 향상됩니다. 약 2-3일간의 학습 기간 후에는 일반적인 활동 패턴에 대해 85-90%의 정확도를 제공합니다. 오분류된 활동은 사용자가 바로 수정할 수 있으며, 이 피드백을 통해 AI 모델이 지속적으로 개선됩니다."
      }
    ]
  },
  {
    category: "요금제 및 서비스",
    questions: [
      {
        question: "프리미엄 기능과 무료 버전의 차이는 무엇인가요?",
        answer: "무료 버전은 기본적인 시간 추적과 간단한 분석 기능을 제공합니다. 프리미엄 버전(월 9,900원)에서는 더 상세한 시간 ROI 분석, 고급 AI 추천, 확장된 리포트, 우선 고객 지원 등의 기능을 이용할 수 있습니다. 그러나 프라이버시 보호 기능은 모든 버전에서 동일하게 제공됩니다."
      },
      {
        question: "다른 앱과 연동이 가능한가요?",
        answer: "AIDE는 주요 일정 관리 앱(Google 캘린더, Todoist, Notion 등)과의 연동을 지원합니다. 연동 시에도 프라이버시 중심 설계 원칙이 적용되어, 필요한 최소한의 정보만 교환됩니다. 추가 연동 서비스는 지속적으로 확대될 예정입니다."
      },
      {
        question: "커스터마이징이 가능한가요?",
        answer: "AIDE는 사용자의 직업, 라이프스타일에 맞춘 다양한 템플릿을 제공합니다. 직장인, 학생, 프리랜서 등 자신에게 맞는 템플릿을 선택하고, 활동 카테고리, 목표, 우선순위 등을 개인화할 수 있습니다. 프리미엄 버전에서는 더 상세한 커스터마이징 옵션이 제공됩니다."
      },
      {
        question: "베타 테스터는 어떤 혜택이 있나요?",
        answer: "베타 테스터로 참여하시면 3개월 동안 프리미엄 기능을 무료로 이용하실 수 있습니다. 또한 개발 단계에서 피드백을 통해 AIDE의 기능 개선에 직접 참여할 수 있으며, 정식 출시 후에도 특별 할인 혜택이 제공됩니다."
      }
    ]
  }
];

// 추가 질문 세트
const additionalQuestions = [
  {
    question: "AIDE는 어떤 장치에서 사용할 수 있나요?",
    answer: "현재 AIDE는 안드로이드와 iOS 스마트폰에서 사용 가능합니다. 향후 태블릿, 웨어러블 기기 및 데스크톱 버전도 출시될 예정입니다."
  },
  {
    question: "데이터 백업은 어떻게 하나요?",
    answer: "앱 내 '설정 > 데이터 관리 > 백업' 메뉴에서 데이터 백업이 가능합니다. 백업 데이터는 암호화되어 저장되며, 선택적으로 클라우드 저장소(Google Drive, iCloud 등)에 업로드할 수 있습니다. 이 경우에도 모든 민감 정보는 암호화 처리됩니다."
  },
  {
    question: "다국어를 지원하나요?",
    answer: "현재 한국어와 영어를 지원하며, 향후 더 많은 언어가 추가될 예정입니다."
  }
];

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* 헤더 섹션 */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">자주 묻는 질문</h1>
          <p className="text-xl text-slate-600 mb-8">
            AIDE에 대해 궁금한 점을 찾아보세요. 더 자세한 질문은 언제든지 문의해 주세요.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
            <Link href="/contact">추가 문의하기</Link>
          </Button>
        </div>
      </section>

      {/* FAQ 카테고리별 섹션 */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {faqCategories.map((category, index) => (
            <Link key={index} href={`#${category.category}`}>
              <div className="bg-slate-50 hover:bg-slate-100 transition-colors p-6 rounded-lg text-center shadow-sm cursor-pointer">
                <h3 className="text-xl font-bold mb-2">{category.category}</h3>
                <p className="text-slate-600">{category.questions.length}개 질문</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} id={category.category} className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
              <Accordion type="single" collapsible className="mb-10">
                {category.questions.map((item, questionIndex) => (
                  <AccordionItem key={questionIndex} value={`item-${categoryIndex}-${questionIndex}`}>
                    <AccordionTrigger className="text-left text-lg font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 text-base pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <Separator className="my-8" />
            </div>
          ))}
        </div>
      </section>

      {/* 추가 질문 섹션 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">기타 질문</h2>
        <Accordion type="single" collapsible>
          {additionalQuestions.map((item, index) => (
            <AccordionItem key={index} value={`additional-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA 섹션 */}
      <section className="bg-slate-50 p-8 rounded-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">여전히 궁금한 점이 있으신가요?</h2>
          <p className="text-slate-600 mb-6">
            찾으시는 답변이 없다면 언제든지 문의해 주세요.
            저희 팀이 최대한 빠르게 답변해 드리겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700" asChild>
              <Link href="/contact">문의하기</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/about">AIDE 더 알아보기</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}