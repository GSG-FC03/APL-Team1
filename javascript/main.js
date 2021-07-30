//declare variables using dom
const drinks = document.querySelector('.drinks');
const input = document.getElementById('search');
const btn = document.getElementById('btnSearch');
const body = document.querySelector('body');
btn.onclick= searchDrinks;

//Add setoutime contains a function that executes once the page is loaded
setTimeout(()=>{
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon`)
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

        const p = document.createElement("p");
        p.textContent ="Instructions :"+r.strInstructions;
        p.style.display='none'; 
        p.style.fontSize='20px';

        innerDiv.addEventListener("click",function(){  
         p.style.display='block';
        })              
        innerDiv.appendChild(drinkName);
        innerDiv.appendChild(h1);
     innerDiv.appendChild(alcoholic)
     innerDiv.appendChild(p)
        content.appendChild(img);
        content.appendChild(innerDiv);
        drinks.appendChild(content);
  
      };
    }).catch((eror)=>console.log(eror))
  
})
function searchDrinks(e){
e.preventDefault();
drinks.style.display='none';
const sec = document.createElement('section');
body.appendChild(sec);
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input.value}`)
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

      const p = document.createElement("p");
      p.textContent ="Instructions :"+r.strInstructions; 
      p.style.display='none';
      p.style.fontSize='20px';

      innerDiv.addEventListener("click",function(){
        p.style.display='block';     
      })
      innerDiv.appendChild(drinkName);
      innerDiv.appendChild(h1);
   innerDiv.appendChild(alcoholic)
   innerDiv.appendChild(p);   
      content.appendChild(img);
      content.appendChild(innerDiv);
      sec.appendChild(content);

    };
  }).catch((eror)=>console.log(eror))
  input.value='';
}