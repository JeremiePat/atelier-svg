<!-- .slide: data-background-image="slides/img/bg/diners.jpg" -->
# 5 : La météo de l'amour

<pre><code class="bash hljs" data-trim data-noescape>
git checkout ex.005
</code></pre>

Le but de cet exercice :

* Savoir manipuler du texte
* Savoir créer des dégradés (et des filtres)

---

<iframe src="slides/img/meteo.svg"></iframe>

[exercice/README.md](exercice/README.md)

---

## La gestion du texte

Le texte en SVG est très différent du texte en HTML

* Il est (quasiment) toujours positionné de manière absolue
* Il n'y a jamais de retour à la ligne automatique

Le texte se manipule via les balises [`<text>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text) et [`<tspan>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tspan)

<pre><code class="xml hljs"  data-line-numbers="1,2,5,6,8,9" data-trim data-noescape>
&lt;text&gt;
  &lt;tspan x="10" y="20"&gt;
    Ceci est une seule
    ligne de texte
  &lt;/tspan&gt;
  &lt;tspan x="10" dy="1.5em"&gt;
    et ceci une autre ligne.
  &lt;/tspan&gt;
&lt;/text&gt;
</code></pre>

---

## Le filtre le plus facile à faire

La primitive de filtre la plus facile à utiliser est [`<feDropShadow />`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDropShadow)

<pre><code class="xml hljs"  data-line-numbers="2-4" data-trim data-noescape>
&lt;filter id="myFilter"&gt;
  &lt;feDropShadow
    dx="2" dy="2" stdDeviation="0.5"
    flood-color="darkblue" /&gt;
&lt;/filter&gt;
</code></pre>
