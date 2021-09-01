// 1. numberWithComma 모듈을 불러옵니다.
import numberWithComma from './numberWithComma';
// 2. currencyKR 모듈을 "이름 내보내기"로 내보냅니다.

export const currencyKR = (n) => `${numberWithComma(n)}원`;

export const a = 'alpha';
export const b = 'beta';
