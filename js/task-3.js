const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function() {
    const name = this.value.trim();

    if (name) {
        nameOutput.textContent = name;
    } else {
        nameOutput.textContent = 'Anonymous'
    }
});