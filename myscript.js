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
  var section1 = document.querySelector('.section1');




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


  function buildAtom() {
    for (var n = 0; n < 10; n++) {
      var newAtom = document.createElement("div");
      newAtom.classList.add('atom');
      
      newAtom.style.left = Math.random() * 100 + '%';
      var delay = Math.random() * 5;
      newAtom.style.animationDelay = delay + 's';
      var duration = Math.random() * 10;
      newAtom.style.animationDuration = duration + 's';
      document.getElementById('section1').appendChild(newAtom);
      var overall = delay + duration;
    }
    setTimeout(buildAtom, 10000);
 
  }

  /* event listeners */

  next.addEventListener('click', function() {
    nextSlide();
  });

next.addEventListener('click', function() {
    nextIndicator();
  });

  buildAtom();

