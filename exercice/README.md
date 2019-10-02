# 6. Au cœur de la tempête

Les animations sont une fonctionnalité au cœur de SVG, que ce soit via CSS ou via les balises d'animation, il existe moult méthodes pour donner vie à vos graphiques.


## Les choses à savoir

### Les animations CSS

Les [animations CSS][1] se définissent par un nom et un ensemble de points clés ([_keyframes_][2]):

```CSS
@keyframes changeMyColor {
  /* Au début de l'animation, la couleur est rouge */
  0%  { fill: red; }
  /* A 20% du temps d'exécution de l'animation,
     la couleur est verte */
  20% { fill: green; }
  /* 1 80% du temps d'exécution de l'animation et
     jusqu'à la fin de celle-ci, la couleur est bleue */
  80% { fill: bleu; }
  /* Entre chacun de ces points clés, la couleur
     est interpolé (mélange proportionnel de la valeur
     précédente et de la couleur suivante) */
}
```

Les animations ainsi définies sont ensuite appliquées et paramétrées via les propriétés `animation-*` ou la propriété raccourcie [`animation`][3].

```CSS
.detailed {
  /* Jouer l'animation avec le nom changeMyColor */
  animation-name: changeMyColor;
  /* L'animation va durer 1 seconde */
  animation-duration: 1s;
  /* L'animation va être jouée avec la fonction d'altération "ease" */
  animation-timing-function: ease;
  /* L'animation va démarrer immédiatement */
  animation-delay: 0s;
  /* L'animation va se répéter 3 fois */
  animation-iteration-count: 3;
  /* A la fin de l'animation l'élément restera
    dans l'état de la fin de l'animation */
  animation-fill-mode: forwards;
}

.compact {
  /* La même configuration en version raccourcie */
  animation: changeMyColor 1s ease 0s 3 forwards;
}
```

### La balise SVG `<set>`

La balise SVG [`<set>`][4], au même titre que la balise [`<animate>`][5] permet d'animer un attribut de n'importe quelle balise SVG. La différence c'est que `<animate>` va essayer de créer une interpolation entre une valeur de départ et une valeur d'arrivée, là ou `<set>` se contente juste de changer brutalement une valeur.

Par exemple, il est assez commun d'utiliser la balise `<set>` pour modifier l'attribut `class` d'un élément à l'aide d'une interaction utilisateurs. En effet, contrairement aux animations CSS, les animations SVG sont capables de réagir à leur environnement grâce à leur attribut [`begin`][6].

```xml
<rect id="myRect" width="100%" height="100%">
  <!--
  Au moment où on clique sur le rectangle myRect (begin="myRect.click")
  on modifie l'attribut class du rect en lui donnant la valeur "compact"
  -->
  <set
    attributName="class"
    to="compact"
    begin="myRect.click" />
</rect>
```

Dans l'exemple précédent, dans la mesure ou nous n'avons pas spécifié de durée (attribut `dur`) ce changement est permanent. À noter également que l'attribut `begin` permet de réagir à d'autre choses qu'aux évènements utilisateurs. Il peut réagir a des conditions de temps (pour programmer un démarrage de l'animation à une heure donnée) ou bien réagir a l'état d'autres animations. N'hésitez pas à [lire la doc][6] pour en savoir plus.


## Objectif de l'exercice

 - Créer l'animation d'un cœur qui pulse et qui se brise à la fin de la deuxième pulsation.
 - Une fois l'animation terminée, le cœur doit rester brisé.
 - L'animation doit se déclencher quand on clique sur le cœur en utilisant la balise SVG `<set>`

<details>
  <summary>le répertoire `exercice/code`</summary>
  <iframe src="code"></iframe>
</details>


## C'est trop facile, je suis un roxxor de SVG !

Faites en sorte de rejouer l'animation à chaque fois qu'on clique sur le cœur sans utiliser de JavaScript.


[1]: https://developer.mozilla.org/fr/docs/Web/CSS/Animations_CSS/Utiliser_les_animations_CSS
[2]: https://developer.mozilla.org/en-US/docs/Web/CSS/%40keyframes
[3]: https://developer.mozilla.org/fr/docs/Web/CSS/animation
[4]: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/set
[5]: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate
[6]: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/begin
