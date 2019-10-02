<!-- .slide: data-background-image="slides/img/bg/grid.jpg" -->
# 1  : Les grilles c'est la vie

<pre><code class="bash hljs" data-trim data-noescape>
git checkout ex.001
</code></pre>

Le but de cet exercice  :

* Savoir créer un fichier SVG
* Apprendre à tracer des lignes droites

---

<iframe src="slides/img/grid.svg"></iframe>

[exercice/README.md](exercice/README.md)

---

## Créer un fichier SVG

<pre><code class="xml hljs"  data-line-numbers="2-3,11-12" data-trim data-noescape>
&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;svg viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"&gt;

  &lt;!-- Votre code SVG ici --&gt;

  &lt;line x1="10" y1="10" x2="90" y2="90" /&gt;
  &lt;path d="M10,10 L90,90" /&gt;

  &lt;path d="M20,90 V 10 L 10,20 H90 Z" /&gt;
  &lt;path d="m20,90 v-80 l-10,10 h80 z" /&gt;
&lt;/svg&gt;
</code></pre>

[La syntaxe des chemin sur MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#Path_commands)
