
  var box = document.querySelector('.carouselbox');
  var next = box.querySelector('.next');
  var items = box.querySelectorAll('.content li');
  var counter = 0;
  var amount = items.length;
  var current = items[0];
  box.classList.add('active');

function nextSlide() {
    current.classList.remove('current');
    counter++;
    if(counter == amount) {
      counter = 0;
    }
    current = items[counter];
    current.classList.add('current');
  }

  next.addEventListener('click', function() {
    nextSlide();
  });
