export function createButton(value) {
  const btnEl = document.createElement('button');
  btnEl.innerText = value;
  btnEl.addEventListener('click', () => {
    console.log(value);
  });
  return btnEl;
}
