const grid = document.querySelector('.grid');
var cardTemplate = document.getElementById('card-template');
var item = cardTemplate.contentEditable.cloneNode(true)

for (let i = 0; i < 10; i++) {
  grid.append(item)
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(posts => {
    grid.innerHTML = ''
    posts.forEach(post => {
      // const div = cardTemplate.contentEditable.cloneNode(true)
      item.querySelector('[data-title]').textContent = post.title
      item.querySelector('[data-body]').textContent = post.body
      
    });
  })