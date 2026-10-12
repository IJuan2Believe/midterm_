
$(function() {
 
    //Write your code below
    // question 1 
    async function planets(){  
     
    }

});

// question 2 
async function getData() {

  let response = await fetch("data/planets.json");
  let planet_info = await response.text();
  myDisplayer(planet_info);
}
// Call the async function
getData();


//Question 4
for (var i = 0; i < planet_info.length; i++) {
//create a card using js or jquery 
}


//question 7 
try {
  // Code that may cause an error
} catch (error) {
  // Code to handle the error
}