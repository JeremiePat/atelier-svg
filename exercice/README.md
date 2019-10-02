# 2. La saison de l'amour

Maintenant que l'on a une grille qui matérialise notre espace de travail on peut véritablement commencer à dessiner.

Pour pouvoir dessiner un peu ce que l'on veut, les lignes droites c'est bien mais un peu limité. Il va falloir apprendre à décrire des courbes. SVG propose deux grands types de courbes : Les courbes de Bézier et les arcs d'ellipse.


## Les choses à savoir

### Les courbes de Bézier

Les courbes de Bézier sont des courbes qui se définissent à l'aide d'un point de départ et d'un point d'arriver additionner de point intermédiaire (dis point d'inflexion) qui vont déformer le tracé et produire une courbe.

En théorie, il est possible de créer autant de point d'inflexion qu'on le souhaite. Cependant, en SVG il n'existe que deux types de courbes de Bézier :

- _Les courbes « quadratic »_ (avec un seul point d'inflexion).<br>
  La commande SVG pour ces courbes est : `Q Xi,Yi X,Y`. Les coordonnées `Xi,Yi` correspondent aux coordonnées du point d'inflexion de la courbe et les coordonnées `X,Y` correspondent aux coordonnées du point d'arrivée de la courbe.<br>
  Pour en savoir plus : [Quadratic Bézier Curve on MDN][1]

- _les courbes « cubic »_ (avec deux points d'inflexion).<br>
  La commande SVG pour ces courbes est : `C X1,Y1, X2,Y2 X,Y`. Les coordonnées `X1,Y1` correspondent aux coordonnées du premier point d'inflexion de la courbe, les coordonnées `X2,Y2` correspondent aux coordonnées du deuxième point d'inflexion de la courbe et les coordonnées `X,Y` correspondent aux coordonnées du point d'arrivée de la courbe.<br>
  Pour en savoir plus : [Cubic Bézier Curve on MDN][2]

  > **ASTUCE :** Sur toutes les commandes SVG, le dernier jeu de coordonnées `x,y` représente toujours le point d'arrivée du segment de courbe définie par la commande.

  > **ASTUCE :** C'est trop difficile de créer une belle courbe directement dans un éditeur de texte ? Jetez un coup d'œil à : https://mavo.io/demos/svgpath

### Les arcs de cercle

Les arcs de cercle permettent de définir des courbes qui sont des segments de cercle. C'est parfois plus simple à utiliser que des courbes de Bézier qui sont assez difficile à manipuler quand on veut rendre des formes très régulières comme des cercles ou des ellipses.

  > **INFO :** On parle d'arc de cercles par abus de langage mais en fait, il serait plus juste de parler d'arc d'ellipse car le cercle n'est qu'un cas particulier de l'ellipse

En SVG, les arcs de cercle se définissent avec la commande : `A Rx,Ry angle large-arc clockwise X,Y`.

Plus en détail :

- Les valeurs `Rx` et `Ry` correspondent aux rayons en X et en Y de l'ellipse dont on va prendre un arc (si `Rx = Ry` alors on aura un cercle).
- La valeur `angle` permet d'appliquer une rotation à l'ellipse (la valeur représente des degrés).
- La valeur `large-arc` permet de choisir si on veut dessiner le petit arc (`0`) de cercle ou le grand arc (`1`) de cercle qui passe par les deux points de départ et d'arrivée.
- La valeur `clockwise` indique si on veut que l'arc de cercle soit dessiné dans le sans des aiguilles d'une montre (`1`) ou dans le sens inverse (`0`).
- `X,Y` représente les coordonnées du point d'arrivée de l'arc de cercle.

  > **ASTUCE :** Vous voulez juste dessiner un demi-cercle et vous ne savez pas quelle est la distance entre votre point de départ et votre point d'arrivée ? Définissez tout simplement une toute petite valeur pour `Rx` et `Ry`, SVG va automatiquement ajuster le rayon de votre cercle pour que son diamètre corresponde exactement à la distance entre les deux points de départ et d'arrivée.

Pour en savoir plus : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#Elliptical_Arc_Curve


## Objectif de l'exercice

Dans un document SVG avec une viewBox de 100x100, dessiner un cœur centré dans la viewBox en utilisant deux courbes de Bézier quadratic (pour les côtés) et deux arcs de cercle (pour les deux ventricules en haut du cœur).

  > **ASTUCE :** Si vous appliquez un `stroke` un peu épais de la même couleur que le `fill` avec un `stroke-linejoin: round` vous pourrez adoucir la pointe du cœur et réduire la profondeur de la jointure entre les deux ventricules.

<details>
  <summary>le répertoire `exercice/code`</summary>
  <iframe src="code"></iframe>
</details>


## C'est trop facile, je suis un roxxor de SVG !

Essayez de dessiner un cœur sans utiliser la balise `<path>`


[1]: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#Quadratic_B%C3%A9zier_Curve
[2]: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#Cubic_B%C3%A9zier_Curve
