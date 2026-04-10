export default function BrandSection() {
  return (
    <section
      id="brand"
      className="px-4 md:px-6 bg-white text-center flex flex-col justify-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="max-w-5xl mx-auto w-full py-8">
        <div className="min-h-[240px] md:min-h-[260px] flex flex-col justify-start">
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
              What is Pookie?
            </span>
          </div>

          {/* Desktop Title */}
          <h2
            className="hidden md:block text-5xl mb-4"
            style={{
              fontFamily: "'Noto Sans KR', sans-serif",
              fontWeight: 700,
              lineHeight: 1.3,
              letterSpacing: '-0.02em',
              color: '#181818',
            }}
          >
            손에 쥔 한 장의 포토카드에서
            <br />
            팬덤의 새로운 이야기가 시작됩니다.
          </h2>

          {/* Mobile Title */}
          <h2
            className="block md:hidden mx-auto mb-4"
            style={{
              maxWidth: '320px',
              fontFamily: "'Noto Sans KR', sans-serif",
              fontWeight: 700,
              fontSize: '23px',
              lineHeight: 1.35,
              letterSpacing: '-0.035em',
              color: '#181818',
              wordBreak: 'keep-all',
            }}
          >
            손에 쥔 한 장의 포토카드에서
            <br />
            팬덤의 새로운 이야기가 시작됩니다.
          </h2>

          {/* Desktop Description */}
          <p
            className="hidden md:block text-sm leading-relaxed max-w-2xl mx-auto mb-10"
            style={{
              fontFamily: "'Noto Sans KR', sans-serif",
              color: '#8B8B8B',
              fontWeight: 400,
              lineHeight: 1.5,
              letterSpacing: '-0.02em',
            }}
          >
            Pookie는 팬들이 가장 사랑하는 굿즈인 포토카드에 디지털 세계를 연결합니다.
            <br />
            포토카드 한 장으로 콘텐츠, 리워드, 데이터까지 이어지는 새로운 Fan-Tech
            인프라를 만듭니다.
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
              wordBreak: 'keep-all',
            }}
          >
            Pookie는 팬들이 가장 사랑하는 굿즈인 포토카드에
            <br />
            디지털 세계를 연결합니다.
            <br />
            포토카드 한 장으로 콘텐츠, 리워드, 데이터까지 이어지는
            <br />
            새로운 Fan-Tech 인프라를 만듭니다.
          </p>
        </div>

        {/* PC Grid */}
        <div
          className="hidden md:grid w-full overflow-hidden"
          style={{
            gridTemplateColumns: '1.3fr 0.8fr 1fr 1fr',
            gridTemplateRows: '0.9fr 1.1fr',
            gap: '10px',
            height: '420px',
          }}
        >
          <div
            className="overflow-hidden"
            style={{ gridColumn: '1', gridRow: '1 / span 2' }}
          >
            <img
              src="/brand1.png"
              alt="콘서트에서 즐기는 팬들"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div
            className="flex items-center justify-center"
            style={{
              gridColumn: '2',
              gridRow: '1',
              backgroundColor: '#EDF2F8',
            }}
          >
            <span
              className="text-2xl tracking-tight"
              style={{
                color: '#0099FF',
                fontFamily: "'Noto Sans KR', sans-serif",
                fontWeight: 500,
              }}
            >
              #팬덤
            </span>
          </div>
          <div className="overflow-hidden" style={{ gridColumn: '2', gridRow: '2' }}>
            <img
              src="/brand2.png"
              alt="야구장에서 응원하는 팬"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div
            className="overflow-hidden"
            style={{ gridColumn: '3', gridRow: '1 / span 2' }}
          >
            <img
              src="/brand3.png"
              alt="카페에서 포토카드를 즐기는 팬들"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="overflow-hidden" style={{ gridColumn: '4', gridRow: '1' }}>
            <img
              src="/brand4.png"
              alt="포토카드 클로즈업"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div
            className="flex items-center justify-center"
            style={{
              gridColumn: '4',
              gridRow: '2',
              backgroundColor: '#0099FF',
            }}
          >
            <span
              className="text-2xl tracking-tight"
              style={{
                color: '#EDF2F8',
                fontFamily: "'Noto Sans KR', sans-serif",
                fontWeight: 500,
              }}
            >
              #포토카드
            </span>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden w-full overflow-hidden flex flex-col gap-[6px]">
          {/* Mobile Top Grid: 2 : 1 */}
          <div
            className="grid w-full"
            style={{
              gridTemplateColumns: '2fr 1fr',
              gridTemplateRows: '110px 110px',
              gap: '6px',
            }}
          >
            <div
              className="overflow-hidden"
              style={{ gridColumn: '1', gridRow: '1 / span 2' }}
            >
              <img
                src="/brand1.png"
                alt="콘서트에서 즐기는 팬들"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div
              className="flex items-center justify-center"
              style={{
                gridColumn: '2',
                gridRow: '1',
                backgroundColor: '#EDF2F8',
              }}
            >
              <span
                className="text-lg tracking-tight"
                style={{
                  color: '#0099FF',
                  fontFamily: "'Noto Sans KR', sans-serif",
                  fontWeight: 500,
                }}
              >
                #팬덤
              </span>
            </div>

            <div className="overflow-hidden" style={{ gridColumn: '2', gridRow: '2' }}>
              <img
                src="/brand2.png"
                alt="야구장에서 응원하는 팬"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Mobile Bottom Grid: 1.7 : 1.3 */}
          <div
            className="grid w-full"
            style={{
              gridTemplateColumns: '1.7fr 1.3fr',
              gridTemplateRows: '104px 104px',
              gap: '6px',
            }}
          >
            <div className="overflow-hidden" style={{ gridColumn: '1', gridRow: '1' }}>
              <img
                src="/brand4.png"
                alt="포토카드 클로즈업"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div
              className="overflow-hidden"
              style={{ gridColumn: '2', gridRow: '1 / span 2' }}
            >
              <img
                src="/brand3.png"
                alt="카페에서 포토카드를 즐기는 팬들"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div
              className="flex items-center justify-center"
              style={{
                gridColumn: '1',
                gridRow: '2',
                backgroundColor: '#0099FF',
              }}
            >
              <span
                className="text-lg tracking-tight"
                style={{
                  color: '#EDF2F8',
                  fontFamily: "'Noto Sans KR', sans-serif",
                  fontWeight: 500,
                }}
              >
                #포토카드
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}