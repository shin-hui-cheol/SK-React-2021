/* 아래 ES5 코드를 ES6 코드로 변경합니다. ------------------------------------------------ */

const truncateText = (text, limit = 100) => {
  return `${text.slice(0, limit).trim()}...`;
};

const desc = `
  기본 매개변수(Default Paramters)는 함수 매개변수의 
  기본 값을 선언적으로 표현하는 강력한 방법입니다.
`.trim();

/* 테스트 코드를 작성합니다. ----------------------------------------------------------- */

// truncateText(desc) 반환 값의 글자 수
test('truncateText(desc) 반환 값의 글자 수', () => {
  let sliceCount = 62;
  expect(truncateText(desc, sliceCount)).toHaveLength(sliceCount + 3);
});

// truncateText(desc, 43) 반환 값의 글자 수
