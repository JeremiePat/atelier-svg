
// ----------------------------------------------------------------------------
// Parce qu'on a aussi le droit de se rendre la vie un peu plus facile

Element.prototype.on  = Element.prototype.addEventListener
Element.prototype.off = Element.prototype.removeEventListener
Element.prototype.one = function one (evtName, callback) {
  const fn = (...args) => {
    callback.call(this, ...args)
    this.off(evtName, fn)
  }

  this.on(evtName, fn)
}


// ----------------------------------------------------------------------------
// Non seulement on est sur que notre DOM et chargé et utilisable
// mais en plus on n'expose rien dans le scope global, que du bon.

window.addEventListener('DOMContentLoaded', () => {
  // Tous les elements DOM que l'on va manipuler
  const ROOT  = document.rootElement
  const BOARD = document.querySelector('#board')
  const BTN   = Array.from(document.querySelectorAll('.button'))

  // On va concentrer toute notre logique ici
  const game = {
    start () {
      // Randomize our button order
      const indexes = [1,2,3,4,5].sort(() => Math.random() < 0.5 ? 1 : -1)

      BTN.forEach((btn, i) => {
        const index = indexes[i]
        btn.classList.remove('b1','b2','b3','b4','b5')
        btn.classList.add(`b${index}`)
        btn.querySelector('text').textContent = index
      })

      // On passe dans l'état actif
      ROOT.setAttribute('class', 'run')
    },

    end () {
      // On reviens à l'état initial
      ROOT.setAttribute('class', 'idle')

      // Et on peu rcommencer
      BOARD.one('click', game.start)
    },

    button (e) {
      // S'il y a plus d'une classe à la racine
      // c'est qu'on est dans l'état terminé
      if (ROOT.classList.length > 1) { return }

      let btn = e.target
      while (btn && !btn.matches('.button')) {
        btn = e.target.parentNode
      }

      const cls = Array.from(btn.classList).filter(c => c !== 'button')

      // On passe dans l'état terminé qui correspond a l'icone du bouton
      ROOT.classList.add('done', ...cls)

      e.stopPropagation()
      ROOT.one('click', game.end)
    }
  }

  // Nos éléments interactifs principaux
  BTN.forEach(btn => btn.on('click', game.button))

  // Et c'est parti...
  BOARD.one('click', game.start)
})
