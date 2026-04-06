import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HeroNew.css';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 49; // 0 ~ 48
const MOBILE_BREAKPOINT = 768;

export default function HeroNew() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameIndexRef = useRef({ value: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
    const frameBasePath = isMobile ? '/frames/mobile' : '/frames/desktop';

    const currentFrame = (index: number) =>
      `${frameBasePath}/pookie_frames_${index}.webp`;

    // 캔버스 크기 설정
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // 이미지를 cover 방식으로 캔버스에 그리기
    const render = () => {
      const img = images[frameIndexRef.current.value];
      if (!img || !img.complete) return;

      context.clearRect(0, 0, canvas.width, canvas.height);

      const cW = canvas.width;
      const cH = canvas.height;
      const iW = img.naturalWidth || img.width;
      const iH = img.naturalHeight || img.height;
      const scale = Math.max(cW / iW, cH / iH);
      const drawW = iW * scale;
      const drawH = iH * scale;
      const drawX = (cW - drawW) / 2;
      const drawY = (cH - drawH) / 2;

      context.drawImage(img, drawX, drawY, drawW, drawH);
    };

    // 이미지 프리로드
    const images: HTMLImageElement[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      if (i === 0) {
        img.onload = () => render();
      }
      images.push(img);
    }
    imagesRef.current = images;

    // GSAP ScrollTrigger로 프레임 인덱스 제어
    const ctx = gsap.context(() => {
      gsap.to(frameIndexRef.current, {
        value: FRAME_COUNT - 1,
        snap: 'value',
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
        },
        onUpdate: render,
      });
    });

    // 리사이즈 대응
    const handleResize = () => {
      setCanvasSize();
      render();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-frame-container">
      <canvas ref={canvasRef} className="hero-frame-canvas" />
    </div>
  );
}