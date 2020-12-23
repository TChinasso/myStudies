## Border e outline

As bordas da caixa

- value: border-style | border-width | border-color
    - style: solid | dotted | dashed | double | groove
    | ridge | inset | outset
    - width: <length>
    - color: <color>

```css
div {
    /* Shorhand */
     border: solid 2px red;

     /* style */
     border: solid;
     
     /* width | style */
     border: 2px dotted;

     /* style | color */
    border: outset #f33;

    /* width | style | color */
    border: medium dashed green;
}
```

# e outline

- Diferente em 4 sentidos:
    - Nao modifica o tamanho da caixa, pois nao e parte do box model
    - podera ser diferente de retangular
    - nao permite ajuste individual
    - mais usado pelo user agent para acessibilidade