# 9. Tout ensemble ❤️

C'est l'heure de la conclusion, tout ce que vous avez appris va vous servir ici pour construire une application interactive.


## Les choses à savoir

### JavaScript

Lors de l'exercice 6 nous avons vu comment utiliser les animations SVG pour déclencher une animation CSS. C'est un petit truc très pratique mais dans la réalité, on va préférer utiliser JavaScript pour gérer les évènements.

Dans cet exercice vous devez utiliser JavaScript pour contrôler les interactions et les états de votre application. Au-delà de ça, JavaScript est très pratique pour ajouter des fonctionnalités qui n'existent pas chez CSS ou SVG. Par exemple :

  - Si CSS dispose d'une fonction `calc` ses capacités de calcul véritables sont limitées aux quatre opérations. JavaScript dispose de plus de souplesse quand il s'agit de faire des calculs plus compliqués comme des modulos ou de la trigonométrie (très fréquent avec SVG qui ne dispose pas de coordonnées polaires)
  - Ni CSS, ni SVG ne disposent d'un système de génération de nombres aléatoires, seul JavaScript peut répondre à ce genre de besoin.

C'est de ce dernier point dont vous aurez besoin pour cet exercice. La méthode [`Math.random`][1] sera bien utile pour afficher les boutons de cet exercice dans un ordre aléatoire.

### Blend Mode

Comme on l'a évoqué à l'exercice 5, les filtres SVG ne sont pas idéals : Ils sont compliqués à mettre en œuvre et leurs performances sont catastrophiques. Cependant, il est possible de créer des effets visuels très efficaces sans y recourir.

Comme on l'a vue à l'exercice 8, une utilisation créative des masques et des dégradés permet déjà de faire des choses remarquables. Si vous voulez aller encore plus loin, ajoutez-y l'utilisation de la propriété CSS [`mix-blend-mode`][2].

Cette propriété permet de définir comment deux éléments qui se superposent doivent mélanger (_blend_) la couleur de leurs pixels respectifs.

```xml
<svg viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg">

  <style>
    circle {
      mix-blend-mode: screen;
    }
  </style>

  <circle cx="50" cy="30" r="25" fill="#F00" />
  <circle cx="67" cy="60" r="25" fill="#0F0" />
  <circle cx="33" cy="60" r="25" fill="#00F" />
</svg>
```

## Objectif de l'exercice

Cet exercice consiste à reprendre tous ce qui a été fait pour créer un petit système de prédiction de votre future sentimental… ou pas.

Blague à part, il va falloir construire une application qui suit les règles suivantes :

- Un état de base qui reprend le résultat de l'exercice 5
- Un état actif (activé au click) qui reprend le résultat de l'exercice 7 avec le cœur de l'exercice 2 affiché au centre du cercle.
- Une suite de bouton qui affiche des chiffres et qui, au `click`, révèle une des icônes produites à l'exercice 3 (à chaque fois, l'icône derrière un bouton donné doit être aléatoire)
- A chaque fois qu'une icône est choisie, le cœur doit battre deux fois
- Pour chacune des 5 icônes prévoir un état différent:
  - `sunny` : Affichez des rayons lumineux qui magnifie le cœur.
  - `mitigated` : Affichez des rayons lumineux moins intense derrière le cercle central.
  - `cloudy` : Ne faites rien.
  - `rainy` : Affichez des rayons gris derrière le cercle central.
  - `stormy` : Affichez des rayons gris plus foncé derrière le cercle central, désaturez tous les éléments graphiques sauf le cœur et enfin brisez le cœur après les battements dans le même esprit que l'exercice 6.
- Après qu'un état ait été choisi, tout `click` réinitialisera l'application dans son état de base.

<details>
  <summary>le répertoire `exercice/code`</summary>
  <iframe src="code"></iframe>
</details>


## C'est trop facile, je suis un roxxor de SVG !

Si vous en êtes à cet exercice, c'est sans doute vrai 😁 alors voila le niveau caché qui va tester vos limites de développeur front hardcore : Si vous avez vu ma conférence à Paris Web 2019, vous **ne** devriez **pas** avoir toutes les informations nécessaires pour rendre cette application accessible… mais bon, vous êtes un roxxor maintenant. Bon courage ! 🤪


[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
[2]: https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode
