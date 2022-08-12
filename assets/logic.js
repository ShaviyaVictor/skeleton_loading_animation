const grid = document.querySelector('.grid');
var cardTemplate = document.getElementById('card-template');
// var item = cardTemplate.contentEditable.cloneNode(true)

for (let i = 0; i < 10; i++) {
  grid.append(cardTemplate.contentEditable.cloneNode(true))
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(posts => {
    grid.innerHTML = ''
    posts.forEach(post => {
      const div = cardTemplate.contentEditable.cloneNode(true)
      div.querySelector('[data-title]').textContent = post.title
      div.querySelector('[data-body]').textContent = post.body

      grid.append(div)

    });
  })