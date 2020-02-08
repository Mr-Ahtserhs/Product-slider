
window.onload = function () {
  let DOMNext = document.querySelector('#next')
  let DOMPrev = document.querySelector('#prev')
  let DOMShoes = document.querySelector('.shoes')
  let DOMInfoSection = document.querySelector('.infoSection')


  let total = DOMInfoSection.children.length;
  let currentIndex = 0;
  DOMShoes.style.height = total * 350 + 'px'

  setInterval(function() {
    currentIndex++;
    currentIndex = currentIndex % total;
    doSlide()
    }, 5000);


  function doSlide() {

    DOMShoes.style.transform = `translateY(-${currentIndex * 350}px)`;

    for (c of DOMInfoSection.children) {
      c.classList.remove('active');
    }
    DOMInfoSection.children[currentIndex].classList.add('active');

  }

  DOMNext.addEventListener('click', () => {
    currentIndex++;
    currentIndex = currentIndex % total;

    doSlide();
    
  });
  DOMPrev.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = total-1;
    
    doSlide();
  });
}





