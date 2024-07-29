document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#controls input');
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }


  function createBoxes(amount) {
    const elements = [];
    for (let i = 0; i < amount; i++) {
      const size = 30 + i * 10; 
      const div = document.createElement('div');
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      elements.push(div);
    }
    boxesContainer.append(...elements);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }


  createButton.addEventListener('click', () => {
    const amount = parseInt(input.value, 10);
    if (amount >= 1 && amount <= 100) {
      destroyBoxes(); 
      createBoxes(amount); 
    }
    input.value = ''; 
  });


  destroyButton.addEventListener('click', destroyBoxes);
});


