function onSubmit() {
  let input = document.getElementById('input');

  
  let ul = document.getElementById('list');
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);

  input.value = ""
};

const body = document.querySelector('body');

for(let i = 1; i <= 100; i++) {
  let p = document.createElement('p');
  if(i % 3 === 0 && i % 5 === 0) {
    p.textContent = 'FizzBuzz';
  } else if(i % 3 === 0) {
    p.textContent = 'Fizz';
  } else if(i % 5 === 0) {
    p.textContent = 'Buzz';
  } else {
    p.textContent = i;
  }
  body.appendChild(p);
}