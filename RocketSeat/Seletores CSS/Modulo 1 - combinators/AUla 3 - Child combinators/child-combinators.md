# Child combinator

* identificado pelo sinal `>` entre dois seletores
* Seleciona somente o elemento que e filho direto do pai
* Elementos depois do filho direto serao desconsiderados

```html
<body>
  <ul>
    <li>Item 1</li>
    <ul>
      <li>Item 2</li>
    </ul>
  </ul>
</body>
```
```css
body > ul > li {
  color:red;
  font-size: 40px;
}
```