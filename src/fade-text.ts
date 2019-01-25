class FadeText {
  public applyAnimation(elementId: string) {
    const element = document.getElementById(elementId) as HTMLElement;

    element.innerHTML = this.divideLettersToSpans(element);

    this.fade();
  }

  public fade() {
    const spans = document.querySelectorAll('span[class^=anim]');

    const indexes: number[] = [];
    for (let i = 0; i < spans.length; i++) {
      indexes[i] = i;
    }

    const helperArr = this.shuffle(indexes);

    let time = 0;

    while (helperArr.length > 0) {
      const index = helperArr[0];
      (spans[index] as HTMLElement).style.transition = 'all .5s';
      time += 250;
      setTimeout(() => {
        (spans[index] as HTMLElement).style.opacity = '0';
      }, time);
      helperArr.shift();
    }
  }

  private divideLettersToSpans(element: HTMLElement) {
    const textNode = element.childNodes[0];

    if (textNode.nodeValue === null) {
      throw new Error('Element not found');
    }

    return textNode.nodeValue
      .split('')
      .map((l, i) => {
        if (l === ' ') {
          l = '&nbsp;';
        }
        return `<span class="anim-${i}">${l}</span>`;
      })
      .join('');
  }

  private shuffle<E>(a: E[]) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}

export default FadeText;
