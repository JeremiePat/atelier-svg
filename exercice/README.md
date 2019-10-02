# 3. De l'orage dans l'air

Maintenant que l'on a vue les bases du dessin avec SVG il est temps de passer à la suite. Comme vous avez pu le constater, même si dessiner en SVG en codant à la main est possible ce n'est ni très facile ni très agréable. On va donc essayer de s'épargner ça au maximum en réutilisant les dessins que l'on fait pour les composer et créer facilement des sprites qu'on pourra réutiliser un peu partout.


## Les choses à savoir

### La balise `<use>`

Lorsqu'on veut réutiliser des objets graphiques, On va placer ces objets dans une balise `<defs>` et on va les afficher à l'aide de la balise `<use>`. Cette balise référence l'`id` de l'objet qu'on veut afficher via son attribut `xlink:href` et peut éventuellement le repositionner dans la `viewBox` via ses attributs `x` et `y`.

```xml
<svg viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">

  <defs>
    <circle id="myCircle" r="40" />
  </defs>

  <use xlink:href="#myCircle" x="50" y="50" />
</svg>
```

  > **NOTE :** Depuis SVG2 l'attribut `href` a été promu dans l'espace de nom SVG. Ainsi, en théorie on peut se passer de préfixer cet attribut avec l'espace de nom `xlink`. Cependant, si les navigateurs modernes comme Firefox et Chrome on bien fait le travail, le support des vieux navigateurs comme Safari 12 requiers qu'on garde encore ce préfixe.

### Les sprites SVG

La méthode là plus connue pour créer des sprites SVG consiste à utiliser le sélecteur `:target` de CSS pour afficher le sprite qui nous intéresse en passant son `id` dans l'URL du fichier :

```xml
<svg viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">

  <style>
    g { display: none }
    g:target { display: block }
  </style>

  <g id="circle">
    <circle cx="50" cx="50" r="40" />
  </g>

  <g id="square">
    <rect x="10" y="10" width="80" height="80" />
  </g>
</svg>
```

```xml
<img alt="Un cercle" src="sprites.svg#circle" />
<img alt="Un carré"  src="sprites.svg#square" />
```

## Objectif de l'exercice

Nous allons créer un jeu d'icônes météo. Pour cela, il va falloir dessiner un nuage, un soleil, de la pluie et des éclaires. Ensuite il va falloir composer ces quatre éléments graphiques pour créer les icônes suivantes :

- Ensoleillé (_sunny_)
- Éclaircie (_clear_)
- Nuageux (_cloudy_)
- Pluvieux (_rainy_)
- Orageux (_stormy_)

  > **ASTUCE :** Dessiner une forme arbitraire comme un nuage peut être intimidant mais c'est en fait assez simple : Commencez par dessiner une forme arbitraire avec des lignes droites (commande `L`) ; remplacez toutes les lignes droites par un demi-cercle (commande `A`) ; Augmentez légèrement le diamètre des cercles pour adoucir la courbure de chaque arc. Et voilà.

<details>
  <summary>le répertoire <code>exercice/code</code></summary>
  <iframe src="code"></iframe>
</details>


## C'est trop facile, je suis un roxxor de SVG !

Créez vos sprite en utilisant les _Fragment Identifiers_ de SVG et positionnez tous vos sprites sur une grille de manière a ce qu'un appel vers l'URL du fichier sans identifiant affiche tous les sprites.
