// DOM <!--responsible for the functionalitys off the container swiper and like and dislike button -->
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');


// IMAGES
const urls = [
  'https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.xl.005-2.jpg&w=750&q=100',
  'https://www.plantje.nl/wp-content/uploads/2019/01/Schefflera-op-lava-steen-plantje-1024-600x600.jpg.webp',
  'https://www.plantje.nl/wp-content/uploads/2022/05/phlebodium-aureum-P17-1024-1-600x600.jpg.webp',
  'https://www.plantje.nl/wp-content/uploads/2021/09/Aeschynanthus-Japhrolepis-Lifestyle-600x600.jpg.webp',
  'https://www.plantje.nl/wp-content/uploads/2021/09/Spathiphyllum-Torelli-p12-1-600x600.jpg.webp',
  'https://www.plantje.nl/wp-content/uploads/2022/10/Parthenocissus-Striata-Suikerdruifje-P12-1024-1-600x600.webp'
];

const scale = [
  1, 1.08, 1.13, 1.18, 1.23, 1.28, 1.33
]

// VARIABLE TO TRACK THE COUNT OF CARDS
let cardCount = 0;

// FUNCTION TO APPEND A CARD
const appendNewCard = () => {
  //create an object with the use of the new keyword
  const card = new Card({
    imageUrl: urls[cardCount % urls.length], //Haalt alle opjecten uit de bovenstaande array ALSO NECESSARY FOR IMAGE LOOPING
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = 'running';
      like.classList.toggle('trigger');
    },
    onDislike: () => {
      dislike.style.animationPlayState = 'running';
      dislike.classList.toggle('trigger');
    }
  });
  swiper.append(card.element);
  cardCount++;

  // SELECT ALL THE CARDS THAT ARE NOT DISMISSED
  const cards = swiper.querySelectorAll('.card:not(.dismissing)');
  cards.forEach((card, index) => {
    // ADD A NEW PROPERTY RESPONSIBLE FOR THE TILT
    card.style.setProperty('--i', index);
    card.style.setProperty('--scale',scale[index])
  });
}

// APPEND THE CARDS
for (let i = 0; i < urls.length; i++) {
  appendNewCard();
}
