function onSubmit() {
  let input = document.getElementById('input');

  
  let ul = document.getElementById('list');
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);

  input.value = ""
};

const body = document.querySelector('body');
