# Combinadores

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilizacao

## Descendant combinatio

* Identificado por um espaco entre os dois seletores
* Busca um elemento dentro de outro

```html
<body>
  <article>
    <h2>TITULO</h2>
  </article>
  <h2>Titulo fora do article</h2>
</body>
```
```css
body article h2{
  color:red;
  font-size: 40px;
}
```