import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";

const testimonials = [
  {
    quote: "AIDE를 사용한 이후 제 일정 관리가 완전히 달라졌어요. 특히 제 데이터가 클라우드에 저장되지 않는다는 점이 가장 마음에 들어요.",
    author: "김지연",
    role: "마케팅 전문가",
    avatar: "KJ"
  },
  {
    quote: "자동으로 하루 일정을 추적해주는 기능이 정말 편리해요. 수동 입력 없이도 하루 시간 사용을 파악할 수 있어 좋아요.",
    author: "이민수",
    role: "소프트웨어 개발자",
    avatar: "LM"
  },
  {
    quote: "프라이버시를 중요하게 생각하는 저에게 AIDE는 완벽한 선택이었어요. 데이터가 내 폰에만 있다는 게 안심이 됩니다.",
    author: "박서연",
    role: "대학원생",
    avatar: "PS"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">사용자 후기</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            AIDE를 사용해본 베타테스터들의 생생한 경험담을 들어보세요.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="text-purple-600">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </CardHeader>
              <CardContent className="text-lg italic">
                "{testimonial.quote}"
              </CardContent>
              <CardFooter className="flex items-center space-x-4 border-t pt-4">
                <Avatar>
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}