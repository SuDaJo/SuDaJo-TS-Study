// 타입이 null이 들어올 수 있기 때문에 Narrowing을 잘 해줘야 함
let $title = document.querySelector("#title");
/* HTML 조작시 Narroing 하는 방법 5개 */
// 1.if문 처리
if ($title != null) {
    $title.innerHTML = "반갑슴다";
}
// 2. instanceof 연산자 -> 가장 많이 사용 예정
if ($title instanceof Element) {
    $title.innerHTML = "반갑슴다";
}
// 3. as 키워드 이용하기
let $asTitle = document.querySelector("#title");
// 타입을 Element로 간주해라 라는 뜻, 사용시 주의! TS사용의 의미가 사라질 수 있다.
$asTitle.innerHTML = "반갑습니다아";
// 4. Optional Chaining object에 ? 붙이기
if (($title === null || $title === void 0 ? void 0 : $title.innerHTML) != undefined) { // -> $title에 innerHTML이 있으면 출력, 없으면 undefined
    $title.innerHTML = "반갑슴다";
}
// 5. tsconfig.json에서 stricr모드 제거
// "strictNullChecks": true
let $link = document.querySelector(".link");
// $link?.setAttribute("href", "kakao.com");
if ($link instanceof HTMLAnchorElement) { //Narrowing시 주의! 맞는 타입명을 적어 줘야 함
    $link.href = "https://kakao.com";
}
/* ts가 제공하는 타입 명
Element
HTMLAnchorElement
HTMLHeadingElement
HTMLButtonElement ...
*/
// TS에서 EventListener 부착하기
// let $button = document.querySelector("#button");
// $button?.addEventListener("click", () => {
// })
/* QUIZ */
/*
(숙제1) 버튼을 누르면 이미지를 바꿔봅시다.

<img id="image" src="test.jpg">
html 안에 test.jpg를 보여주고 있는 이미지 태그가 있다고 칩시다.
이미지를 new.jpg 라는 이미지로 바꾸고 싶으면 자바스크립트 코드를 어떻게 짜야할까요?
성공여부는 크롬 개발자도구 켜면 src 속성이 잘 바뀌었는지 확인가능하겠죠?
*/
let $button = document.querySelector("#button");
let $img = document.querySelector("#image");
$button === null || $button === void 0 ? void 0 : $button.addEventListener("click", () => {
    if ($img instanceof HTMLImageElement) {
        $img.setAttribute("src", "new.jpg");
    }
});
/* (숙제2) 바꾸고 싶은 html 요소가 많습니다.

<a class="naver" href="naver.com">링크</a>
<a class="naver" href="naver.com">링크</a>
<a class="naver" href="naver.com">링크</a>
3개의 링크가 있는데 이 요소들의 href 속성을 전부 https://kakao.com으로 바꾸고 싶은 겁니다.
자바스크립트 코드를 어떻게 짜야할까요?  */
let $links = document.querySelectorAll(".naver");
$links.forEach(item => {
    if (item instanceof HTMLAnchorElement) {
        item.href = "https://kakao.com";
    }
});
