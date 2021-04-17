import wineMenu from './wineMenu.js';




// ========== header ==========

const headerBtn = document.querySelector('.js-header-btn');

headerBtn.addEventListener('click', () => {
    window.location.href = 'contact_us.html';
});





// ========== about us ==========

const aboutBtn = document.querySelector('.js-about-btn');

aboutBtn.addEventListener('click', () => {
    window.location.href = 'about_us.html';
});





// ========== cooking classes ==========

$(function () {
    $('.rev_slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        dots: true,
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 500,
        // speed: 5000,
        responsive: [
    {
      breakpoint: 1139,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        arrows: true,
        dots: true,
        slideToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        arrows: true,
        dots: true,
      }
    }
  ]
    })
})

// ===== button =====

const cookingBtn = document.querySelector('.js-cooking-btn');

cookingBtn.addEventListener('click', () => {
    window.location.href = 'contact_us.html';
});





// ========== wine tasting ==========

const wineList = document.querySelector('.wine-list')
const backdropRef = document.querySelector('.js-backdrop');
const modalImage = document.querySelector('.modal-image');
const modalTitle = document.querySelector('.modal-title');
const modalContent = document.querySelector('.modal-content');
const closeModalBtn = document.querySelector('button[data-action="close-modal"]');

wineList.addEventListener('click', handleOpenModal);
closeModalBtn.addEventListener('click', handleCloseModal);
backdropRef.addEventListener('click', handleBackdropClick);

const createItems = array => {
    array.map(arr => {
        const menuItem = document.createElement('li');
        menuItem.classList.add('col-sm-12');
        menuItem.classList.add('col-md-6');
        menuItem.classList.add('col-xl-3');
        menuItem.classList.add('wine-item');

        const imageWrap = document.createElement('div')
        imageWrap.classList.add('wine-image');
        menuItem.appendChild(imageWrap);

        const imageItem = document.createElement('img');
        imageItem.setAttribute('src', arr.image);
        imageItem.setAttribute('alt', arr.title);
        imageItem.setAttribute('id', arr.id);
        imageItem.setAttribute('data-source', arr.content);
        imageWrap.appendChild(imageItem);

        const overlay = document.createElement('div');
        overlay.classList.add('overlay-card');
        imageWrap.appendChild(overlay);

        const overlayBtn = document.createElement('button');
        overlayBtn.classList.add('overlay-btn');
        overlayBtn.setAttribute('data-action', arr.atribute);
        overlayBtn.textContent = 'read';
        overlay.appendChild(overlayBtn);

        const titleItem = document.createElement('p');
        titleItem.textContent = arr.title;
        menuItem.appendChild(titleItem);

        wineList.append(menuItem);
    });
    // console.log(wineList);
};
// createItems(wineMenu);

// ===== button =====

const wineBtn = document.querySelector('.js-wine-btn');

const itemsCount = 8;
const newArray = [];
const load = [];

const loadItems = () => {
  for (let i = 0; i < itemsCount; i += 1) {
    newArray.push(wineMenu[i]);
  };
  createItems(newArray);
};

loadItems();

wineBtn.addEventListener('click', handleLoadMore);

function handleLoadMore() {
  for (let i = itemsCount; i < wineMenu.length; i += 1) {
    load.push(wineMenu[i]);
  };
  createItems(load);
}

            

function handleOpenModal(e) {

    e.preventDefault();

    if (e.target.nodeName !== 'BUTTON') {
        return;
    };

    modalImage.src = e.target.parentNode.parentNode.firstChild.src;
    modalImage.alt = e.target.parentNode.parentNode.firstChild.alt;
    modalImage.id = e.target.parentNode.parentNode.firstChild.id;
    modalTitle.textContent = e.target.parentNode.parentNode.firstChild.alt;
    modalContent.textContent = e.target.parentNode.parentNode.firstChild.dataset.source;

    document.body.classList.add('show-modal');
    window.addEventListener('keydown', handleESCPress);

};



function handleCloseModal() {
    document.body.classList.remove('show-modal');
    window.removeEventListener('keydown', handleESCPress);
};

function handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
        handleCloseModal();
    };
};

function handleESCPress(e) {
    if(e.code === 'Escape'){
        handleCloseModal();
    };
};





// ========== happy clients ==========

$(function () {   
    $('.testimonials-list').slick({
        centerMode: false,
        centerPadding: '60px',
        slidesToShow: 1,
        dots: true,
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 500,
        // speed: 5000,
        responsive: [
    {
      breakpoint: 1139,
      settings: {
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1,
        arrows: true,
        dots: true,
        slideToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1,
        arrows: true,
        dots: true,
      }
    }
  ]
});
})






