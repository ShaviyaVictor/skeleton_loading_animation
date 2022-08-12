const grid = document.querySelector('.grid');
var cardTemplate = document.getElementById('card-template');
var item = cardTemplate.contentEditable.cloneNode(true)

for (let i = 0; i < 10; i++) {
  grid.append(item)
}