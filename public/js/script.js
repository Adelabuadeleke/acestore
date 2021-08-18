// sidebar functionality
const sideBar = document.querySelector('.sidebar');
const btn = document.querySelector('.toggle_btn');

function toggleSidebar(){
  sideBar.classList.toggle('show')
}

btn.addEventListener('click', toggleSidebar)

// display store items
const storeItems = [
  {
    id:1,
    category:'footwear',
    title:'Gucci Slide',
    price: 2000,
    img:'img/0dc17dc6152246f1b21da8e4a31bf030_1619812173945.jpg',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam minus aliquid illo voluptate natus deleniti magnam laboriosam non rem.'
  },

  {
    id:2,
    category:'footwear',
    title:'Gucci Slide',
    price: 2000,
    img:'img/0dc17dc6152246f1b21da8e4a31bf030_1619812173945.jpg',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam minus aliquid illo voluptate natus deleniti magnam laboriosam non rem.'
  },

  {
    id:3,
    category:'footwear',
    title:'Gucci Slide',
    price: 2000,
    img:'img/0dc17dc6152246f1b21da8e4a31bf030_1619812173945.jpg',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam minus aliquid illo voluptate natus deleniti magnam laboriosam non rem.'
  },

  {
    id:4,
    category:'footwear',
    title:'Gucci Slide',
    price: 2000,
    img:'img/0dc17dc6152246f1b21da8e4a31bf030_1619812173945.jpg',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam minus aliquid illo voluptate natus deleniti magnam laboriosam non rem.'
  },

  {
    id:5,
    category:'footwear',
    title:'Gucci Slide',
    price: 2000,
    img:'img/0dc17dc6152246f1b21da8e4a31bf030_1619812173945.jpg',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam minus aliquid illo voluptate natus deleniti magnam laboriosam non rem.'
  },

  {
    id:6,
    category:'footwear',
    title:'Gucci Slide',
    price: 2000,
    img:'img/0dc17dc6152246f1b21da8e4a31bf030_1619812173945.jpg',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam minus aliquid illo voluptate natus deleniti magnam laboriosam non rem.'
  },

  {
    id:7,
    category:'footwear',
    title:'Gucci Slide',
    price: 2000,
    img:'img/0dc17dc6152246f1b21da8e4a31bf030_1619812173945.jpg',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam minus aliquid illo voluptate natus deleniti magnam laboriosam non rem.'
  },

  {
    id:8,
    category:'footwear',
    title:'Gucci Slide',
    price: 2000,
    img:'img/0dc17dc6152246f1b21da8e4a31bf030_1619812173945.jpg',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam minus aliquid illo voluptate natus deleniti magnam laboriosam non rem.'
  },

  {
    id:9,
    category:'footwear',
    title:'Gucci Slide',
    price: 2000,
    img:'img/0dc17dc6152246f1b21da8e4a31bf030_1619812173945.jpg',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam minus aliquid illo voluptate natus deleniti magnam laboriosam non rem.'
  },

  {
    id:10,
    category:'footwear',
    title:'Gucci Slide',
    price: 2000,
    img:'img/0dc17dc6152246f1b21da8e4a31bf030_1619812173945.jpg',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam minus aliquid illo voluptate natus deleniti magnam laboriosam non rem.'
  },
]


