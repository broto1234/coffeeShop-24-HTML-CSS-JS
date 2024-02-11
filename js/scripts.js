//------Array Object for search list------- 
const searchItemsList = [
  {
    name: "Wonderful Copenhagen 2023",
    date: "Published 01/01/2023",
    text: "Lorem ipsum dolor sit amet consectetur cupiditate quibusdam at adipisicing elit...",
  },
  {
    name: "Awesome Copenhagen 2023",
    date: "Published 18/03/2023",
    text: "Soluta est quaerat, quae expedita consectetur obcaecati, cupiditate quibusdam at...",
  },
  {
    name: "Beautiful Event 2023",
    date: "Published 05/04/2023",
    text: "Optio ipsam neque ex consectetur repellat. If you want to lay the best foundation possible I’d recommend taking this course...",
  },
  {
    name: "Joyful Copenhagen 2023",
    date: "Published 30/05/2023",
    text: "laborum aliquam pariatur eveniet esse inconsectetur repellat. If you want to lay...",
  }
]

const searchItems = document.getElementById('search-items');
//----see the all item lists in search input---
const searchFunc = (items) => {
  const searchCard = items.map((item) => {
    return `<div class="item">
    <h3>${item.name}</h3>
    <p class="para">${item.date}</p>
    <p>${item.text}</p>
    </div>`;
  })
  .join('');
  searchItems.innerHTML = searchCard;
}
searchFunc(searchItemsList);
//--------search input value--------

const searchInputContainer = document.querySelector('.search-input');

searchInputContainer.addEventListener('click', ()=> {
  searchItems.classList.toggle('show');
})

//--------modal for all item lists-----------
const itemCards = document.querySelectorAll('.item');
const modalId = document.querySelector('#modal-id');
const modalClose = document.querySelector('#close-modal');
const modalDesign = document.querySelector('#modal-Design');

itemCards.forEach((ic) => {
  //console.log(ic);
  ic.addEventListener('click', ()=> {
    modalId.classList.remove('hide');
  })
  
  modalClose.addEventListener('click', ()=> {
    modalId.classList.add('hide');
  })
})

//-----see only the search items and modal-------
const searchInputValue = document.getElementById('input-value');
searchInputValue.addEventListener('keyup', ()=> {
  const searchValue = searchInputValue.value.toLowerCase();
  
  const searchIvents = searchItemsList.filter((evnt) => {
    return evnt.name.toLowerCase().includes(searchValue);
  });
  
  searchFunc(searchIvents);   

  const searchCards = document.querySelectorAll('.item');
  
  searchCards.forEach((sc) => {
  
    sc.addEventListener('click', () => {
      modalId.classList.remove('hide');
    })
    
    modalClose.addEventListener('click', ()=> {
      modalId.classList.add('hide');
    })
  })
})

//--------for mobile design-----------------
    //-----search button-------------
const openSearch = document.getElementById('open-search');
const closeSearch = document.getElementById('close-search');
const searchInput = document.getElementById('search-input');

openSearch.addEventListener('click', ()=> {
  openSearch.classList.add('hide');
  closeSearch.classList.remove('hide');
  searchInput.style.display = 'block';
})

closeSearch.addEventListener('click', ()=> {
  openSearch.classList.remove('hide');
  closeSearch.classList.add('hide');
  searchInput.style.display = 'none';
})    

    //-----burger items-------------
const openNavItems = document.getElementById('open-burger-icon');
const closeNavItems = document.getElementById('close-burger-icon');
const openSocialIcon = document.getElementById('open-social-icon');
const navOpen = document.getElementById('menu-item');

openNavItems.addEventListener('click', ()=> {
  openNavItems.classList.add('hide');
  closeNavItems.classList.remove('hide');
  openSocialIcon.style.display = 'block';
  navOpen.style.display = 'block';
})

closeNavItems.addEventListener('click', ()=> {
  openNavItems.classList.remove('hide');
  closeNavItems.classList.add('hide');
  openSocialIcon.style.display = 'none';
  navOpen.style.display = 'none';
})


