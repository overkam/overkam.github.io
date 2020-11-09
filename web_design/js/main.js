const servicesButtons = document.querySelectorAll('.services_btn')
const modalWindow = document.querySelector('.hystmodal')
const modalTitle = document.querySelector('.hystmodal_title')
const modalImage = document.querySelector('#modal_img')
const modalClose = document.querySelector('.hystmodal_close')
const body = document.querySelector('body');

//modal window
const openService = (e) => {
  const name = e.target.id
  let title;
  let symbol;
  switch (name) {
    case 'research':
      title = 'Research'
      symbol = 'fa-search'
      break;
    case 'portfolio':
      title = 'Portfolio'
      symbol = 'fa-folder-open'
      break;
    case 'support':
      title = 'Support'
      symbol = 'fa-headphones'
      break;
    case 'documentation':
      title = 'Documentation'
      symbol = 'fa-book'
      break;
    case 'development':
      title = 'Development'
      symbol = 'fa-lightbulb-o'
      break;
    case 'design':
      title = 'Design'
      symbol = 'fa-paint-brush'
      break;
  }

  modalTitle.innerText = title
  modalImage.classList.add(symbol)
  modalWindow.style.visibility = 'visible';
  body.style.overflow = 'hidden';
}

const closeService = (e) => {
  const name = e.target.className
  if (name == 'hystmodal' || name == 'hystmodal_close' || name == 'fa fa-times-circle') {
    modalImage.classList.remove('fa-search', 'fa-folder-open', 'fa-headphones', 'fa-book', 'fa-lightbulb-o', 'fa-paint-brush')
    modalWindow.style.visibility = 'hidden';
    body.style.overflow = 'auto';
  }
}

modalWindow.addEventListener('click', closeService)

servicesButtons.forEach(e => {
  e.addEventListener('click', openService)
})

//filter works
const imagesWrapper = document.querySelector('.latest_images')
const allImages = document.querySelectorAll('.latest_img')
const webImages = document.querySelectorAll('[data-web]')
const uiImages = document.querySelectorAll('[data-ui]')
const mockImages = document.querySelectorAll('[data-mock]')


filterWorks = (e) => {
  document.querySelectorAll('.latest_img').forEach((item) => imagesWrapper.removeChild(item))
  const work = e.id
  switch (work) {
    case 'latest_btn-web':
      webImages.forEach((el) => imagesWrapper.appendChild(el))
      break
    case 'latest_btn-ui':
      uiImages.forEach((el) => imagesWrapper.appendChild(el))
      break
    case 'latest_btn-mockups':
      mockImages.forEach((el) => imagesWrapper.appendChild(el))
      break
    case 'latest_btn-all':
      allImages.forEach((el) => imagesWrapper.appendChild(el))
      break
  }
}

const latestButtons = document.querySelectorAll('.latest_btn')
let hoverButton = document.querySelector('.latest_btn:hover')
const allButton = document.querySelector('#latest_btn-all')
if (!hoverButton) {
  allButton.classList.add('latest_btn-hover');
  hoverButton = allButton;
  filterWorks(hoverButton)
}
latestButtons.forEach(e => e.addEventListener('click', () => {
  if (e != hoverButton) {
    e.classList.add('latest_btn-hover')
    hoverButton.classList.remove('latest_btn-hover')
    hoverButton = e;
  }
  filterWorks(e)
}))


// jQuery slider
$(document).ready(function () {
  $('.jSlider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 785,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
})

// windowscroll
let buttonsId = ['about_btn', 'services_btn', 'portfolio_btn', 'blog_btn', 'contact_btn', 'header-services_btn', 'header-contact_btn', 'header-about_btn']
let moveButtons = []
buttonsId.forEach((btnId) => {
  let button = document.getElementById(btnId)
  moveButtons.push(button)
})
moveButtons.forEach(e => {
  e.addEventListener('click', () => {
    move(e);
  })
})

function move(element) {
  let name = element.id
  switch (name) {
    case 'about_btn':
      document.querySelector('#about_section').scrollIntoView({block: 'start', behavior: 'smooth' })
      break;
    case 'services_btn':
      document.querySelector('#services_section').scrollIntoView({ behavior: 'smooth' })
      break;
    case 'portfolio_btn':
      document.querySelector('#portfolio_section').scrollIntoView({ behavior: 'smooth' })
      break;
    case 'blog_btn':
      document.querySelector('#blog_section').scrollIntoView({ behavior: 'smooth' })
      break;
    case 'contact_btn':
      document.querySelector('#footer_fon').scrollIntoView({ behavior: 'smooth' })
      break;
    case 'header-services_btn':
      document.querySelector('#services_section').scrollIntoView({ behavior: 'smooth' })
      break;
    case 'header-contact_btn':
      document.querySelector('#footer_fon').scrollIntoView({ behavior: 'smooth' })
      break;
    case 'header-about_btn':
      document.querySelector('#about_section').scrollIntoView({ behavior: 'smooth' })
      break;
  }
}