
export function get(selector) {
    return document.querySelector(selector)
}

export function getAll(selector) {
    return document.querySelectorAll(selector)
}

// function addBookmarkLogic(card) {
//     const bookmark = card.querySelector('.bookmark')
//     bookmark.addEventListener('click', (event) => {
//       event.stopPropagation()
//       bookmark.classList.toggle('bookmarked')
//     })
//   }
  