<!-- .slide: data-background-image="slides/img/bg/broken-heart.jpg" -->
# 4 : Un cœur brisé

<pre><code class="bash hljs" data-trim data-noescape>
git checkout ex.004
</code></pre>

Le but de cet exercice :

* Savoir créer des _clipPath_
* Connaitre les subtilités des transformations 2D

---

<iframe src="slides/img/broken.svg"></iframe>

[exercice/README.md](exercice/README.md)

---

## Découper des formes

La balise `<clipPath>` permet de définir une forme de découpe. La propriété `clip-path` permet d'appliquer la forme de découpe à n'importe quel élément.

<pre><code class="xml hljs"  data-line-numbers="1,3,6" data-trim data-noescape>
&lt;clipPath id="myArrow"&gt;
  &lt;path d="M10,90 60,30 50,20 90,10 80,50 70,40 z" /&gt;
&lt;/clipPath&gt;

&lt;rect width="100" height="100"
      clip-path="url(#myArrow)"&gt;
</code></pre>

---

## Transformations : CSS vs. SVG

<pre class="fragment"><code class="css hljs"  data-line-numbers="2,3" data-trim data-noescape>
rect {
  transform: rotate(45deg) translate(10px,20px);
  transform-origin: 50px 50px;
}
</code></pre>

<pre class="fragment" style="vertical-align: top;"><code class="xml hljs"  data-line-numbers="3" data-trim data-noescape>
&lt;rect
  width="100" height="100"
  transform="rotate(45 50 50) translate(10,20)"
/&gt;
</code></pre>

<em class="fragment">Note : Safari 12 n'applique pas <code>transform-origin</code> sur du SVG ! (et Safari 13 l'applique… sauf sur le texte)</em>

<pre class="fragment"><code class="css hljs"  data-line-numbers="3,5" data-trim data-noescape>
rect {
  transform:
    translate(50px,50px)
    rotate(45deg) translate(10px,20px)
    translate(-50px,-50px);
}
</code></pre>

---

<!-- .slide: data-background-image="slides/img/bg/fuck.jpg" -->
## Transformations : WTF!

<pre><code class="xml hljs"  data-line-numbers="5,6,11" data-trim data-noescape>
&lt;svg viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"&gt;
&lt;style&gt;
rect {
  transform: translate(40px);
  transform-origin: 50px 50px;
}
&lt;/style&gt;

&lt;rect width="10" height="10"
      transform="rotate(45,-40,-40)" /&gt;
&lt;/svg&gt;
</code></pre>

Note:
Transform-origin et rotate se cumule (FF/Chrm)
Mais la propriété transform écrase totalement l'attribut
