

var myButton = document.getElementById("clickButton");

myButton.addEventListener('click', doSomething, false);

function doSomething() {
	let input = document.getElementById('input');

  
  let ul = document.getElementById('list');
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);


  input.value = "";
}

document.getElementById("myForm").addEventListener("submit", doSomething);