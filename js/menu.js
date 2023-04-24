const hamburguesa = document.querySelector('.hamburguesa');
const menu = document.querySelector('ul');

hamburguesa.addEventListener('click', () => {
  menu.classList.toggle('mostrar');
});
