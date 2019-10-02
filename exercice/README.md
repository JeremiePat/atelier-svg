# 5. La météo de l'amour

En SVG, le texte est un élément graphique à par entière qui doit être traité comme tel : il est utilisé en petite quantité et son esthétique prime sur tout le reste.

Il n'est donc pas rare que le texte soit la cible de beaucoup d'effets visuels, en particulier les dégradés de couleur et les filtres.


## Les choses à savoir

### Le texte en SVG

En SVG, le texte est toujours positionné de manière explicite. **Contrairement à HTML, il n'y a jamais de retour à la ligne automatique !** Le positionnement du texte ce fait donc de manière absolue à l'aide des attributs `x` et `y` des balises [`<text>`][1] et [`<tspan>`][2]. Les balises `<tspan>` peuvent aussi être utilisées pour positionner le texte de manière relative via les attributs `dx` et `dy`.

```xml
<svg viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg">

  <text y="40">
    <tspan x="10">Je suis une ligne.</tspan>
    <tspan x="10" dy="1.4em">Je suis une autre ligne.</tspan>
  </text>
</svg>
```

Ainsi, les coordonnées `x,y` d'une balise de texte définisse ce qu'on appelle son point d'encrage. Par défaut ce point d'encrage correspond à la position **à gauche** de la <i lang="en">baseline</i> de la première lettre du texte. Cependant, la propriété [`text-anchor`][3] permet de changer ça et, par exemple, lui donner la valeur `middle` permet de facilement centrer le texte horizontalement par rapport à ce point.

```xml
<svg viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg">

  <text x="50" y="30"
    text-anchor="start">Je commence au point 50,30 (défaut).</text>
  <text x="50" y="50"
    text-anchor="middle">Je suis centré sur le point 50,50.</text>
  <text x="50" y="70"
    text-anchor="end">Je finis au point 50,70.</text>
  </text>
</svg>
```

### Les dégradés SVG

SVG permet de définir 2 type de dégradés de couleurs : Les dégradés linéaires avec la balise [`<linearGradient>`][4] et les dégradés circulaire avec la balise [`<radialGradient>`][5].

Les couleurs des dégradés sont définis à l'aide de la balise [`<stop>`][6] et de ses attributs `offset` (exprimé en pourcentage est qui dit à quelle distance du début du dégradé se positionne la couleur) et `stop-color` (qui permet de définir la couleur à appliquer)

  > **ASTUCE :** L'attribut `stop-color` est aussi une propriété CSS ce qui permet d'ajuster les couleurs des dégradés via une feuille de style.

```xml
<svg viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg">

  <linearGradient id="myGradient">
    <stop offset="5%"  stop-color="#F00" />
    <stop offset="95%" stop-color="gold" />
  </linearGradient>

  <rect width="100" height="100"
  fill="url(#myGradient)"/>
</svg>
```

  > **NOTE :** Il est possible d'appliquer des transformations aux dégradés (par exemple, une rotation pour changer l'orientation d'un dégradé linéaire), mais cela se fait via l'attribut `gradientTransform` au lieu de l'attribut `transform`.

### Les filtres SVG

Les filtres SVG sont un sujet très complexe que l'on ne va pas couvrir dans cet atelier. Cependant, la primitive de filtre [`<feDropShadow>`][7] est à la fois très utile et très facile à utiliser pour créer des effets graphiques simples mais efficaces.

Un filtre se définit via la balise [`<filter>`][8] et s'applique à l'aide de la propriété [`filter`][9].

Sans rentrer dans les détails, un filtre est une succession de primitive de filtre qui en s'accumulant permettent de faire des opérations sur les pixels visibles d'un élément SVG. Un peu comme un <i lang="en">pixel shader</i> en 3D.

La primitive [`<feDropShadow>`][7], comme son nom l'indique, permet de créer une ombre portée. Et pour peu que l'on change la couleur de l'ombre (via l'attribut `flood-color`) et qu'on ne la décale pas par rapport à l'élément (via les attributs `dx` et `dy`), on obtiendra un halo. Comme en plus il est possible de les cumuler on peut facilement obtenir des effets de halo/ombre assez complexe.

```xml
<svg viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg">

  <filter id="myFilter">
    <feDropShadow stdDeviation="0.5" dx="0" dy="0" flood-color="red" />
    <feDropShadow stdDeviation="1.0" dx="0" dy="0" flood-color="maroon" />
    <feDropShadow stdDeviation="1.5" dx="0" dy="0" flood-color="black" />
  </filter>

  <circle cx="50" cx="50" r="20"
    filter="url(#myFilter)" fill="white" />
</svg>
```

  > **NOTE :** Le principal problème des filtres ce sont leurs performances catastrophiques dans tous les navigateurs. C'est particulièrement visible si vous faites des animations. Si vous les utilisez, faites-le avec beaucoup de parcimonie.


## Objectif de l'exercice

 - Créez le texte « La météo de l'amour » sur deux lignes et centrez-le dans la
   viewBox. Appliquez la fonte « Lobster » à ce texte.
 - Ajoutez un cercle derrière le texte et ajustez les couleurs du texte
   (`gold`), du cercle (`black`) et du contour du cercle (`maroon`)
 - Créez un dégradé radial (de gris très foncé à noir) et appliquez-le au
   cercle. Ajustez le dégradé de manière a ce que le dégradé soit surtout
   visible sur le contour et avec le gris au centre.
 - Créez un dégradé linéaire vertical, avec du `gold` aux extrémités et du blanc
   au milieu, et appliquez-le au texte.
 - Créez un halo sombre autour du texte en utilisant la primitive de filtre
   [`<feDropShadow>`][7]. Ajustez le halo de manière à ce qu'il soit
   rouge/marron prés du texte et noir/marron loin du texte.
 - Appliquer une transformation de type [`skew`][10] pour donner de la
   dynamique au texte.

  > **NOTE :** Safari 13 souffre d'un bug assez gênant et n'applique pas `transform-origin` sur les balises `<text>`. Pour transformer un texte, vous allez devoir l'entourez d'une balise `<g>` sur laquelle vous appliquerez votre transformation.

<details>
  <summary>le répertoire `exercice/code`</summary>
  <iframe src="code"></iframe>
</details>


## C'est trop facile, je suis un roxxor de SVG !

Appliquez une texture/motif à base de petits cœurs répétés sur le cercle en
arrière plan.


[1]: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text
[2]: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tspan
[3]: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor
[4]: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/linearGradient
[5]: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/radialGradient
[6]: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop
[7]: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDropShadow
[8]: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter
[9]: https://developer.mozilla.org/en-US/docs/Web/CSS/filter
[10]: https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew
