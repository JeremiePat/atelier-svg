<!-- .slide: data-background-image="slides/img/bg/vector-love.jpg" -->
# 2 : La saison de l'amour

<pre><code class="bash hljs" data-trim data-noescape>
git checkout ex.002
</code></pre>

Le but de cet exercice :

* Apprendre à tracer des courbes de Bézier
* Apprendre à tracer des arcs de cercle

---

<iframe src="slides/img/love.svg"></iframe>

[exercice/README.md](exercice/README.md)

---

## Les courbes de Bézier

SVG propose deux types de [courbes de Béziers](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#Cubic_B%C3%A9zier_Curve)

<pre><code class="xml hljs"  data-trim data-noescape>
&lt;path d="M10,10 Q10,90 90,90" /&gt;
&lt;path d="M10,10 C10,65 35,90 90,90" /&gt;
</code></pre>

![Examples de courbes de Bézier](slides/img/curves.svg)

---

<!-- .slide: data-background-image="slides/img/bg/fear.jpg" -->
## Les arcs d'ellipse

C'est moins compliqué qu'on ne le crois:

`A rx ry angle large-arc clockwise x y`

<pre><code class="xml hljs"  data-trim data-noescape>
&lt;path d="M100,30 A40,40 0 0,1 100,70" /&gt;
&lt;path d="M100,30 A40,40 0 1,1 100,70" /&gt;
&lt;path d="M100,30 A40,40 0 0,0 100,70" /&gt;
&lt;path d="M100,30 A40,40 0 1,0 100,70" /&gt;
</code></pre>

![Examples d'arcs de cercles](slides/img/arc.svg)<!-- .element: height="350" -->
