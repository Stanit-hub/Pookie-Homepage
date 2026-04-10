const valueItems = [
  {
    icon: '/icon1.png',
    label: 'Fan Experience',
    desc: "수집·해금·퀘스트가 이어지는 '플레이 가능한 굿즈' 제공",
    descMobile: "수집·해금·퀘스트가 이어지는\n'플레이 가능한 굿즈' 제공",
  },
  {
    icon: '/icon2.png',
    label: 'Revenue',
    desc: '프리미엄 디지털 혜택과 이벤트 연계로 굿즈 LTV 및 지속적 수익 창출',
    descMobile: '프리미엄 디지털 혜택과 이벤트 연계로\n굿즈 LTV 및 지속적 수익 창출',
  },
  {
    icon: '/icon3.png',
    label: 'Data',
    desc: '스캔·참여·리워드 사용까지, 카드 단위로 정교한 팬덤 데이터 축적',
    descMobile: '스캔·참여·리워드 사용까지,\n카드 단위로 정교한 팬덤 데이터 축적',
  },
  {
    icon: '/icon4.png',
    label: 'Operation',
    desc: '인프라 구축 없이 카드와 시나리오만으로 다양한 캠페인 즉시 실행',
    descMobile: '인프라 구축 없이 카드와 시나리오만으로\n다양한 캠페인 즉시 실행',
  },
];

export default function ValueSection() {
  return (
    <section
      id="value"
      className="px-4 md:px-6 relative overflow-hidden text-center flex flex-col justify-center"
      style={{ minHeight: '100vh' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/value_bg.png')",
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto w-full py-8">
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
              Why Pookie?
            </span>
          </div>

          {/* Main copy */}
          <h2
            className="text-2xl md:text-5xl mb-3 md:mb-3"
            style={{
              fontFamily: "'Noto Sans KR', sans-serif",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
            }}
          >
            포토카드 한 장이
            <br />
            팬 경험·수익·데이터를 만듭니다
          </h2>

          {/* Sub copy */}
          <p
            className="text-xs md:text-sm leading-relaxed max-w-2xl mx-auto mb-6 md:mb-6"
            style={{
              fontFamily: "'Noto Sans KR', sans-serif",
              color: '#EDF5FC',
              fontWeight: 400,
              lineHeight: 1.5,
              letterSpacing: '-0.02em',
            }}
          >
            Pookie는 포토카드를 팬과의 접점으로 바꾸는 솔루션입니다.
            <br />
            4가지 핵심 가치로 Fan-IP 생태계를 새롭게 설계합니다.
          </p>
        </div>

        {/* 4 value cards — 모바일 1열, PC 2열 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {valueItems.map((item) => (
            <div
              key={item.label}
              className="bg-white/90 backdrop-blur-sm p-4 md:p-6 flex items-center gap-4 md:gap-5 text-left"
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0"
              />
              <div style={{ minWidth: 0 }}>
                <p
                  className="text-sm md:text-base font-bold mb-0.5 md:mb-1"
                  style={{
                    fontFamily: "'Noto Sans KR', sans-serif",
                    color: '#181818',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {item.label}
                </p>

                <p
                  className="hidden md:block text-sm"
                  style={{
                    fontFamily: "'Noto Sans KR', sans-serif",
                    color: '#8A8F94',
                    fontWeight: 400,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </p>

                <p
                  className="block md:hidden text-xs"
                  style={{
                    fontFamily: "'Noto Sans KR', sans-serif",
                    color: '#8A8F94',
                    fontWeight: 400,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.5,
                    whiteSpace: 'pre-line',
                    wordBreak: 'keep-all',
                  }}
                >
                  {item.descMobile}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}