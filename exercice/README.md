# 7. Travail d'équipe

Les animations CSS et SVG ne s'exclue pas mutuellement, elles ont chacune des avantages que les autres n'ont pas. D'un côté CSS est très adapté pour animer facilement plusieurs propriétés simultanément là ou SVG est très adapté pour réagir à l'environnement et pour animer les attributs inaccessibles à CSS.

Du côté de la gestion du texte, si SVG ne sait pas gérer les retours à la ligne automatique comme HTML, il est capable de faire s'écouler le texte le long d'un chemin, ce qu'HTML est incapable de faire.


## Les choses à savoir

### Les propriétés géométriques

En SVG les propriétés géométriques sont les attributs qui permettent de contrôler le positionnement et la taille des formes de bases : `x`, `y`, `cx`, `cy`, `r`, `rx`, `ry`, `width`, et `height`

Si on les appelle « propriétés » c'est parce qu'ils peuvent être manipulés via CSS comme n'importe quelle autre propriété. L'intérêt principal étant de pouvoir les animer via CSS.

```css
@keyframes makeItCircular {
  from { rx: 0;    ry: 0     }
  to   { rx: 50px; ry: 50px; }
}

rect:target {
  width: 100px;
  height: 100px;

  /* The easiest way to turn a square into a circle */
  animation: makeItCircular 1s;
}
```

### Positionner du texte sur un chemin

Dans la mesure ou SVG traite le texte comme un objet graphique, il offre des possibilités inaccessibles à HTML. En particulier, il est possible de faire s'écouler du texte le long d'un chemin et donc de lui permettre d'épouser n'importe quelle forme arbitraire.

Pour cela, on va utiliser une balise `<path>` pour définir le chemin et ensuite le référencer avec la balise [`<textPath>`][1]. Le positionnement exact du texte sur le chemin dépendra ensuite principalement de la propriété `text-anchor` et de la valeur de l'attribut `startOffset`.

> **NOTE :** SVG2 permet aussi d'utiliser des formes de base tel que `<rect>` ou `<circle>` comme chemin de référence en plus de `<path>`. C'est pratique mais Chrome et Safari ne supportent pas encore cette fonctionnalité.

```xml
<defs>
  <path id="txtFlow" d="M10,50 A1,1 0,1,1 90,50" />
</defs>

<text text-anchor="middle">
  <textPath startOffset="50%" xlink:href="#txtFlow">
    Je m'écoule en demi-cercle
  </textPath>
</text>
```

> **ASTUCE :** Des combinaisons simples de `text-anchor` et `startOffset` permettent de garantir certains positionnements sans avoir à vous soucier de la longueur de votre texte :
> - `text-anchor:start` + `startOffset:0%` : Le texte démarre au début du chemin (ce sont les valeurs par défaut)
> - `text-anchor:middle` + `startOffset:50%` : Le texte s'écoulera a droite et à gauche du milieu du chemin (le texte est centré sur le milieu du chemin)
> - `text-anchor:end` + `startOffset:100%` : Le texte se terminera exactement à l'extrémité du chemin (le texte est « aligné à droite » sur le chemin)

Il est possible d'animer le positionnement du texte le long du chemin en animant l'attribut `startOffset`. cependant, il ne s'agit pas d'une propriété CSS et on ne peut donc pas utiliser d'animation CSS. À la place on va utiliser les animations SVG avec la balise [`<animate>`][2] qui va nous permettre d'interpoler une valeur pour un attribut.

```xml
<text text-anchor="middle">
  <textPath startOffset="50%" xlink:href="#txtFlow">
    Je m'écoule en demi-cercle
    <animate attributeName="startOffset"
      from="0%" to="50%"
      begin="0s" dur="1s" />
  </textPath>
</text>
```

## Objectif de l'exercice

  - Animez le rayon et le positionnement du cercle central de manière à ce que le cercle arrive du coin en haut à gauche, passe par le coin en bas à droite et finisse au centre.
  - Positionner le texte "La météo de l'amour" le long d'un cercle pour qu'il soit placé au-dessus du cercle central en haut à gauche
  - Animer la position et l'opacité du texte de manière à le faire apparaitre à l'instant ou le cercle central a fini sa propre animation.


<details>
  <summary>le répertoire `exercice/code`</summary>
  <iframe src="code"></iframe>
</details>


## C'est trop facile, je suis un roxxor de SVG !

Utilisez un seul cercle pour à la fois dessiner le cercle central et positionner le texte. Attention à la compatibilité Chrome/Firefox.

Si vous avez aussi roxxé sur l'exercice 5, reprenez le pattern de cœur sur l'arrière-plan.


[1]: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/textPath
[2]: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate
