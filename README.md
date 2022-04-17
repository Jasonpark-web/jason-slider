# jason-slider(v0.1.0) 소개

Vanilla JavaScript로 구현한 자체개발 Slider 입니다.
간단히 요소 추가(HTML5)와 속성 변경(CSS3)만 해서 간편한 Slider를 만들어보시기 바랍니다 😉

---

# 어떻게 사용하나요?

```html
<ul class="jason-slider__wrapper">
  <li class="jason-slider__slide">
    <!-- 원하는 텍스트 컨텐츠 및 이미지-->
  </li>
</ul>
```

```css
.jason-slider__container {
  width: /*원하는 넓이(px)*/ ;
  height: /*원하는 높이(px)*/ ;
  overflow: hidden;
  position: relative;
}
```

## 1.HTML5

index.html에 있는
jason-slider\_\_slide 클래스를 가진 li 요소를 원하시는 만큼 복사 붙여넣기 하여
li 태그 안에 원하는 만큼 요소를 추가 하신 뒤 자유롭게 스타일링 해서 사용하시면 됩니다.

## 2.CSS3

jason-carousel.css에 있는
`.jason-slider__container` 속성 중
원하는 width(넓이)와 height(높이)값을 px로 부여합니다.

# 업데이트 예정사항

pagination 기능(예: 3번째 페이지 아이콘을 클릭하면 3번째 슬라이드로 이동)과
슬라이드가 자연스럽게 carousel 형태(예: 다섯 번째 슬라이드 에서 첫 번째 슬라이드로 같은 방향으로 흘러가는)로 가는
애니메이션을 업데이트 할 예정입니다.
