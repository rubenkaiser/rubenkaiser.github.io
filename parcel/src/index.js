import './scss/style.scss';

// menu
try {
  const navigation = document.getElementById('navigation');

  const toggleMenu = () => {
    navigation.classList.toggle('visible');
  }

  const bodyClick = () => {
    if (navigation.classList.contains('visible')) {
      navigation.classList.toggle('visible');
    }
  }

  document.body.addEventListener('click', bodyClick, true);
  document.getElementById('menuBtn').addEventListener('click', toggleMenu);
} catch (e) {
  console.error(e);
}

// eyes
try {
  const eyes = document.getElementById('eyes');

  const checkMousePosition = (e) => {
    const w = window.innerWidth;
    const x = e.screenX;

    const lookRight = x > (w/2);
    const initial = eyes.classList.length === 0;
    
    if ((eyes.classList.contains('left') || initial) && lookRight ) {
      eyes.classList.remove('left');
      eyes.classList.add('right');
    }

    if ((eyes.classList.contains('right') || initial) && !lookRight) {
      eyes.classList.remove('right');
      eyes.classList.add('left');
    }
  }

  document.addEventListener('mousemove', checkMousePosition);
} catch (e) {
  console.error(e);
}
