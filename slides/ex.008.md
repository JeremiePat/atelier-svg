<!-- .slide: data-background-image="slides/img/bg/boxeur.jpg" -->
# 8 : Vas-y Johnny, fait-moi mal !

<pre><code class="bash hljs" data-trim data-noescape>
git checkout ex.008
</code></pre>

Le but de cet exercice :

* Savoir utiliser les CSS _Custom Properties_ avec SVG
* Savoir manipuler les masques SVG

---

<iframe name="demo" src="slides/img/rays.svg" style="width:800px; height:400px"></iframe><br>
<a href="slides/img/rays.svg#" target="demo">Base</a> —
<a href="slides/img/rays.svg#sky" target="demo">Sky</a> —
<a href="slides/img/rays.svg#nuke" target="demo">Nuke</a> —
<a href="slides/img/rays.svg#evil" target="demo">Evil</a>

[exercice/README.md](exercice/README.md)

---

## Les masques SVG

Un peu comme les _clip path_ mais en plus malléable.

Ils permettent de défini une transparence basé sur une échelle en niveau de gris. Sur cette échelle, blanc représente ce qui est opaque et noir ce qui est transparent.

<pre><code class="xml hljs"  data-line-numbers="1,2,6,9" data-trim data-noescape>
&lt;mask id="myMask"&gt;
  &lt;circle cx="25" cy="25" r="20" fill="white" opacity="1" /&gt;
  &lt;circle cx="75" cy="25" r="20" fill="white" opacity=".75" /&gt;
  &lt;circle cx="25" cy="75" r="20" fill="white" opacity=".50" /&gt;
  &lt;circle cx="75" cy="75" r="20" fill="white" opacity=".25" /&gt;
&lt;mask&gt;

&lt;rect width="100%" height="100%"
  mask="url(#myMask)" /&gt;
</code></pre>

**ATTENTION :** _Sans précision supplémentaire, un pixel transparent est considéré comme noir et sera donc opaque du point de vue du masque !_

---

## CSS Custom Properties

Ce sont des propriétés personnalisé dont on peut réutiliser la valeur comme s'il s'agissait d'une variable.

```CSS
:root {
  --my-color: green;
  --fade: 0;
}

rect {
  fill: var(--my-color);
  opacity: calc(1 - var(--fade));
}

.important { --my-color: red; }
.dim { --fade: 0.5; }
```
