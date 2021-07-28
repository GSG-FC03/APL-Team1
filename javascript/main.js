const drinks = document.getElementsByClassName('drinks')[0];

fetch('www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
.then((response) => {
    if (response.status !== 200) {
      console.log(
        `Looks like there was a problem. Status Code: ${response.status}`
      );
    } else {
      // Examine the text in the response
      return response.json();      
    }
  })
.then((data) =>{
    for(let drink in data.drinks){
        const div = document.createElement('div');
        div.setAttribute('class','juice');
        div.appendChild('drinks');

        const img = document.createElement('img');
        img.setAttribute('src',drink.strDrinkThumb);
        div.appendChild('img');

        const id = document.createElement('p')
        id.setAttribute('class','id');
        id.textContent= 'ID: '+ drink.idDrink;
        div.appendChild('id');
    }
})