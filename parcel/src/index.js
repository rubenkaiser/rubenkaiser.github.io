import './scss/style.scss';

const navigation = document.getElementById('navigation');

const toggleMenu = () => {
  console.log('toggle');
  navigation.classList.toggle('visible');
}

const bodyClick = () => {
  console.log('bodyclick');
  if (navigation.classList.contains('visible')) {
    navigation.classList.toggle('visible');
  }
}

document.body.addEventListener('click', bodyClick, true);
document.getElementById('menuBtn').addEventListener('click', toggleMenu);