# Seletores

Conecta um elemento HTML com o CSS a fim de alterar o elemento

## Tipos

* Element Selector ex: p {}
    - Todos os elementos html  
* ID Selector ex: #button {}
    - Um elemento que tenha um atributo `id`
    - Cada ID devera ser unico
* Class selector ex: .box {}
    - Os elementos que contenha um atributo `class`
    - Podemos ter uma ou mais classes
* Atribute selector ex: [atributo] {}
    - Um elemento que tenha um atributo especifico
* Pseudo-class selector ex: p:hover {}
    - Elementos em um estado especifico

## Multiplos

Voce podera selecionar multiplos elementos a aplicar alguma regra css para todos eles

usamos uma separacao por virgulas para isso

```html
<h1 id="title" class="red big" title="titulo">Titulo da pagina</h1>
<p id="content" class="red big">Conteudo da pagina</p>
```

```css
h1 {
  color: blue;
  font-size: 60px;
}

p {
  color: green;
}

/* #content {
  color: orange;
}

#title {
  color: purple;
}
 */
.red {
  color: red;
}
.big {
  font-size: 3em;
}

[title] {
  color: blue;
}

p:hover, h1:hover {
  color: black;
}
```