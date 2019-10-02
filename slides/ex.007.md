<!-- .slide: data-background-image="slides/img/bg/team.jpg" -->
# 7 : Travail d'équipe

<pre><code class="bash hljs" data-trim data-noescape>
git checkout ex.007
</code></pre>

Le but de cet exercice :

* Savoir positionner du texte le long d'un chemin
* Savoir manipuler les propriétés géométriques avec CSS.

---

click to reveal !

<iframe src="slides/img/fight.svg"></iframe>

[exercice/README.md](exercice/README.md)

---

## Les propriétés géométriques

Les propriétés géométriques sont les attributs SVG qui servent à positionner les formes de bases et qu'on peut désormais modifier via&nbsp;CSS :

`x`, `y`, `cx`, `cy`, `r`, `rx`, `ry`, `width`, et `height`

---

## Du text sur un chemin

Un moyen de positionner du text de manière créative consiste à faire s'écouler du text le long d'un chemin avec la balise `<textPath>`

<pre><code class="xml hljs"  data-line-numbers="2,6-7,9,10" data-trim data-noescape>
&lt;defs&gt;
  &lt;path id="myPath"
    d="M10,60 A1,1 0,1,1 90,60" /&gt;
&lt;defs&gt;

&lt;text&gt;
  &lt;textPath xlink:href="myPath"&gt;
    Ce text sera écrit le long d'un demi-cercle.
  &lt;/textPath&gt;
&lt;/text&gt;
</code></pre>

[La balise `<textPath>` sur MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/textPath)
