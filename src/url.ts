// Node의 url 모듈 대신 브라우저 내장 URL을 쓰도록 연결하는 대체 모듈 (vite.config.ts alias)
const URLImpl = globalThis.URL;
const URLSearchParamsImpl = globalThis.URLSearchParams;

export { URLImpl as URL, URLSearchParamsImpl as URLSearchParams };