//------Array Object for slider list-------
const sliderList = [
  {
    img:"assets/images/coffee1.png",
    para:"“To create an environment in which knowledge about coffee and its sphere can be obtained”"
  },
  {
    img:"assets/images/coffee2.png",
    para:"“This is a great introduction do the coffee industry's best beans on the planet”"
  },
  {
    img:"assets/images/coffee3.png",
    para:"“Coffee in code out, this is the way of eternal life and empowerment of the soul”"
  }
]


//------slider section----------
const slideImg = document.querySelector('#slide-img');
const heroText = document.querySelector('.text-container');
const previousBtn = document.querySelector('.left-arrow');
const nextBtn = document.querySelector('.right-arrow');

let count = 0;

const sliderNumber = (num) => {
  const slideCount = sliderList[count];
  slideImg.src = slideCount.img;
  heroText.textContent = slideCount.para;
}

sliderNumber(count);

previousBtn.addEventListener('click', ()=> {
  count--;
  count < 0 ? count = sliderList.length-1 : count;
  sliderNumber(count);
})

nextBtn.addEventListener('click', ()=> {
  count++;
  count > sliderList.length-1 ? count = 0 : count;
  sliderNumber(count);
})


//------Array Object for post list------- 
const postsList = [
  {
    id: 1,
    img:"assets/images/posts/PostThumbnail-1.png",
    name: "Wonderful Copenhagen 2023",
    date: "Published 01/01/2023",
    text: "Lorem ipsum dolor sit amet consectetur cupiditate quibusdam at adipisicing elit. Optio ipsam neque ex consectetur repellat. If you want to lay the best foundation."
  },
  {
    id: 2,
    img:"assets/images/posts/PostThumbnail-2.png",
    name: "Awesome Copenhagen 2023",
    date: "Published 18/03/2023",
    text: "Soluta est quaerat, quae expedita consectetur obcaecati. Optio ipsam neque ex consectetur repellat. If you want to lay the best foundation, cupiditate quibusdam at."
  },
  {
    id: 3,
    img:"assets/images/posts/PostThumbnail-3.png",
    name: "Beautiful Event 2023",
    date: "Published 05/04/2023",
    text: "Optio ipsam neque ex consectetur repellat. If you want to lay the best foundation dsds koeku judom possible I’d recommend taking this course."
  },
  {
    id: 4,
    img:"assets/images/posts/PostThumbnail-4.png",
    name: "Joyful Copenhagen 2023",
    date: "Published 30/05/2023",
    text: "laborum aliquam pariatur eveniet esse inconsectetur repellat. Optio ipsam neque ex consectetur repellat. If you want to lay the best foundation. If you want to lay."
  },
  {
    id: 5,
    img:"assets/images/posts/PostThumbnail-5.png",
    name: "Coffeefest Copenhagen 2023",
    date: "Published 11/07/2023",
    text: "Ipsam neque ex consectetur repellat. If you want to lay the best foundation. Lorem ipsum dolor sit amet consectetur cupiditate quibusdam at adipisicing elit."
  },
  {
    id: 6,
    img:"assets/images/posts/PostThumbnail-6.png",
    name: "CoffeeNight Copenhagen 2023",
    date: "Published 18/07/2023",
    text: "Soluta est quaerat, quae expedita consectetur obcaecati, Optio ipsam neque ex consectetur repellat. If you want to lay the best foundation. cupiditate quibusdam at."
  },
  {
    id: 7,
    img:"assets/images/posts/PostThumbnail-7.png",
    name: "Beautiful Event 2023",
    date: "Published 05/04/2023",
    text: "Consectetur repellat. If you want to lay the best foundation possibleOptio ipsam neque ex consectetur repellat. If you want to lay the best foundation. I’d recommend taking this course."
  },
  {
    id: 8,
    img:"assets/images/posts/PostThumbnail-8.png",
    name: "Coffee Event 2023",
    date: "Published 05/04/2023",
    text: "Optio ipsam neque ex consectetur repellat. If you want to lay the best foundation dsds koeku judom possible I’d recommend taking this course."
  },
  {
    id: 9,
    img:"assets/images/posts/PostThumbnail-2.png",
    name: "Joyful Copenhagen 2023",
    date: "Published 30/05/2023",
    text: "laborum aliquam pariatur eveniet esse inconsectetur repellat. Optio ipsam neque ex consectetur repellat. If you want to lay the best foundation. If you want to lay."
  },
  {
    id: 10,
    img:"assets/images/posts/PostThumbnail-1.png",
    name: "Coffeefest Copenhagen 2023",
    date: "Published 11/07/2023",
    text: "Ipsam neque ex consectetur repellat. If you want to lay the best foundation. Lorem ipsum dolor sit amet consectetur cupiditate quibusdam at adipisicing elit."
  },
  {
    id: 11,
    img:"assets/images/posts/PostThumbnail-7.png",
    name: "Coffee Night Copenhagen 2023",
    date: "Published 18/07/2023",
    text: "Soluta est quaerat, quae expedita consectetur obcaecati, Optio ipsam neque ex consectetur repellat. If you want to lay the best foundation. cupiditate quibusdam at."
  },
  {
    id: 12,
    img:"assets/images/posts/PostThumbnail-2.png",
    name: "Beautiful Event 2023",
 date: "Published 05/04/2023",
    text: "Consectetur repellat. If you want to lay the best foundation possibleOptio ipsam neque ex consectetur repellat. If you want to lay the best foundation. I’d recommend taking this course."
  },
  {
    id: 13,
    img:"assets/images/posts/PostThumbnail-5.png",
    name: "Beautiful Event 2023",
    date: "Published 05/04/2023",
    text: "Optio ipsam neque ex consectetur repellat. If you want to lay the best foundation dsds koeku judom possible I’d recommend taking this course."
  },
  {
    id: 14,
    img:"assets/images/posts/PostThumbnail-8.png",
    name: "Joyful Copenhagen 2023",
    date: "Published 30/05/2023",
    text: "laborum aliquam pariatur eveniet esse inconsectetur repellat. Optio ipsam neque ex consectetur repellat. If you want to lay the best foundation. If you want to lay."
  },
  {
    id: 15,
    img:"assets/images/posts/PostThumbnail-7.png",
    name: "Coffeefest Copenhagen 2023",
    date: "Published 11/07/2023",
    text: "Ipsam neque ex consectetur repellat. If you want to lay the best foundation. Lorem ipsum dolor sit amet consectetur cupiditate quibusdam at adipisicing elit."
  },
  {
    id: 16,
    img:"assets/images/posts/PostThumbnail-2.png",
    name: "Coffee Night Copenhagen 2023",
    date: "Published 18/07/2023",
    text: "Soluta est quaerat, quae expedita consectetur obcaecati, Optio ipsam neque ex consectetur repellat. If you want to lay the best foundation. cupiditate quibusdam at."
  },
  {
    id: 17,
    img:"assets/images/posts/PostThumbnail-4.png",
    name: "Beautiful Event 2023",
    date: "Published 05/04/2023",
    text: "Consectetur repellat. If you want to lay the best foundation possibleOptio ipsam neque ex consectetur repellat. If you want to lay the best foundation. I’d recommend taking this course."
  },
  {
    id: 18,
    img:"assets/images/posts/PostThumbnail-8.png",
    name: "Joyful Copenhagen 2023",
    date: "Published 30/05/2023",
    text: "Pariatur eveniet esse inconsectetur repellat. Optio ipsam neque ex consectetur repellat. If you laborum aliquam want to lay the best foundation. If you want to lay."
  },
  {
    id: 19,
    img:"assets/images/posts/PostThumbnail-3.png",
    name: "Joyful Copenhagen 2023",
    date: "Published 30/05/2023",
    text: "laborum aliquam pariatur eveniet esse inconsectetur repellat. Optio ipsam neque ex consectetur repellat. If you want to lay the best foundation. If you want to lay."
  }
]

