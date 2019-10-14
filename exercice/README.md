# 1. Les grilles c'est la vie

La première chose à faire quand on veut créer du SVG à la main c'est de matérialiser des repères visuels.

Pouvoir matérialiser une grille et des repères qui ne sont finalement que des lignes droites est une bonne occasion de se familiariser avec la syntaxe des `path` SVG et les principales propriétés de mise en forme.


## Les choses à savoir

[La syntaxe des `path`][1] repose sur une suite de commandes qui permettent de définir des sous-chemins particuliers : droites, courbes ou arcs.

```xml
<path d="M0,0 L100,100 H0 z" />
```

Chaque commande se matérialise par une lettre suivie de nombres séparés par des espaces ou des virgules. Les lettres sont soit en majuscule soit en minuscule. Une lettre majuscule indique que les nombres qui suivent représenteront des coordonnées absolues, là où avec une lettre minuscule ils représenteront des coordonnées relatives au dernier point de la commande précédente.

Pour créer des grilles et des repères, les commandes qui nous intéressent sont :

 - `M x,y` : déplace le point de début du tracé aux coordonnées x,y
 - `L x,y` : trace une ligne jusque au point de coordonnées x,y
 - `V y`   : trace une ligne verticale jusque au point de coordonnée y (x étant implicite)
 - `H x`   : trace une ligne horizontale jusque au point de coordonnée x (y étant implicite)

Pour en savoir plus sur ces commandes, [MDN est votre ami][1].

Par défaut les chemins sont remplis avec la couleur noire via la propriété [`fill`][2]. Si on ne veut voir que les contours il faudra utiliser la propriété [`stroke`][3] pour en spécifier la couleur et la propriété [`stroke-width`][4] pour en changer l'épaisseur.


## Objectif de l'exercice

 - créer un fichier SVG avec une `viewBox` de 100x100
 - utilisez une balise `<path>` pour créer deux repères qui scindent la `viewBox` en deux, verticalement et horizontalement
 - utiliser une autre balise `<path>` pour créer une grille de cellule de 10x10
 - appliquez un style différent à chacune de vos grilles pour pouvoir les distinguer

<details>
  <summary>le répertoire `exercice/code`</summary>
  <iframe src="code"></iframe>
</details>


## C'est trop facile, je suis un roxxor de SVG !

Essayez d'obtenir le même résultat en utilisant la balise [`<pattern>`][5]


[1]: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#LineTo_path_commands
[2]: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
[3]: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke
[4]: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width
[5]: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/pattern
