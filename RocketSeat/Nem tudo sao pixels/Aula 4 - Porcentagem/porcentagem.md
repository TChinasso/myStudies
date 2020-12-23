# Porcentagem

* em muitos casos e tratado da mesma maneira que as distancias <length>
* Sempre sera relativo a algum valor

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three
    <ul>
      <li>Three A</li>
      <li>Three B
        <ul>
          <li>B A</li>
        </ul>
     </li>
    </ul>
 </li>
</ul>
```
```css
li {
  font-size: 0.8em
}
```
```html
<div></div>
```
```css
body{
  width:50%;
}
div {
  background-color: blue;
  width: 50%;
  height: 100px;
}
```