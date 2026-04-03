export default function Footer() {
  return (
    <footer className="py-8 md:py-10 px-4 md:px-6 border-t border-gray-100" style={{ background: '#f8f8f8' }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <img
          src="https://static.readdy.ai/image/38cfc5892dfd554128357063690c86c1/9ca6c04c79907e9e0ce54af502d74157.png"
          alt="Pookie"
          className="h-5 md:h-6 w-auto"
          style={{ filter: 'brightness(0) saturate(100%) invert(44%) sepia(93%) saturate(1956%) hue-rotate(181deg) brightness(101%) contrast(104%)' }}
        />
        <p
          className="text-xs md:text-sm text-gray-400"
          style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
        >
          © Stanit Corp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