//------post list------------
const postItemsList = document.querySelector('.post-items-list');

const postList = () => {
  postsList.forEach( p => {
    const postCards = document.createElement('div');
    postCards.classList.add('post-item');

    const card = document.createElement('div');
    card.classList.add('card-item');

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image-text');

    imageDiv.innerHTML = `<img src="${p.img}" alt="">`;
    
    const postDiv = document.createElement('div');
    postDiv.classList.add('post-text');
    postDiv.innerHTML = `
    <h3>${p.name}</h3>
    <p>${p.date}</p>
    <p>${p.text}</p>
    <p class="read-plus">Maxime at ab totam, iste saepe optio voluptas recusandae maiores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis fugit debitis ipsa similique, architecto iure? Aspernatur harum suscipit illo, laudantium pariatur saepe eius ab, inventore incidunt quod in obcaecati vitae.</p>
    <button class="btn read-btn">Read more</button>
    </div>
    `;

    card.appendChild(imageDiv);
    card.appendChild(postDiv);
    postCards.appendChild(card);
    postItemsList.appendChild(postCards);
  })
}
postList();

//---------read more button-------
const postTexts = document.querySelectorAll('.post-text');

postTexts.forEach( ptm => {
  const rbtn = ptm.querySelector('.read-btn');  
    rbtn.addEventListener('click', () => {
      ptm.classList.toggle('active');

      rbtn.innerHTML == 'Read more' ? 
      rbtn.innerHTML = 'Read less' :
      rbtn.innerHTML = 'Read more';
  })
})

  
//--------pagination--------
const postItems = document.querySelectorAll('.post-item');
const activePage = document.querySelector('.page-num');
const showtotalPage = document.querySelector('.total-page');

