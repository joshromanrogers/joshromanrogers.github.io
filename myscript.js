  /* variables */

  var box = document.querySelector('.carouselbox');
  var next = box;
  var items = box.querySelectorAll('.content li');
  var counter = 0;
  var amount = items.length;
  var current = items[0];
  box.classList.add('active');

  var indicators = document.querySelectorAll('.indicatorItem');
  var currentIndicator = indicators[0];



  /* functions */

  function nextSlide() {
    current.classList.remove('current');
    counter++;
    if(counter == amount) {
      counter = 0;
    }
    current = items[counter];
    current.classList.add('current');
  }

  function nextIndicator() {
    currentIndicator.classList.remove('active');
    currentIndicator = indicators[counter];
    currentIndicator.classList.add('active');
  }

  /* event listeners */

  next.addEventListener('click', function() {
    nextSlide();
  });

next.addEventListener('click', function() {
    nextIndicator();
  });
