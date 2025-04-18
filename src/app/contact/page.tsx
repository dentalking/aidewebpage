"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Contact() {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [betaSubmitted, setBetaSubmitted] = useState(false);
  const [partnershipSubmitted, setPartnershipSubmitted] = useState(false);

  // 문의 폼 상태
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    inquiryType: 'general',
    message: ''
  });

  // 베타테스터 폼 상태
  const [betaForm, setBetaForm] = useState({
    name: '',
    email: '',
    device: '',
    occupation: '',
    experience: 'beginner',
    reason: ''
  });

  // 파트너십 폼 상태
  const [partnershipForm, setPartnershipForm] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    partnershipType: 'integration',
    description: ''
  });

  // 문의 폼 제출
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(contactForm);
    setContactSubmitted(true);
  };

  // 베타테스터 폼 제출
  const handleBetaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(betaForm);
    setBetaSubmitted(true);
  };

  // 파트너십 폼 제출
  const handlePartnershipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(partnershipForm);
    setPartnershipSubmitted(true);
  };

  // 입력값 변경 핸들러
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleBetaChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBetaForm(prev => ({ ...prev, [name]: value }));
  };

  const handlePartnershipChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPartnershipForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* 헤더 섹션 */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-600 mb-8">
            AIDE에 대한 문의, 베타테스터 신청, 파트너십 제안 등 언제든지 연락주세요.
          </p>
        </div>
      </section>

      {/* 탭 인터페이스 */}
      <Tabs defaultValue="contact" className="max-w-3xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="contact">일반 문의</TabsTrigger>
          <TabsTrigger value="beta">베타테스터 신청</TabsTrigger>
          <TabsTrigger value="partnership">파트너십 문의</TabsTrigger>
        </TabsList>

        {/* 일반 문의 폼 */}
        <TabsContent value="contact">
          <Card>
            <CardContent className="pt-6">
              {contactSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">감사합니다!</h3>
                  <p className="text-slate-600 mb-4">
                    문의사항이 접수되었습니다. 최대한 빠르게 답변 드리겠습니다.
                  </p>
                  <Button variant="outline" onClick={() => setContactSubmitted(false)}>
                    새 문의하기
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">이름</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="홍길동"
                      value={contactForm.name}
                      onChange={handleContactChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">이메일</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@email.com"
                      value={contactForm.email}
                      onChange={handleContactChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>문의 유형</Label>
                    <RadioGroup
                      value={contactForm.inquiryType}
                      onValueChange={(value) => setContactForm(prev => ({ ...prev, inquiryType: value }))}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem id="general" value="general" />
                        <Label htmlFor="general" className="font-normal">일반 문의</Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem id="technical" value="technical" />
                        <Label htmlFor="technical" className="font-normal">기술 지원</Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem id="partnership" value="partnership" />
                        <Label htmlFor="partnership" className="font-normal">파트너십</Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem id="feedback" value="feedback" />
                        <Label htmlFor="feedback" className="font-normal">피드백</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">메시지</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="문의 내용을 상세히 적어주세요"
                      rows={5}
                      value={contactForm.message}
                      onChange={handleContactChange}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                    문의하기
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* 베타테스터 신청 폼 */}
        <TabsContent value="beta">
          <Card>
            <CardContent className="pt-6">
              {betaSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">신청 완료!</h3>
                  <p className="text-slate-600 mb-4">
                    베타테스터 신청이 접수되었습니다. 선정 결과는 이메일로 안내드리겠습니다.
                  </p>
                  <Button variant="outline" onClick={() => setBetaSubmitted(false)}>
                    다시 신청하기
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleBetaSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="beta-name">이름</Label>
                    <Input
                      id="beta-name"
                      name="name"
                      placeholder="홍길동"
                      value={betaForm.name}
                      onChange={handleBetaChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="beta-email">이메일</Label>
                    <Input
                      id="beta-email"
                      name="email"
                      type="email"
                      placeholder="example@email.com"
                      value={betaForm.email}
                      onChange={handleBetaChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="device">사용 중인 기기</Label>
                    <Input
                      id="device"
                      name="device"
                      placeholder="예: iPhone 13, Galaxy S22 등"
                      value={betaForm.device}
                      onChange={handleBetaChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="occupation">직업</Label>
                    <Select
                      value={betaForm.occupation}
                      onValueChange={(value) => setBetaForm(prev => ({ ...prev, occupation: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="직업을 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">학생</SelectItem>
                        <SelectItem value="office">직장인</SelectItem>
                        <SelectItem value="freelancer">프리랜서</SelectItem>
                        <SelectItem value="business">자영업</SelectItem>
                        <SelectItem value="other">기타</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>시간 관리 앱 사용 경험</Label>
                    <RadioGroup
                      value={betaForm.experience}
                      onValueChange={(value) => setBetaForm(prev => ({ ...prev, experience: value }))}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem id="beginner" value="beginner" />
                        <Label htmlFor="beginner" className="font-normal">초보자 (처음 사용)</Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem id="intermediate" value="intermediate" />
                        <Label htmlFor="intermediate" className="font-normal">중급자 (가끔 사용)</Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem id="advanced" value="advanced" />
                        <Label htmlFor="advanced" className="font-normal">고급자 (자주 사용)</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="reason">지원 이유</Label>
                    <Textarea
                      id="reason"
                      name="reason"
                      placeholder="베타테스터로 지원하시는 이유를 적어주세요"
                      rows={4}
                      value={betaForm.reason}
                      onChange={handleBetaChange}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                    신청하기
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* 파트너십 문의 폼 */}
        <TabsContent value="partnership">
          <Card>
            <CardContent className="pt-6">
              {partnershipSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">접수 완료!</h3>
                  <p className="text-slate-600 mb-4">
                    파트너십 문의가 접수되었습니다. 검토 후 연락드리겠습니다.
                  </p>
                  <Button variant="outline" onClick={() => setPartnershipSubmitted(false)}>
                    새 문의하기
                  </Button>
                </div>
              ) : (
                <form onSubmit={handlePartnershipSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">회사명</Label>
                    <Input
                      id="company-name"
                      name="companyName"
                      placeholder="회사명을 입력해주세요"
                      value={partnershipForm.companyName}
                      onChange={handlePartnershipChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contact-person">담당자 이름</Label>
                    <Input
                      id="contact-person"
                      name="contactPerson"
                      placeholder="담당자 이름을 입력해주세요"
                      value={partnershipForm.contactPerson}
                      onChange={handlePartnershipChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="partner-email">이메일</Label>
                    <Input
                      id="partner-email"
                      name="email"
                      type="email"
                      placeholder="example@company.com"
                      value={partnershipForm.email}
                      onChange={handlePartnershipChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">연락처</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="전화번호를 입력해주세요"
                      value={partnershipForm.phone}
                      onChange={handlePartnershipChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>파트너십 유형</Label>
                    <RadioGroup
                      value={partnershipForm.partnershipType}
                      onValueChange={(value) => setPartnershipForm(prev => ({ ...prev, partnershipType: value }))}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem id="integration" value="integration" />
                        <Label htmlFor="integration" className="font-normal">서비스 연동</Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem id="business" value="business" />
                        <Label htmlFor="business" className="font-normal">비즈니스 협력</Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem id="investment" value="investment" />
                        <Label htmlFor="investment" className="font-normal">투자 제안</Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem id="other" value="other" />
                        <Label htmlFor="other" className="font-normal">기타</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">제안 내용</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="파트너십 제안 내용을 상세히 적어주세요"
                      rows={5}
                      value={partnershipForm.description}
                      onChange={handlePartnershipChange}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                    제안하기
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* 추가 연락처 정보 */}
      <section className="mt-20">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">이메일</h3>
              <p className="text-slate-600">contact@aide-app.com</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">전화번호</h3>
              <p className="text-slate-600">02-123-4567</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">주소</h3>
              <p className="text-slate-600">서울시 강남구 테헤란로 123</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}