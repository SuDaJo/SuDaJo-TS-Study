let 제목 = document.querySelector('#title');
// 제목.innerHTML = '반가워요.'
// 제목이라는 변수가 union type(Element | null)이기 때문에 error
// if문으로 type narrowing 하기 
if (제목 != null) {
  제목.innerHTML = '반가워요.'
}

// 1. if (제목 != null)
// 2. if (제목 instanceof Element)
// 3. let 제목 = document.querySelector('#title') as Element;
// 4. if (제목?.innerHTML)
//   - 제목에 innerHTML이 있으면 실행
//   - 없으면 undefined 띄움
//   - if (제목?.innerHTML != undefined)