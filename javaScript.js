



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

const cookingBtn = document.querySelector('.js-cooking-btn');

cookingBtn.addEventListener('click', () => {
    window.location.href = 'contact_us.html';
});



// ========== wine tasting ==========

// ===== modal window =====

const openModalBtn = document.querySelector('button[data-action="open-modal"]');
const closeModalBtn = document.querySelector('button[data-action="close-modal"]');
const backdropRef = document.querySelector('.js-backdrop');

openModalBtn.addEventListener('click', handleOpenModal);
closeModalBtn.addEventListener('click', handleCloseModal);
backdropRef.addEventListener('click', handleBackdropClick)

function handleOpenModal() {
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
