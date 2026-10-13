import { useState, useEffect } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const noto = { fontFamily: "'Noto Sans KR', sans-serif" };

// 개인정보 보유 기간 (확정 후 이 문구만 수정)
const PRIVACY_RETENTION = '문의 처리 완료 후 1년';

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  // 모달이 열려 있는 동안: Esc로 닫기, 뒤 배경 스크롤 잠금
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSubmitted(false);
        setError('');
        onClose();
      }
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // 닫을 때 완료 상태를 초기화해 다음에 열면 빈 폼이 나오게 한다
  const handleClose = () => {
    setSubmitted(false);
    setError('');
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const message = (form.querySelector('[name="message"]') as HTMLTextAreaElement)?.value || '';
    if (message.length > 500) {
      setError('문의 내용은 500자 이내로 입력해주세요.');
      return;
    }
    setError('');
    setSubmitting(true);
    const formData = new FormData(form);
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      params.append(key, value.toString());
    });
    try {
      const res = await fetch('https://formspree.io/f/mojzqnqw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(`전송 실패 (${res.status}): ${data?.error || '잠시 후 다시 시도해주세요.'}`);
      }
    } catch {
      setError('네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.45)' }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-lg mx-4 p-10 relative max-h-[calc(100dvh-2rem)] overflow-y-auto"
        style={noto}
        role="dialog"
        aria-modal="true"
        aria-label="Contact Us"
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="닫기"
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
        >
          <i className="ri-close-line text-lg text-gray-600"></i>
        </button>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 gap-4">
            <div className="w-16 h-16 flex items-center justify-center rounded-full" style={{ background: 'rgba(0,153,255,0.12)' }}>
              <i className="ri-check-line text-3xl" style={{ color: '#0099FF' }}></i>
            </div>
            <p className="text-xl font-bold text-gray-900" style={noto}>문의가 접수되었습니다!</p>
            <p className="text-gray-400 text-sm text-center" style={noto}>빠른 시일 내에 담당자가 연락드리겠습니다.</p>
            <button
              onClick={handleClose}
              className="mt-4 px-8 py-3 rounded-xl text-white font-semibold transition-colors cursor-pointer whitespace-nowrap"
              style={{ background: '#0099FF', ...noto }}
            >
              닫기
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-gray-900 mb-1" style={noto}>
              Contact Us
            </h3>
            <p className="text-gray-400 text-sm mb-8" style={noto}>Pookie 파트너십 문의를 남겨주세요.</p>

            <form onSubmit={handleSubmit} data-readdy-form className="flex flex-col gap-4">
              {/* Honeypot: 봇 차단용 숨김 필드 - 사람은 건너뜀, 봇은 자동 채움 */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider" htmlFor="contact-name" style={noto}>이름 *</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    placeholder="이름"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none transition-colors"
                    style={{ ...noto, '--tw-ring-color': '#0099FF' } as React.CSSProperties}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#0099FF')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider" htmlFor="contact-company" style={noto}>회사명 *</label>
                  <input
                    type="text"
                    id="contact-company"
                    name="company"
                    required
                    placeholder="(주)회사명"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none transition-colors"
                    style={noto}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#0099FF')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider" htmlFor="contact-phone" style={noto}>연락처 *</label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  required
                  placeholder="010-0000-0000"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none transition-colors"
                  style={noto}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#0099FF')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider" htmlFor="contact-email" style={noto}>이메일 *</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  placeholder="hello@pookie.fan"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none transition-colors"
                  style={noto}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#0099FF')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider" htmlFor="contact-message" style={noto}>문의 내용 *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  maxLength={500}
                  rows={4}
                  placeholder="문의하실 내용을 입력해주세요. (500자 이내)"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none transition-colors resize-none"
                  style={noto}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#0099FF')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
                />
              </div>

              {/* 개인정보 수집·이용 동의 */}
              <div className="rounded-xl bg-gray-50 px-4 py-3 text-xs text-gray-500 leading-relaxed break-keep" style={noto}>
                <p>수집 항목: 이름, 회사명, 연락처, 이메일</p>
                <p>수집 목적: 파트너십 문의 확인 및 답변</p>
                <p>보유 기간: {PRIVACY_RETENTION}</p>
                <p className="mt-1">동의를 거부할 수 있으며, 거부 시 문의 접수가 제한됩니다.</p>
              </div>
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer break-keep" style={noto}>
                <input
                  type="checkbox"
                  name="privacy_agree"
                  value="동의"
                  required
                  className="w-4 h-4 cursor-pointer"
                  style={{ accentColor: '#0099FF' }}
                />
                [필수] 개인정보 수집·이용에 동의합니다.
              </label>

              {error && (
                <p role="alert" className="text-sm text-red-500 break-keep" style={noto}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 w-full py-4 rounded-xl text-white font-bold text-base transition-colors cursor-pointer whitespace-nowrap disabled:opacity-60"
                style={{ background: '#0099FF', ...noto }}
              >
                {submitting ? '전송 중...' : '문의 보내기'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
