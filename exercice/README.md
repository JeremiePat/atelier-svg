# 4. Un cœur brisé

Réutiliser des formes et leur appliquer des « effets spéciaux » permet de donner de la vie à vos créations. Parmi les effets les plus simples à utiliser on trouve les transformations et les « Clip Path » (Chemins de découpe).


## Les choses à savoir

### Découper des formes

Un [`<clipPath>`][1] permet de découper une forme dans une autre forme. Lorsqu'on applique un clipPath à un élément cible, tout ce qui est à l'extérieur du chemin de découpe sera effacé de l'élément cible. Dit autrement, on voit l'intersection des deux chemins.

Ainsi, dans l'exemple suivant, tout ce qui est à l'extérieur du cercle définissant le `<clipPath>` sera supprimé du rectangle sur lequel il s'applique. De cette manière on verra seulement un quart de cercle bleu (en haut à gauche).

```xml
<svg viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">

  <style>
  rect {
    fill: blue;
    clip-path: url(#myClip);
  }
  </style>

  <clipPath id="myClip">
    <circle cx="50" cy="50" r="40" />
  </clipPath>

  <rect width="50" height="50"/>
</svg>

```

  > **NOTE :** Dans le cadre de cet atelier on va se contenter de créer des `<clipPath>` dans le même espace de coordonnées que les formes que l'on découpe. Cependant, il est possible de créer des `<clipPath>` qui peuvent s'adapter à n'importe quelle cible de découpe grâce à l'attribut [`clipPathUnits="objectBoundingBox"`][2]

  > **ASTUCE :** Les `<clipPath>` peuvent être une façon simple de combiner plusieurs chemins ou formes de base pour créer une forme compliquée.

```xml
<svg viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">

  <clipPath id="myClip">
    <!--
    On pourrait faire la même chose avec 2 arcs
    de cercles mais avec deux vrais cercles
    c'est quand même beaucoup plus facile.
    -->
    <circle cx="40" cy="50" r="30" />
    <circle cx="60" cy="50" r="30" />
  </clipPath>

  <rect width="100" height="100"
        clip-path="url(#myClip)" />
</svg>
```

La limite de ce truc c'est que les propriétés `stroke-*` ne s'appliqueront pas au contour découpé mais au contour de la forme originale.


### Les transformations 2D

Peu de gens le savent mais les transformations 2D de CSS sont directement inspirées de SVG. Il est donc très courant (pour ne pas dire vivement conseillé) de les utiliser avec SVG. Les transformations 2D les plus couramment utilisées avec SVG sont :

 - [`rotate(a)`][3]
 - [`scale(sx[, sy])`][4]
 - [`skew(ax[, ay])`][5]
 - [`translate(x[, y])`][6]

Par défaut le point d'origine pour calculer les transformations est le point `0,0`. si ça ne pose pas vraiment de problème pour les `skew` et les `translate`, il faut y faire attention pour les `scale` et les `rotate`. Pour changer le point d'origine, il suffit d'utiliser la propriété CSS [`transform-origin`][7].

```xml
<svg viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg">

  <style>
    rect { transform: rotate(45deg); }

    <!--
      Le grand carré (noir) va tourner par rapport
      au coin en haut à gauche de la viewBox
      (le point de coordonnée 0,0)

      Le petit carré (rouge) va tourner sur lui-même
      (il est centré sur la viewBox aux coordonnées 50,50
      comme le point d'origine de la transformation)
    -->
    rect:nth-of-type(2) {
      fill: red;
      transform-origin: 50px 50px;
    }
  </style>

  <rect x="10" y="10" width="80" height="80" />
  <rect x="30" y="30" width="40" height="40" />
</svg>
```

  > **NOTE :** le comportement de la propriété `transform-origin` avec SVG peut être particulièrement contre-intuitif si vous utilisez les mots-clés ou les valeurs en pourcentage. Utiliser de préférence toujours des valeurs en pixels.

  > **NOTE :** Les transformations peuvent s'appliquer aussi bien via CSS que via l'attribut `transform` de SVG. Cependant méfiez-vous, pour diverses raisons historiques, [la syntaxe des fonctions de transformation de l'attribut SVG][8] diffère légèrement de la syntaxe CSS. Pour éviter toute confusion, essayez d'éviter d'utiliser l'attribut `transform`.


## Objectif de l'exercice

Réutilisez le cœur créé à l'exercice 2 et appliquez-lui un `<clipPath>` pour créer un demi-cœur brisé. Refaite la même chose pour créer l'autre demi-cœur brisé. Enfin appliquez une légère rotation à la base des deux demi-cœurs pour matérialiser la fracture.

<details>
  <summary>le répertoire <code>exercice/code</code></summary>
  <iframe src="code"></iframe>
</details>


## C'est trop facile, je suis un roxxor de SVG !

Utilisez exactement le même `<path>` pour les deux clipPath.


[1]: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath
[2]: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clipPathUnits
[3]: https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate
[4]: https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale
[5]: https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew
[6]: https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate
[7]: https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin
[8]: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#Transform_functions