let currentPage = 1;   
let maxItem = 3;
let countPage = Math.ceil(postItems.length/maxItem);
let RestItems = postItems.length % maxItem;
  
const showItems = () =>{
  let begin = maxItem * (currentPage-1);
  let end = (maxItem * currentPage) - 1;
  
  if (RestItems != 0) {   
    if (currentPage == countPage) {
      begin = (maxItem * (currentPage-1))-(maxItem-RestItems);
    }
  }

  postItems.forEach((item, id) => {

    if (id >= begin && id <= end) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
  activePage.innerHTML = currentPage;
  showtotalPage.innerHTML = countPage;
}
showItems();
  
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
  
prev.addEventListener('click', () => {
    (currentPage == 1) ? currentPage = 1 : currentPage--;  
    checkDisability();
    showItems();
})
  
next.addEventListener('click', () => {
    (currentPage == countPage) ? currentPage = countPage : currentPage++;  
     checkDisability();
     showItems();
})
  
const checkDisability = () => {       //prev & next button active or disable
    if ( currentPage == 1){
      prev.classList.add('disabled');
    } else if ( currentPage == countPage){
      next.classList.add('disabled');
    } else{
      prev.classList.remove('disabled');
      next.classList.remove('disabled');
    }
}
  
//-----sponsor section----------
const sponsorList = [
  {
    img:"assets/images/sponsors/sponsor-1.png"
  },
  {
    img:"assets/images/sponsors/sponsor-2.png"
  },
  {
    img:"assets/images/sponsors/sponsor-3.png"
  },
  {
    img:"assets/images/sponsors/sponsor-4.png"
  },
  {
    img:"assets/images/sponsors/sponsor-5.png"
  },
  {
    img:"assets/images/sponsors/sponsor-6.png"
  },
  {
    img:"assets/images/sponsors/sponsor-7.png"
  },
  {
    img:"assets/images/sponsors/sponsor-8.png"
  },
  {
    img:"assets/images/sponsors/sponsor-9.png"
  },
  {
    img:"assets/images/sponsors/sponsor-10.png"
  },
  {
    img:"assets/images/sponsors/sponsor-11.png"
  },
  {
    img:"assets/images/sponsors/sponsor-12.png"
  },
  {
    img:"assets/images/sponsors/sponsor-13.png"
  },
  {
    img:"assets/images/sponsors/sponsor-14.png"
  },
  {
    img:"assets/images/sponsors/sponsor-15.png"
  },
  {
    img:"assets/images/sponsors/sponsor-16.png"
  },
  {
    img:"assets/images/sponsors/sponsor-17.png"
  },
  {
    img:"assets/images/sponsors/sponsor-18.png"
  },
  {
    img:"assets/images/sponsors/sponsor-19.png"
  },
  {
    img:"assets/images/sponsors/sponsor-20.png"
  },
  {
    img:"assets/images/sponsors/sponsor-21.png"
  },
  {
    img:"assets/images/sponsors/sponsor-22.png"
  }
]

const sponsorIcon = document.querySelector('.sponsor-container ul');

sponsorList.forEach(item => {
  const li = document.createElement('li');
  li.innerHTML = `
    <img src="${item.img}">
  `;
  sponsorIcon.appendChild(li);
})
