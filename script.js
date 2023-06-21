// Retrieve DOM elements
const posterImage = document.getElementById('poster-image');
const posterTitle = document.getElementById('poster-title');
const posterQuote = document.getElementById('poster-quote');
const randomizeButton = document.getElementById('randomize');
const submitButton = document.getElementById('submit');
const quoteInput = document.getElementById('poster-form-quote');

// Array of predefined poster objects
const posters = [
  {
    imageSrc: 'https://img.fruugo.com/product/6/75/21266756_max.jpg',
    title: 'Achievement',
    quote: 'This is one small step for man, One giant leap for mankind.',
  },
  {
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Ux6A3Ajks4n_dR6iT-tORkBd3CIsPD7uLA&usqp=CAU',
    title: 'Determination',
    quote: 'What lies behind us and what lies ahead of us are tiny matters compared to what lives within us.',
  },
  {
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReeh-CsyzzNG4NuIpAporr-V891fTAadBLLg&usqp=CAU',
    title: 'Leadership',
    quote: 'The Supreme Quality For Leadership Is Unquestionable Integrity. Without It, No Real Success Is Possible.',
  },
  // Add more poster objects as needed
];

// Event listener for randomize button
randomizeButton.addEventListener('click', generateRandomPoster);

// Event listener for submit button
submitButton.addEventListener('click', generateCustomPoster);

// Function to generate a random poster
function generateRandomPoster() {
  const randomIndex = Math.floor(Math.random() * posters.length);
  const randomPoster = posters[randomIndex];
  updatePoster(randomPoster);
}

// Function to generate a custom poster
function generateCustomPoster(event) {
    event.preventDefault();
    const customQuote = quoteInput.value || 'No quote provided';
    const customTitle = titleInput.value || 'No title provided';
    const customPoster = {
      imageSrc: 'https://cdn3.successories.com/products/6611969dz-751680-motivational-posters-integrity-island-motivational-poster.jpg',
      title: customTitle,
      quote: customQuote,
    };
    updatePoster(customPoster);
  }

// Function to update the poster content in the DOM
function updatePoster(poster) {
  posterImage.src = poster.imageSrc;
  posterTitle.textContent = poster.title;
  posterQuote.textContent = poster.quote;
}