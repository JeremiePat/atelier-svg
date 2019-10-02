<!-- .slide: data-background-video="slides/img/bg/thunder.webm" data-background-video-loop="true" -->
# 6 : Au cœur de la tempête

<pre><code class="bash hljs" data-trim data-noescape>
git checkout ex.006
</code></pre>

Le but de cet exercice :

* Savoir animer du SVG avec CSS
* Savoir contrôler une animation sans JS

---

click my heart !

<iframe src="slides/img/bump.svg"></iframe>

[exercice/README.md](exercice/README.md)

---

## Les animations CSS

<pre><code class="css hljs"  data-line-numbers="1-5,8" data-trim data-noescape>
@keyframes scale {
  from { transform: scale(1); }
  50%  { transform: scale(2); }
  to   { transform: scale(1); }
}

.scaleMe {
  animation: scale 500ms ease 0s Infinite;
}
</code></pre>

[Les animations CSS sur MDN](https://developer.mozilla.org/fr/docs/Web/CSS/Animations_CSS/Utiliser_les_animations_CSS)

---

## Lancer une animation CSS avec SVG

Les animations SVG peuvent êtres controlées<br> par des évènements utilisateur

<pre><code class="xml hljs"  data-line-numbers="1,4-5" data-trim data-noescape>
&lt;circle id="myCircle"
  cx="50" cy="50" r="20"&gt;

  &lt;set begin="myCircle.click" id="start"
       attributeName="class" to="scaleMe" dur="3s" /&gt;

&lt;/circle&gt;
</code></pre>

[L'attribut `begin` sur MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/begin)
