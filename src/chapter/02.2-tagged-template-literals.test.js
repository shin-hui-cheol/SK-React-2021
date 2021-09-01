// fake dom node object
const fakeNode = {
  name: 'figure',
  className: 'tagged-template-literals',
  style: { cssText: `margin:10px;color:salmon;` },
};

const styled = (styles, node) => {
  node.style.cssText = styles.reduce(
    (prevStyle, nextStyle) =>
      (prevStyle + nextStyle.trim()).replace(/\s+/g, ''),
    ''
  );
  return node;
};

// ES6
const $styled = (node) => (styles) => {
  node.style.cssText = styles.reduce(
    (prevStyle, nextStyle) =>
      (prevStyle + nextStyle.trim()).replace(/\s+/g, ''),
    ''
  );
  return node;
};

// ES5
// HOF → HOC
// eslint-disable-next-line no-unused-vars
function curringStyled(node) {
  return function innerFunction(styles /* [] */) {
    node.style.cssText = styles.reduce(
      (prevStyle, nextStyle) =>
        (prevStyle + nextStyle.trim()).replace(/\s+/g, ''),
      ''
    );
    return node;
  };
}

/* 테스트 코드를 작성합니다. ----------------------------------------------------------- */

// styled 유틸리티
describe('styled 유틸리티 suite', () => {
  beforeEach(() => {});

  test('styled 유틸리티', () => {
    const received = styled(['margin:10px;', 'color:salmon;'], fakeNode);

    expect(received.style.cssText).toBe(fakeNode.style.cssText);
  });

  test('tagged template literals : styled 유틸리티', () => {
    const received = styled`
      ${fakeNode}
      margin: 10px;
      color: salmon;
    `;

    expect(received.style.cssText).toBe(fakeNode.style.cssText);
  });

  // $styled 유틸리티
  test('$styled 유틸리티', () => {
    const received = $styled(fakeNode)`
      margin: 10px;
      color: salmon;
    `;
    expect(received).toStrictEqual(fakeNode);
  });
});
