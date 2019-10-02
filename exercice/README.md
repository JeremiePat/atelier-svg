# 8. Vas-y Johnny, fais-moi mal !

SVG est beaucoup plus malléable et subtile qu'on ne le croie souvent. Les _Custom Property_ CSS sont un ajout récent qui permettent de personnaliser très finement les composant réutilisé via la balise `<use>`. De même les `<mask>`, moins binaire que les `<clipPath>`, permettent de créer des effets de transparence assez complexe.

Dans cet exercice nous allons combiner les deux pour créer un effet de "rayon de lumière" paramétrable.

## Les choses à savoir

### CSS _Custom Properties_

Aussi (improprement) appelées variables CSS, les _Custom Properties_ permettent de créer ses propres propriétés dont on pourra lire la valeur pour la répliquer à d'autres propriétés CSS. Ces propriétés pouvant être surchargées en suivant les règles habituelles de la cascade.

Dans le cadre de SVG elles peuvent s'utiliser pour appliquer des styles aux éléments présents dans le _Shadow DOM_ des balises `<use>`. La problématique du _Shadow DOM_ c'est qu'il est impossible de cibler directement des éléments qui y sont présent. Cependant, les _Custom Properties_ permettent de remplir des "emplacements" qu'on a prévus à l'avance sur ces éléments.

```css
:root {
  /*
    C'est une bonne pratique de
    définir une valeur par défaut.
  */
  --size: 0;
}

#bar {
  width: 10px;
  height: calc(var(--size) * 10px);
  y: calc(90px - var(--size) * 10px);
  x: 10px;
}
```

```xml
<svg viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">

  <defs>
    <rect id="bar" />
  </defs>

  <rect x="5" y="5" width="90" height="90" fill="none" stroke="black" />

  <use xlink:href="#bar" x="0"  style="--size: 1;" />
  <use xlink:href="#bar" x="14" style="--size: 2;" />
  <use xlink:href="#bar" x="28" style="--size: 4;" />
  <use xlink:href="#bar" x="42" style="--size: 8;" />
  <use xlink:href="#bar" x="56" style="--size: 6;" />
  <use xlink:href="#bar" x="70" style="--size: 3.5;" />
</svg>
```

Le seul vrai défaut des _Custom Properties_ c'est qu'elles ne peuvent pas être animées via CSS ou SVG.


### Les masques SVG

Fondamentalement, un masque est une définition de transparence qui repose sur une image en niveau de gris. Chaque pixel blanc du masque représentant une opacité de 1 (opaque) et chaque pixel noir une opacité de 0 (transparent), les nuance de gris permettant d'ajuster l'opacité de chaque pixel individuel.>

> **IMPORTANT :** Il faut noter que tous les pixels transparents d'un masque sont de couleur noire (`rgba(0,0,0,0)`).

La balise SVG `<mask>` permet de définir l'image de référence en niveau gris. Ce masque sera appliqué à n'importe quel élément SVG via la propriété CSS `mask`.

Ainsi dans l'exemple suivant, le masque montre l'effet d'un dégradé qui va du blanc au noir.

```xml
<svg viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg">

  <defs>
    <linearGradient id="gradient">
      <stop offset="0%"   stop-color="white" />
      <stop offset="100%" stop-color="black" />
    </linearGradient>

    <mask id="myMask">
      <rect width="100%" height="100%" fill="url(#gradient)" />
    </mask>
  </defs>

  <rect width="100" height="100" style="mask:url(#myMask);" />
</svg>
```

Dans cet exemple, le masque fait intégralement disparaître l'élément cible (tous les pixels du masque sont noirs, peut importe l'état de leur canal alpha).

```xml
<svg viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg">

  <mask id="myMask">
    <circle cx="50" cy="50" r="20" fill="black" />
  </mask>

  <rect width="100" height="100" style="fill:green; mask:url(#myMask);" />
</svg>
```

Au contraire dans cet exemple, le masque fera apparaître un cercle (seul les pixels du cercle sont blancs).

```xml
<svg viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg">

  <mask id="myMask">
    <circle cx="50" cy="50" r="20" fill="white" />
  </mask>

  <rect width="100" height="100" style="fill:green; mask:url(#myMask);" />
</svg>
```

Enfin dans cet exemple, le masque fera un trou dans la forme cible.

```xml
<svg viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg">

  <mask id="myMask">
    <rect width="100" height="100" fill="white" />
    <circle cx="50" cy="50" r="20" fill="black" />
  </mask>

  <rect width="100" height="100" style="fill:green; mask:url(#myMask);" />
</svg>
```

> **ASTUCE :** Pour éviter toute confusion liée aux pixels transparents il est conseillé de mettre systématiquement un `<rect>` qui recouvrira tout le masque avec une valeur de l'attribut `fill` explicitement blanche ou noir.


## Objectif de l'exercice

Cet exercice consiste à créer une image SVG paramétrable qui va nous permettre d'afficher des rayons lumineux en fonction de nos besoins.

Au niveau paramètre, on doit pouvoir définir les point suivant (au niveau racine de l'image):
  - le nombre de rayons lumineux à afficher (maximum: 15)
  - la couleur des rayons
  - la couleur de l'arrière-plan visible derrière les rayons
  - L'intensité de la transparence à l'extrémité de l'image

Chaque rayon lumineux est un triangle dont un des sommets est positionné au centre de la viewBox. L'angle d'ouverture de ce sommet dépend du nombre de rayons et chaque rayon est espacé l'un de l'autre de ce même angle, ce qui permet de voir le "ciel" derrière les rayons) (par exemple, s'il y a 5 rayons lumineux, le rayon d'ouverture sera `36deg` — 180/5 et chaque rayon sera espacé de `72deg` - 2*36)

Pour générer un tel triangle _sans JavaScript_ il vous suffit de créer un masque avec deux rectangles noir par-dessus un rectangle blanc et de leur appliquer une rotation de manière à ouvrir l'angle du sommet à la valeur attendu.

L'intensité de la transparence à l'extrémité des rayons sera elle aussi réalisé à l'aide d'un masque avec un dégradé circulaire qui ira de la couleur blanche au centre a une valeur de gris à l'extrémité qui dépendra de la valeur d'opacité que l'on veut obtenir (de 0, qui sera noir, à 1, qui sera blanc, en passant par 0.x qui sera un gris proportionnel). Idéalement, ne faites démarrer ce dégradé qu'à un tiers de la distance entre le centre et l'extrémité pour que le centre reste toujours opaque quoi qu'il arrive.

Pour réussir cet exercice il faut y aller pas à pas et ne surtout pas essayer de faire tout en même temps. Par exemple :

  - Commencez par créer le dégradé de transparence paramétrable en
    l'appliquant sur un élément `<g>` qui contient un simple rectangle ;
  - Puis essayez de transformer ce même rectangle en rayon en construisant le
    masque paramétrable dont on a parlé ci-avant ;
  - ensuite multipliez les rayons et répartissez les autours du centre le la
    viewBox en fonction de leur nombre ;
  - Et enfin appliquez les couleurs.


<details>
  <summary>le répertoire `exercice/code`</summary>
  <iframe src="code"></iframe>
</details>


## C'est trop facile, je suis un roxxor de SVG !

Non, mais faut arrêter de se la raconter, hein ! C'est **déjà** un exercice de niveau roxxor. Ceci dit, si vous arrivez à réaliser cet exercice en moins de 30 min, effectivement, vous êtes un roxxor de SVG, bravo.
