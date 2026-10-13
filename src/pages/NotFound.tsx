export default function NotFound() {
  return (
    <div
      className="min-h-[100dvh] bg-white flex justify-center"
      style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
    >
      <div className="w-full max-w-[440px] flex flex-col items-center text-center pb-16">
        <img
          src="/notfound_illust.webp"
          alt=""
          className="w-full h-auto select-none pointer-events-none"
          draggable={false}
        />
        <h1
          className="mt-[33px]"
          style={{
            fontFamily: "'Noto Sans KR', sans-serif",
            fontWeight: 700,
            fontSize: '26px',
            lineHeight: 1.36,
            letterSpacing: '-0.02em',
            color: '#000000',
            wordBreak: 'keep-all',
          }}
        >
          앗, 잘못된 주소예요
          <br />
          주소를 다시 확인해 주세요
        </h1>
        <p
          className="mt-[149px]"
          style={{
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: 1.3,
            color: '#919191',
          }}
        >
          도움이 필요하신가요?
          <br />
          <a href="mailto:hello@pookie.fan" style={{ color: 'inherit' }}>
            hello@pookie.fan
          </a>
        </p>
      </div>
    </div>
  );
}
