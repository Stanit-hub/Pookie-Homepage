import { useState } from 'react';
import ContactModal from '../../../components/feature/ContactModal';

const steps = [
  {
    icon: '/plan_icon.png',
    label: 'Planning',
    desc: ['다양한 Pookie 제작옵션과 콘텐츠로', 'IP와 팬 특성에 부합하는 경험을 기획합니다.'],
  },
  {
    icon: '/make_icon.png',
    label: 'Making',
    desc: ['빠른 제작 기간과 철저한 품질 관리로', '고품질의 포토카드와 웹서비스를 제작합니다.'],
  },
  {
    icon: '/grow_icon.png',
    label: 'Growing',
    desc: ['누적된 팬 데이터를 기반으로', '새로운 팬 경험과 수익 성장 전략을 제안합니다.'],
  },
];

export default function PartnershipSection() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section
        id="partnership"
        className="px-4 md:px-6 bg-white text-center flex flex-col justify-center"
        style={{ minHeight: '100vh' }}
      >
        <div className="max-w-5xl mx-auto w-full py-8">
          <div className="min-h-[220px] md:min-h-[210px] flex flex-col justify-start">
            {/* Label */}
            <div className="flex items-center justify-center gap-3 mb-4 md:mb-5">
              <span
                className="inline-block px-3 py-1.5 rounded-md text-white"
                style={{
                  fontFamily: "'Noto Sans KR', sans-serif",
                  fontWeight: 500,
                  fontSize: '14px',
                  background: '#0099FF',
                  letterSpacing: '-0.02em',
                }}
              >
                How we work with you
              </span>
            </div>

            {/* Main copy */}
            <h2
              className="text-2xl md:text-5xl mb-4"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#181818' }}
            >
              빠르고 정확한 제작 과정
              <br />
              팬 여정을 함께 설계 합니다.
            </h2>

            {/* Desktop Description */}
            <p
              className="hidden md:block text-xs md:text-sm leading-relaxed max-w-2xl mx-auto mb-10"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", color: '#8B8B8B', fontWeight: 400, lineHeight: 1.5, letterSpacing: '-0.02em' }}
            >
              IP사의 세계관과 캠페인 목표에 맞춰 기획–제작–운영–리포트까지 풀 서비스를 제공합니다.
              <br />
              복잡한 기술 구현은 Pookie에게 맡기고, 팬을 위한 특별한 경험에만 집중할 수 있습니다.
            </p>

            {/* Mobile Description */}
            <p
              className="block md:hidden mx-auto mb-6"
              style={{
                maxWidth: '320px',
                fontFamily: "'Noto Sans KR', sans-serif",
                color: '#8B8B8B',
                fontWeight: 400,
                fontSize: '13px',
                lineHeight: 1.55,
                letterSpacing: '-0.03em',
                whiteSpace: 'pre-line',
                wordBreak: 'keep-all',
              }}
            >
              IP사의 세계관과 캠페인 목표에 맞춰
              {'\n'}
              기획–제작–운영–리포트까지 풀 서비스를 제공합니다.
              {'\n'}
              복잡한 기술 구현은 Pookie에게 맡기고,
              {'\n'}
              팬을 위한 특별한 경험에만 집중할 수 있습니다.
            </p>
          </div>

          {/* PC Timeline — 가로 */}
          <div className="hidden md:flex relative items-start justify-between mb-16 gap-0">
            <div className="absolute top-7 left-[16.5%] right-[16.5%] h-0.5 z-0" style={{ backgroundColor: '#0099FF' }}></div>
            {steps.map((step) => (
              <div key={step.label} className="relative z-10 flex flex-col items-center flex-1">
                <img src={step.icon} alt={step.label} className="w-14 h-14 mb-5" />
                <p
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 700, color: '#181818', letterSpacing: '-0.02em' }}
                >
                  {step.label}
                </p>
                <p
                  className="text-sm leading-relaxed max-w-xs mx-auto text-center"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", color: '#8B8B8B', fontWeight: 400, letterSpacing: '-0.02em' }}
                >
                  {step.desc[0]}
                  <br />
                  {step.desc[1]}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Timeline — 세로 */}
          <div className="flex md:hidden flex-col items-center gap-6 mb-10">
            {steps.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center">
                <img src={step.icon} alt={step.label} className="w-12 h-12 mb-3" />
                <p
                  className="text-base font-bold mb-1"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 700, color: '#181818', letterSpacing: '-0.02em' }}
                >
                  {step.label}
                </p>
                <p
                  className="text-xs leading-relaxed text-center"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", color: '#8B8B8B', fontWeight: 400, letterSpacing: '-0.02em' }}
                >
                  {step.desc[0]}
                  <br />
                  {step.desc[1]}
                </p>
                {i < steps.length - 1 && (
                  <div className="w-px h-6 mt-4" style={{ backgroundColor: '#0099FF' }}></div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <p
              className="text-sm md:text-lg font-semibold"
              style={{ color: '#0099FF', fontFamily: "'Noto Sans KR', sans-serif", letterSpacing: '-0.02em' }}
            >
              지금 바로 파트너십 문의를 시작해보세요
            </p>
            <button
              onClick={() => setIsContactOpen(true)}
              className="whitespace-nowrap px-8 md:px-10 py-2.5 md:py-3 rounded-xl font-bold text-base md:text-xl text-white hover:opacity-90 transition-all cursor-pointer"
              style={{ backgroundColor: '#0099FF', fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}