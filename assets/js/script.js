var userInput = document.querySelector("#user-input");
var form = document.querySelector("#search-form");
var recipeList = document.querySelector(".recipes");

const searchRecipe = async () => {
  console.log(userInput.value);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8e265fd8demsh64378718b27c8e2p18dd32jsn8767306f5220",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  const response = await fetch(
    `https://tasty.p.rapidapi.com/recipes/list?from=0&size=5&tags=under_30_minutes&q=${userInput.value}`,
    options
  );

  const json = await response.json();
  let data = json.results;
  console.log(json.results);
  data = data.map(
    (result) =>
      `<h4 id="recipe-name">${result.name}</h4>
      <button class="js-modal-trigger" data-target="modal-js-example">
    <img id="recipe-img" class="recipeName" src="${result.thumbnail_url}" alt="img"/></button> `
  );
  recipeList.innerHTML = data;
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("got here");
  searchRecipe();
});

// function showModal(){
// let recipeImages = document.querySelectorAll('.recipeName')
//   const modal = document.getElementById("modal");

//   for(let i=0; i < recipeImages.length; i++){
//    recipeImages[i].onclick - function (){
//     modal.style.display = "block";
//    }
//   }

document.addEventListener("DOMContentLoaded", () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add("is-active");
  }

  function closeModal($el) {
    $el.classList.remove("is-active");
  }

  function closeAllModals() {
    (document.querySelectorAll(".modal") || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll(".js-modal-trigger") || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener("click", () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (
    document.querySelectorAll(
      ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest(".modal");

    $close.addEventListener("click", () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener("keydown", (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) {
      // Escape key
      closeAllModals();
    }
  });
});

// }
// var userInput = document.querySelector('user-input')

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '8e265fd8demsh64378718b27c8e2p18dd32jsn8767306f5220',
// 		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
// 	}
// };

// fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=2&tags=under_30_minutes&q=' + userInput, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// var userInput = document.querySelector('.user-input')
// var searchBtn = document.querySelector('.search-btn')
// var recipeList = document.querySelector('.recipe-list')

// var apiKey = '8e265fd8demsh64378718b27c8e2p18dd32jsn8767306f5220'

// searchBtn.addEventListener('click', function() {

// var userInputValue = userInput.value

// var url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=5&tags=under_30_minutes' + userInput;
// fetch(url, options)
// .then(function(response) {
// return response.json()
// })
// .then(function(data) {
// console.log(data)
// var recipe = data.results

// recipeList.innerHTML = ''

// for (var i = 0; i < recipe.length; i++) {
// var recipeName = recipe[i].name
// var recipeImage = recipe[i].thumbnail_url
// var recipeId = recipe[i].id
// recipeList.innerHTML += `
// <div class="recipe">
// <img src="${recipeImage}" alt="">
// <h3>${recipeName}</h3>
// <a href="recipe.html?id=${recipeId}">View Recipe</a>
// </div>
// `
// }
// })
// })
