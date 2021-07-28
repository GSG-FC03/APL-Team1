const drinks = document.querySelector('.drinks');

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
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
  .then((data) => {
    for (let r of data.drinks){

      const content = document.createElement("div");
      content.setAttribute("class", "juice");

      const img = document.createElement('img');
      img.setAttribute('src',`${r.strDrinkThumb}`);

      const h1 = document.createElement("h1");
      h1.textContent ='ID: '+ r.idDrink;
      const p = document.createElement("p");
      p.textContent = r.strInstructions; 

      const innerDiv=document.createElement('div');
      innerDiv.setAttribute('class','innerDiv');

      innerDiv.appendChild(h1);
      innerDiv.appendChild(p);

      content.appendChild(img);
      content.appendChild(innerDiv);
      drinks.appendChild(content);

    };
  });