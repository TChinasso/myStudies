# Distancias absolutas <length>

Sao fixas e nao alteram seu valor

Unidade     Nome            Equivalencia
cm          Centimeters     1cm = 96px/24
in          Inches          1in = 2.45 cm = 96px
px          pixels          1px= 1/96th of 1in

* o mais comum e mais utilizado e o PX
* nao recomendado usar cm

# Distanciais relativas

Sao relativas a algum outro valor, pode ser o elemento pai, root ou o tamanho da tela

* Beneficios: maior adaptacao aos diferentes tipos de tela

Unidade
em              tamanho da font do pai
rem             Tamanho da font do elemento raiz
vw              1% da viewport width
vh              1% da viewport height
```css
:root {
  font-size: 24px;
}
div {
  font-size: 18px;
}
p {
/*   font-size: 3rem; */
  font-size: 3vh;
}
```