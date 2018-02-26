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
  var section1 = document.querySelector('#section1');

  const walk = 50;
  var heading = document.querySelector('.heading');

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
    for (var n = 0; n < 50; n++) {
      var newAtom = document.createElement("div");
      newAtom.classList.add('atom');
      newAtom.style.left = Math.random() * 100 + '%';
      newAtom.style.animationDelay = Math.random() * 20 + 's';
      newAtom.style.animationDuration = 5 + (Math.random() * 10) + 's';
      document.getElementById('section1').appendChild(newAtom);
    }
  }
    


  function atomMove(e){
    
    // width & height of background
    const { offsetWidth: width, offsetHeight: height} = section1;
    // where cursor was
    let { offsetX: x, offsetY: y} = e;
    // if what you're hovering over isn't the background, add the difference
   if (this !== e.target){
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }
    
    const xWalk = Math.round((x / width * walk * 1.2) + (walk / 2));
    const yWalk = Math.round((y / height * walk * 1.2) + (walk / 2));

    console.log(xWalk, yWalk);

     var atoms = document.querySelectorAll('.atom');


    for (var z = 0; z < atoms.length; z++){
       atoms[z].style.marginLeft = `${-xWalk}px`;
     }
  }

  /* function handleOrientation(event) {
    
    var betaX = event.beta;
    var gammaY = event.gamma;

    if (betaX > 90) { betaX = 90};
    if (betaX < -90) { betaX = -90};

    betaX += 90;
    gammaY += 90;

    var atoms = document.querySelectorAll('.atom');


    for (var z = 0; z < atoms.length; z++){
       atoms[z].style.marginLeft = `${-(betaX/180)}px`;
     }

  } */

  

    buildAtom();


  /* event listeners */

  next.addEventListener('click', nextSlide);

  next.addEventListener('click', nextIndicator);

  section1.addEventListener('mousemove', atomMove);

  // window.addEventListener("deviceorientation", handleOrientation, true);




