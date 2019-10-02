<!-- .slide: data-background-image="slides/img/bg/orage.jpg" -->
# 3 : De l'orage dans l'air !

<pre><code class="bash hljs" data-trim data-noescape>
git checkout ex.003
</code></pre>

Le but de cet exercice :

* Savoir créer des sprites SVG
* Apprendre à utiliser la balise `<use>`

---

<iframe style="width:200px; height:200px" src="slides/img/cloud.svg#sunny"></iframe>
<iframe style="width:200px; height:200px" src="slides/img/cloud.svg#mitigated"></iframe>
<iframe style="width:200px; height:200px" src="slides/img/cloud.svg#cloudy"></iframe>
<iframe style="width:200px; height:200px" src="slides/img/cloud.svg#rainy"></iframe>
<iframe style="width:200px; height:200px" src="slides/img/cloud.svg#stormy"></iframe>


[exercice/README.md](exercice/README.md)

---

## (Ab)use me.

La balise `<use>` permet de réutiliser des éléments&nbsp;graphiques

<pre><code class="xml hljs"  data-line-numbers="5-8" data-trim data-noescape>
&lt;defs&gt;
  &lt;circle id="crcl" cx="25" cy="25" r="20" /&gt;
&lt;/defs&gt;

&lt;use xlink:href="#crcl" /&gt;
&lt;use xlink:href="#crcl" x="25" y="0"  fill="#FCC" /&gt;
&lt;use xlink:href="#crcl" x="0"  y="25" fill="#CFC" /&gt;
&lt;use xlink:href="#crcl" x="25" y="25" fill="#CCF" /&gt;
</code></pre>

---

## Dans la ligne de mire

La pseudo-classe `:target` permet d'appliquer un style à l'élément ciblé par l'ancre de l'URL. C'est son usage qui permet facilement de créer des sprites SVG :

```xml
<!-- image.svg#a -->

<style>
  g { display: none; }
  g:target { display: block; }
</style>

<g id="a">
  <circle cx="50" cy="50" r="40" />
</g>

<g id="b">
  <rect width="100" height="100" />
</g>
```
