import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const noto = { fontFamily: "'Noto Sans KR', sans-serif" };

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const message = (form.querySelector('[name="message"]') as HTMLTextAreaElement)?.value || '';
    if (message.length > 500) {
      alert('문의 내용은 500자 이내로 입력해주세요.');
      return;
    }
    setSubmitting(true);
    const formData = new FormData(form);
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      params.append(key, value.toString());
    });
    try {
      await fetch('https://formspree.io/f/xreoanzo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      setSubmitted(true);
    } catch {
      // silently handle
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.45)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-3xl w-full max-w-lg mx-4 p-10 relative" style={noto}>
        {/* Close button */}
        <button
          onClick={onClose}
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
              onClick={onClose}
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
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider" style={noto}>이름 *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="홍길동"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none transition-colors"
                    style={{ ...noto, '--tw-ring-color': '#0099FF' } as React.CSSProperties}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#0099FF')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider" style={noto}>회사명 *</label>
                  <input
                    type="text"
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
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider" style={noto}>연락처 *</label>
                <input
                  type="tel"
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
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider" style={noto}>이메일 *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="hello@company.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none transition-colors"
                  style={noto}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#0099FF')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider" style={noto}>문의 내용 *</label>
                <textarea
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
