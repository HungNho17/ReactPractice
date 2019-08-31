/** scrip use in main.html */

const electron = require('electron');
const { ipcRenderer } = electron;
const ul = document.querySelector('ul');

ul.className = 'collection';

ipcRenderer.on('item:add', function(e, item){
  const li = document.createElement('li');
  li.className = 'collection-item';
  const itemText = document.createTextNode(item);

  li.appendChild(itemText);
  ul.appendChild(li);
});

ipcRenderer.on('item:clear', function(){
  ul.innerHTML = '';
});

ul.addEventListener('dblclick', removeItem);
function removeItem(e){
  e.target.remove();
}