const drinks = document.querySelector('.drinks');

fetch('https://www.thecocktaildb.com/api/pjson/v1/1/search.php?s=margarita')
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
      img.classList.add("images")

      const h1 = document.createElement("h3");
      h1.textContent ='ID: '+ r.idDrink;
      
      const innerDiv=document.createElement('div');
      innerDiv.setAttribute('class','innerDiv');

      const drinkName=document.createElement("h3");
      drinkName.classList.add("drinkName")
      drinkName.textContent=" Drink name :"+r.strDrink;

      const alcoholic =document.createElement("h3")
      alcoholic.textContent="Alcoholic :"+r.strAlcoholic


      innerDiv.addEventListener("click",function(){
      const p = document.createElement("p");
      p.textContent ="Instructions :"+r.strInstructions;   
       innerDiv.appendChild(p);
      })
      innerDiv.appendChild(drinkName);
      innerDiv.appendChild(h1);
   innerDiv.appendChild(alcoholic)

      content.appendChild(img);
      content.appendChild(innerDiv);
      drinks.appendChild(content);

    };
  }).catch((eror)=>console.log(eror))