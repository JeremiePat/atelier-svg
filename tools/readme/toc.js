/**
 * Make IDs that are letters and dashes only, starting with a letter
 *
 * @param { Node } node A node from which we want to create an ID.
 * @return { String }
 */
function makeID (node) {
  const text = node.innerText.toLocaleLowerCase()

  return text
    // Split combined unicode glyphs into base glyphs
    .normalize('NFD')
    // We get rid of all charactère that are different than letters ans spaces
    .replace(/[^a-z ]+/g, '')
    .trim()
    // we turn spaces into dashes
    .replace(/ +/g,'-')
}

/**
 * Sanitize HTML content by using proper HTML entities.
 *
 * @param { String } txt The HTML code to sanitize
 * @param { String } wrap The wrapper for sanatized tags. Default: '&lt;$1&gt;'
 */
function sanitizeHTML (txt, wrap = '&lt;$1&gt;') {
  return txt
    .replace('&','&amp;')
    .replace(/<(.*?)>/g, wrap)
}

/**
 * Create the template string for a TOC link associated to a header element
 *
 * @param { HTMLElement } node The element to that we want to link to
 * @return { String } The resulting HTML string of an item with a link
 */
function makeItemLink(node) {
  const type  = node.nodeName.toLocaleLowerCase()
  const label = sanitizeHTML(node.innerText, '<code>&lt;$1&gt;</code>')
  const id    = makeID(node)

  node.id = id

  return `
    <li class="${type}">
      <a href="#${id}">${label}</a>
    </li>`
}

// Create the TOC when the DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  const headers = Array.from(document.querySelectorAll('h1,h2,h3'))

  document.querySelector('title').innerText = headers[0].innerText

  const html = `
    <nav>
      <ul>
        ${headers.map(makeItemLink).join('')}
      </ul>
    </nav>`

  document.body.insertAdjacentHTML('afterbegin', html);

  document.querySelector('nav').addEventListener('click', (e) => {
    if (!e.target.matches('nav')) { return }
    e.target.querySelector('a').focus();
  })
})
