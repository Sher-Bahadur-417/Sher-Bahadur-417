// THEME TOGGLE
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  themeBtn.textContent = document.body.classList.contains('light-mode') ? '🌞' : '🌙';
});

// CALCULATOR LOGIC 
const buttons = document.querySelectorAll('.button');
const input = document.querySelector('input');

function adjustFontSize() {
  const maxLength = 12;
  const minFontSize = 16;
  const maxFontSize = 22;

  if (input.value.length > maxLength) {
    const fontSize = Math.max(maxFontSize - (input.value.length - maxLength), minFontSize);
    input.style.fontSize = `${fontSize}px`;
  } else {
    input.style.fontSize = `${maxFontSize}px`;
  }
}

input.value = '0';
input.readOnly = true;

adjustFontSize();

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'AC') input.value = '';
    else if (value === 'C') input.value = input.value.slice(0, -1);
    else if (value === '=') {
      try {
        input.value = eval(input.value);
      } catch {
        input.value = 'Error';
      }
    } else {
      input.value += value;
    }
    adjustFontSize();
  });
});
// for keyboard support
document.addEventListener('keydown', (event) => {
  if (!/^[0-9+\-*/.=%]$/.test(event.key) && 
      !['Backspace', 'Enter', 'Delete', 'Escape'].includes(event.key))
      // ignore unsupported keys
      {
    event.preventDefault();
    return;
  }
// enter key handling
  if (event.key === 'Enter') {
    const equalButton = Array.from(buttons).find(b => b.textContent === '=');
    // for = key & AC key
    if (equalButton) equalButton.click();
  } else if (event.key === 'Escape') {
    const clearButton = Array.from(buttons).find(b => b.textContent === 'AC');
    // for C key
    if (clearButton) clearButton.click();
  } else if (event.key === 'Backspace' || event.key === 'Delete') {
    const delButton = Array.from(buttons).find(b => b.textContent === 'C');
    // for Delete key
    if (delButton) delButton.click();
  } else {
    buttons.forEach(button => {
      if (button.textContent === event.key) button.click();
    });
  }
});

input.addEventListener('keydown', e => e.preventDefault());
input.addEventListener('paste', e => e.preventDefault());