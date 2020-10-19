/*let buttonsId = ['about_btn', 'about_btn-arrow']

buttonsId.forEach((btnId) => {
  let button = document.getElementById(btnId)
  console.log(button)
  let buttonCoords = button.getBoundingClientRect();
  console.log(buttonCoords)
  button.addEventListener('click', move(buttonCoords))
})

function move(coords) {
  window.scrollTo({
    top: coords.top,
    behavior: "smooth"
  });
}
let position = 0;
const slidesToShow = 3;
const slidesToScroll = 3;
const container = document.querySelector('.slider_container');
const track = document.querySelector('.slider_track');
const items = document.querySelectorAll('.team_item');
const btnPrev = document.querySelector('.btn_prev');
const btnNext = document.querySelector('.btn_next');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`
})

btnNext.addEventListener('click', () => {
  const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  
  setPosition();
  checkBtns();
})

btnPrev.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth;

  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  
  setPosition();
  checkBtns();
})

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`
}

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
}

checkBtns();
*/

//modal window
const servicingButtons = document.querySelectorAll('.services_btn');
const servicingPage = document.querySelector('.hystmodal');
const modalTitleElem = document.querySelector('.hystmodal_title');
const modalImgElem = document.querySelector('#modal_img'); 

const closeServicingPage = (e) => {
  const target = e.target.classList
  console.log(target);
  if (target == 'hystmodal' || target == 'hystmodal_close'|| target == 'fa fa-times-circle') {
    modalImgElem.classList.remove('fa-search', 'fa-folder-open',
        'fa-headphones', 'fa-book', 'fa-lightbulb-o', 'fa-paint-brush');
    servicingPage.style.visibility = 'hidden'
  }

}

const showServicingPage = (e) => {
  const name = e.target.id
  switch (name) {
    case 'research':
      title = 'Research';
      symbol = 'fa-search';
      break
    case 'portfolio':
      title = 'Portfolio';
      symbol = 'fa-folder-open';
      break
    case 'support':
      title = 'Support';
      symbol = 'fa-headphones';
      break
    case 'documentation':
      title = 'Documentation';
      symbol = 'fa-book';
      break
    case 'development':
      title = 'Development';
      symbol = 'fa-lightbulb-o';
      break
    case 'design':
      title = 'Design';
      symbol = 'fa-paint-brush';
      break
  }

  modalImgElem.classList.add(symbol);
  modalTitleElem.textContent = title;
  servicingPage.style.visibility = 'visible';
}

servicingButtons.forEach(item => {
  item.addEventListener('click', showServicingPage);
});

servicingPage.addEventListener('click', closeServicingPage);

// jQuery slider
$(document).ready(function () {
  $('.jSlider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
  });
})
