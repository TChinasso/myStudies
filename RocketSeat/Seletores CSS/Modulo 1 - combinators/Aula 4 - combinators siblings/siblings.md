# Adjacent sibling combinator

* Identificado pelo sinal `+` entre dois seletores
* Seleciona somente o elemento do lado direto que e irmao direto na hierarquia

```html
<h1>Titulo</h1>

<p>Paragrafo</p>

<p>Segundo paragrafo</p>

<button>Segundo</button>
<button>Segundo</button>
```
```css
h1 + p  {
  color: red;
}
button + button {
  margin-left: 10px;
}
```


## General sibling combinator

* Identificado pelo sinal `~` entre dois seletores
* Seleciona todos os elementos irmao

```css
h1 ~ p  {
  color: red;
}
```