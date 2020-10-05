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
}*/
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
const movePosition = slidesToScroll * itemWidth
console.log(itemWidth)

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