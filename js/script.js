window.addEventListener('load', function () {
  document.querySelector('.preloader').classList.add('opacity-0');

  setTimeout(function () {
    document.querySelector('.preloader').style.display = 'none';
  }, 2000);
});

// Portfolio Item Filter
var filter;
const filterContainer = document.querySelector('.portfolio-filter'),
  filterBtns = filterContainer.children,
  totalFilterBtn = filterBtns.length,
  portfolioItems = document.querySelectorAll('.portfolio-item'),
  totalPortfolioItem = portfolioItems.length;

for (let i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener('click', function () {
    filterContainer.querySelector('.active').classList.remove('active');
    this.classList.add('active');

    const filterValue = this.getAttribute('data-filter');
    filter = filterValue;
    if(filter=="Professional") document.getElementById("disclaimer-professional").style.display = 'block';
   else document.getElementById("disclaimer-professional").style.display = 'none'
    for (let k = 0; k < totalPortfolioItem; k++) {
      if (filterValue === portfolioItems[k].getAttribute('data-category')) {
        portfolioItems[k].classList.remove('hide');
        portfolioItems[k].classList.add('show');
      } else {
        portfolioItems[k].classList.remove('show');
        portfolioItems[k].classList.add('hide');
      }
      if (filterValue === 'all') {
        portfolioItems[k].classList.remove('hide');
        portfolioItems[k].classList.add('show');
      }
    }
  });
 
}

  


// Aside Navbar
const nav = document.querySelector('.nav'),
  navList = nav.querySelectorAll('li'),
  totalNavList = navList.length,
  allSection = document.querySelectorAll('.section'),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector('a');
  a.addEventListener('click', function () {
    // remove back section class
    removeBackSectionClass();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector('a').classList.contains('active')) {
        // add back section class
        addBackSectionClass(j);
      }
      navList[j].querySelector('a').classList.remove('active');
    }
    this.classList.add('active');
    showSection(this);

    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSectionClass() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove('back-section');
  }
}

function addBackSectionClass(num) {
  allSection[num].classList.add('back-section');
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove('active');
  }
  const target = element.getAttribute('href').split('#')[1];
  document.querySelector('#' + target).classList.add('active');
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector('a').classList.remove('active');
    const target = element.getAttribute('href').split('#')[1];
    if (
      target ===
      navList[i].querySelector('a').getAttribute('href').split('#')[1]
    ) {
      navList[i].querySelector('a').classList.add('active');
    }
  }
}

document.querySelector('.hire-me').addEventListener('click', function () {
  const sectionIndex = this.getAttribute('data-section-index');
  showSection(this);
  updateNav(this);
  removeBackSectionClass();
  addBackSectionClass(sectionIndex);
});

const navTogglerBtn = document.querySelector('.nav-toggler'),
  aside = document.querySelector('.aside');

navTogglerBtn.addEventListener('click', () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle('open');
  navTogglerBtn.classList.toggle('open');
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle('open');
  }
}

/////////////////////////////////////////////////

// Project Modal Logic
(function() {
  const modal = document.getElementById('project-modal');
  const modalImg = document.getElementById('project-modal-image');
  const modalDesc = document.getElementById('project-modal-description');
  const closeBtn = document.querySelector('.project-modal-close');
  const arrowLeft = document.querySelector('.project-modal-arrow-left');
  const arrowRight = document.querySelector('.project-modal-arrow-right');
  const modalTitle = document.getElementById('project-modal-title');
  let images = [];
  let currentIndex = 0;

  function openModal(imgArr, desc, title) {
    images = imgArr;
    currentIndex = 0;
    modalImg.src = images[0];
    modalDesc.textContent = desc;
    modalTitle.textContent = title || '';
    modal.style.display = 'flex';
    updateArrows();
  }

  function closeModal() {
    modal.style.display = 'none';
    images = [];
    currentIndex = 0;
    modalImg.src = '';
    modalDesc.textContent = '';
  }

  function updateArrows() {
    if (images.length > 1) {
      arrowLeft.style.display = currentIndex > 0 ? 'flex' : 'none';
      arrowRight.style.display = currentIndex < images.length - 1 ? 'flex' : 'none';
    } else {
      arrowLeft.style.display = 'none';
      arrowRight.style.display = 'none';
    }
  }

  function showImage(idx) {
    if (idx >= 0 && idx < images.length) {
      currentIndex = idx;
      modalImg.src = images[currentIndex];
      updateArrows();
    }
  }

  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('view-more-link')) {
      console.log('View More clicked!');
      e.preventDefault();
      const imgs = JSON.parse(e.target.getAttribute('data-images'));
      const desc = e.target.getAttribute('data-description');
      const title = e.target.getAttribute('data-title');
      openModal(imgs, desc, title);
    }
    if (e.target === modal) {
      console.log('Modal overlay clicked, closing modal');
      closeModal();
    }
    if (e.target.classList.contains('project-modal-close')) {
      console.log('Close button clicked, closing modal');
      closeModal();
    }
    if (e.target.classList.contains('project-modal-arrow-left')) {
      console.log('Left arrow clicked, currentIndex:', currentIndex);
      showImage(currentIndex - 1);
    }
    if (e.target.classList.contains('project-modal-arrow-right')) {
      console.log('Right arrow clicked, currentIndex:', currentIndex);
      showImage(currentIndex + 1);
    }
  });

  // Prevent modal click from closing when clicking inside modal
  document.querySelector('.project-modal').addEventListener('click', function(e) {
    e.stopPropagation();
  });
})();


