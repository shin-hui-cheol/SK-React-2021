/* ES6를 사용해 함수를 작성합니다. ------------------------------------------------------ */

// 매개변수가 1개인 경우 괄호 생략 가능
// 함수가 값을 바로 반환할 경우 블록, return 키워드 생략 가능
const fibonacci = (n) =>
  n <= 0 ? 0 : n === 1 ? 1 : fibonacci(n - 2) + fibonacci(n - 1);

const numberWithComma = (n) => {
  return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

/* 테스트 코드를 작성합니다. ----------------------------------------------------------- */

// fibonacci 유틸리티
test('fibonacci 유틸리티', () => {
  // 기대되는 값 (expected)
  // 전달되는 값 (received)
  expect(fibonacci(6)).toBe(8);
  expect(fibonacci(12)).toBe(144);
  expect(fibonacci(18)).toBe(2584);
});
// fibonacci(6)    →  8
// fibonacci(12)   →  144
// fibonacci(18)   →  2584

// numberWithComma 유틸리티
test('numberWithComma 유틸리티', () => {
  expect(numberWithComma(900)).toBe('900');
  expect(numberWithComma(9900)).toBe('9,900');
  expect(numberWithComma(1398700)).toBe('1,398,700');
});
