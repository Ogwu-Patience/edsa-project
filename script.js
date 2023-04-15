const form = document.querySelector('.form');
const innerdiv = document.querySelector('.innerdiv');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const inputs = document.querySelectorAll('.input');
  let output = '';

  for (let input of inputs) {
    const value = input.value;
    const charCount = value.length;
    const wordCount = value.split(' ').filter((word) => word !== '').length;
    const reverseString = value.split('').reverse().join('');
    const upperCaseString = value.toUpperCase();
    const lowerCaseString = value.toLowerCase();

    output += `
      <p>Input value: ${value}</p>
      <ul>
        <li>Number of characters: ${charCount}</li>
        <li>Number of words: ${wordCount}</li>
        <li>Reversed string: ${reverseString}</li>
        <li>Uppercase string: ${upperCaseString}</li>
        <li>Lowercase string: ${lowerCaseString}</li>
      </ul>
    `;
  }

  innerdiv.innerHTML = output;
});