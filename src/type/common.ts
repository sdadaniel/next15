// nextjs Error.js 의  props타입
export interface ErrorProps {
    error: Error; // 실제 에러 객체
    reset: () => void; // 에러 리셋 함수
  }