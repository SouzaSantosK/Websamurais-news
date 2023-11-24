const emailInput = document.getElementById('email');

emailInput.addEventListener('input', function() {
  if (this.value !== '') {
    this.classList.add('notempty');
  } else {
    this.classList.remove('notempty');
  }
});
