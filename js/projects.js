const project1Items = document.querySelectorAll('.project1') ,
  totalProject1Items = project1Items.length;


var projectnumber = 0 ;

// Portfolio Lightbox
const lightbox = document.querySelector('.lightbox'),
  lightboxImg = lightbox.querySelector('.lightbox-img'),
  lightboxClose = lightbox.querySelector('.lightbox-close'),
  lightboxText = lightbox.querySelector('.caption-text'),
  lightboxCounter = lightbox.querySelector('.caption-count'),
  lightboxdescription = lightbox.querySelector('.description');
var itemIndex = 0;//projectcount = lightbox.querySelector('.counter');
var s="";

function toggleLightbox() {
  lightbox.classList.toggle('open');
}

function nextItem() {
  if (projectnumber == 1 )   
     nextItem1();
  if(projectnumber == 2) nextItem2();

  if(projectnumber == 3) nextItem3();

  if(projectnumber == 4) nextItem4();

  if(projectnumber == 5) nextItem3();
  if(projectnumber == 6) nextItem3();
  if(projectnumber == 7) nextItem3();
  if(projectnumber == 8) nextItem3();
  if(projectnumber == 9) nextItem3();
  if(projectnumber == 10) nextItem3();

  
}

function prevItem() {
  if(projectnumber == 1) prevItem1();
  if(projectnumber == 2) prevItem2();
  if(projectnumber == 3) prevItem1();
  if(projectnumber == 4) prevItem1();
  if(projectnumber == 5) prevItem1();

}

function prevItem1() {
  if (itemIndex === 0) {
    itemIndex = totalProject1Items - 1;
  } else {
    itemIndex--;
  }
 changeItem1();
}

function prevItem2() {
  if (itemIndex === 0) {
    itemIndex = totalProject2Items - 1;
  } else {
    itemIndex--;
  }
 changeItem2();
}

// function nextItem1() {
//   if (itemIndex === totalProject1Items - 1) {
//     itemIndex = 0; 
//   } else {
//     itemIndex++; 
    
//   }
//  changeItem1();
// }



for (let i = 0; i < totalProject1Items; i++) {
  project1Items[i].addEventListener('click', function () {
    itemIndex = i;
    changeItem1();
    projectnumber = 1;
    toggleLightbox();
  });
}



function nextItem1() {
  if (itemIndex === totalProject1Items - 1) {
    itemIndex = 0; 
  } else {
    itemIndex++; 
    
  }
 changeItem1();
}


function changeItem1() {
  imgSrc = project1Items[itemIndex]
    .querySelector('img')
    .getAttribute('src');
    
  lightboxImg.src = imgSrc;
  
   projectnumber = 1
   lightboxText.innerHTML = 'Social Media application'
   lightboxCounter.innerHTML = itemIndex + 1 + ' of ' + totalProject1Items;

  if( itemIndex == 0){
    document.querySelector('.description').innerHTML='mern stack app';
  }

  if( itemIndex == 1){
    document.querySelector('.description').innerHTML='users can post';
  }

  if( itemIndex == 2){
    document.querySelector('.description').innerHTML='follow unfollow feature';
  }

  if( itemIndex == 3){
    document.querySelector('.description').innerHTML='super admin';
  }


}



 
const project2Items = document.querySelectorAll('.project2') ,
   totalProject2Items = project2Items.length;

for (let j = 0; j < totalProject2Items; j++) {
    project2Items[j].addEventListener('click', function () {
      itemIndex = j;
      changeItem2();
      toggleLightbox();
    });
  }
  
function changeItem2() {
    imgSrc = project2Items[itemIndex]
      .querySelector(':nth-child(n) img')
      .getAttribute('src');
      
      
    lightboxImg.src = imgSrc;
    
    projectnumber = 2;
   lightboxText.innerHTML = 'weather application'
   lightboxCounter.innerHTML = itemIndex + 1 + ' of ' + totalProject2Items;

  if( itemIndex == 0){
    document.querySelector('.description').innerHTML='mern stack app';
  }

  if( itemIndex == 1){
    document.querySelector('.description').innerHTML='see real time weather info';
  }

  if( itemIndex == 2){
    document.querySelector('.description').innerHTML='celsius feature';
  }

 
    
  }


  function nextItem2() {
    if (itemIndex === totalProject2Items - 1) {
      itemIndex = 0;
    } else {
      itemIndex++;
    }
   changeItem2();
  }

  const project3Items = document.querySelectorAll('.project3') ,
   totalProject3Items = project3Items.length;

for (let j = 0; j < totalProject3Items; j++) {
    project3Items[j].addEventListener('click', function () {
      itemIndex = j;
      changeItem3();
      toggleLightbox();
    });
  }
  
function changeItem3() {
    imgSrc = project3Items[itemIndex]
      .querySelector(':nth-child(n) img')
      .getAttribute('src');
      
      
    lightboxImg.src = imgSrc;
    
    projectnumber = 3;
   lightboxText.innerHTML = 'social media application'
   lightboxCounter.innerHTML = itemIndex + 1 + ' of ' + totalProject3Items;

  if( itemIndex == 0){
    document.querySelector('.description').innerHTML='mern stack app';
  }

  if( itemIndex == 1){
    document.querySelector('.description').innerHTML='MERN stack applicatiHas features like signup,signin users,delete user.Create,delete,update posts.Follow and unfollow , who to follow users';
  }

 
    
  }


  function nextItem3() {
    if (itemIndex === totalProject3Items - 1) {
      itemIndex = 0;
    } else {
      itemIndex++;
    }
   changeItem3();
  }

// project 4

  const project4Items = document.querySelectorAll('.project4') ,
   totalProject4Items = project4Items.length;

for (let j = 0; j < totalProject4Items; j++) {
    project4Items[j].addEventListener('click', function () {
      itemIndex = j;
      changeItem4();
      toggleLightbox();
    });
  }
  
function changeItem4() {
    imgSrc = project4Items[itemIndex]
      .querySelector(':nth-child(n) img')
      .getAttribute('src');
      
      
    lightboxImg.src = imgSrc;
    
    projectnumber = 4;
   lightboxText.innerHTML = 'social media application'
   lightboxCounter.innerHTML = itemIndex + 1 + ' of ' + totalProject4Items;

  if( itemIndex == 0){
    document.querySelector('.description').innerHTML='mern stack app';
  }

  if( itemIndex == 1){
    document.querySelector('.description').innerHTML='send and receive requests';
  }

 
    
  }


  function nextItem4() {
    if (itemIndex === totalProject4Items - 1) {
      itemIndex = 0;
    } else {
      itemIndex++;
    }
   changeItem4();
  }

  
// Close Lightbox
lightbox.addEventListener('click', function (e) {
  if (e.target === lightboxClose || e.target === lightbox) {
    itemIndex = 0;
    toggleLightbox();
    projectnumber =0;
  }
});
