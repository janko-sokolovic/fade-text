import FadeText from '../fade-text';

test('fade is called', () => {
  document.body.innerHTML = '<div id="test">Hello darkness my old friend</div>';

  const fadeText = new FadeText();

  const mockFade = jest.fn();

  fadeText.fade = mockFade;

  fadeText.applyAnimation('test');

  expect(mockFade).toBeCalled();
});
