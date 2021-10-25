/* Data to Show*/
const data = [
  //https://cvillecatcare.com/veterinary-topics/101-amazing-cat-facts-fun-trivia-about-your-feline-friend/
  //https://www.mygavet.com/services/blog/50-cat-facts-you-probably-didnt-know
  {
   quote: `“A house cat’s genome is 95.6 percent tiger, and they share many behaviors with their jungle ancestors.”`, 
   emoji: `😸`,
   image: `url(assets/cat_background_1.jpg)`
  }, 
  {
   quote: `“Cats are believed to be the only mammals who don’t taste sweetness.”`, 
   emoji: '😽', 
   image: `url(assets/cat_background_2.jpg)`
  },  
  {
   quote: `“Cats are supposed to have 18 toes (five toes on each front paw; four toes on each back paw).”`, 
   emoji: '😼' , 
   image: `url(assets/cat_background_3.jpg)`
  },
  {
    quote: `"Cats’ claws all curve downward, which means that they can’t climb down trees head-first. Instead, they have to back down the trunk.”`, 
    emoji: '😺', 
    image: `url(assets/cat_background_4.jpg)`
  },
   {
    quote: `"Cats have the largest eyes relative to their head size of any mammal."`, 
    emoji: '😻', 
    image: `url(assets/cat_background_5.jpg)`
  },
     {
    quote: `"Cats are actually more popular in the United States than dogs are. There are around 88 million pet cats versus 75 million pet dogs. "`, 
    emoji: '🐈', 
    image: `url(assets/cat_background_7.jpg)`
  }
];

/*
Quote and Emoji
*/
// blockquote
const quote = document.querySelector('blockquote');
// emoji
const emoji = document.querySelector('p');
// background
const bgImage = document.querySelector('body');


// Check-Check: change text
quote.innerHTML = "Grapes and raisins, as well as onions, garlic, and chives, are all extremely harmful foods for cats.";
// Check-Check: change frontground image
 emoji.innerHTML = "🐾";
// Check-Check: background image
bgImage.style.backgroundImage= 'url(/assets/cat_background_6.jpg)';


/*
 * Navigate to Items with Event Listeners
 * Track Number of Items
*/
// initialize item number
let itemNumber = 0;
// get next button
const nextButton = document.querySelector("img.next");
// get previous button
const prevButton = document.querySelector("img.prev");
//define random button
const randButton = document.querySelector("img.random");

// listen for clicks on next button
nextButton.addEventListener("click", function () {
  // update, then increase item number with each click
  itemNumber = itemNumber + 1;
  
  // if at LAST item
  if ( itemNumber > data.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  
});

// listen for clicks on previous button
prevButton.addEventListener("click", function () {
  // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = data.length -1;
  }   
    
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

//generate random button
// https://stackoverflow.com/questions/39046843/random-number-generator-w-button/39046913
//Make random button random for pages
randButton.addEventListener('click', function(){
  randomNumber = Math.floor (Math.random() * data.length);
 
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
});

// Keycode for right coordinate with keyboard
document.addEventListener('keyup', function(){ 
  if (event.keyCode === 39) {itemNumber = itemNumber + 1;
  if (itemNumber > data.length - 1) {
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image; 
  }
  
    // Keycode for left coordinate with keyboard
  if (event.keyCode === 37) {
  itemNumber = itemNumber - 1;
  if (itemNumber < 0) {itemNumber = data.length -1;}  
  
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  }
  
  // Keycode for spacebar coordinate with keyboard
   if (event.keyCode === 32) {randomNumber = Math.floor (Math.random() * data.length);
  
  // display data based on array index
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
  }
});
