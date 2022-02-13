/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


const sections = document.querySelectorAll("section"); // select all the section tag
const myUl = document.getElementById("navbar__list"); //  select the navigator
const fragment = document.createDocumentFragment();   //  initializtion the document fragment (the virtual object)



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/






/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

for(let section of sections){      // loop the sections to control the individuals sections 
    let myLi = document.createElement("li");    // create li element
    let myLinks = document.createElement("a");   // create a  (links) element
    let text = section.getAttribute("data-nav"); // store the "data-nav" 's value into a variable
    myLinks.innerHTML = text;   // pass the attribute's value ("data-nav") into our anchor "a" links 
    fragment.appendChild(myLi); 
    myLi.appendChild(myLinks); // append anchor "a" as a child to "li"  
    myLi.style.textAlign = "center"
    myLinks.style.padding = "15px"
    myLinks.style.display = "block" // customize the size of page to be suitable with other devices
    myLinks.addEventListener("click", ()=>{ 
        section.scrollIntoView({behavior: "smooth"}) // scroll smoothly into the sections
    })
   
    
    }
    
    
    myUl.appendChild(fragment); // append all the "ils" as a child to the ul tag 
    myUl.style.backgroundColor = "black"; // make a good style :)
    myUl.style.padding = "0.5em";
    
    
    
    
    
    
    //ANOTHER WAY TO CREATE A NAV MANU AND SCROLL SMOOTH TO ALL SECTIONS
    
    /*sections.forEach( (elm, index)=> {
       let lineText = elm.getAttribute("data-nav");
       let newLink = document.createElement("a");
       let textNode = document.createTextNode(lineText);
       let newLi = document.createElement("li");
       newLink.appendChild(textNode);
       newLi.appendChild(newLink);
       newLi.style.padding = "0.75em";
       newLink.addEventListener("click", ()=>{
           elm.scrollIntoView({behavior: "smooth"})
       }
       )
       fragment.appendChild(newLi);
    
    });
    
    
    myUl.appendChild(fragment);
    myUl.style.backgroundColor = "black";
    myUl.style.padding = "1em";*/
    
    

// Add class 'active' to section when near top of viewport

window.addEventListener("scroll", ()=>{  // Add event listener "scroll" to determined which section is active by "getBoundingClientRect()" 
    for(let section of sections){
       let rect = section.getBoundingClientRect();
       if(rect.top >= -500 && rect.top <= 120){  // customize sections viewport
           section.classList.add("your-active-class"); // add "your-active-class" in the section when it reach the viewport
           const myLinks = document.querySelectorAll("a"); // select all anchor "a" tag and loop them 
           for(let link of myLinks){
               if(link.innerText == section.getAttribute("data-nav")){ // when the value of anchor "a" tag equals the value of section's attribute then change the background color to blue  otherwise change it to black 
                link.style.backgroundColor = "blue";
               }else{
                link.style.backgroundColor = "black"; 
               }
           }
       }else {
           section.classList.remove("your-active-class"); // remove "your-active-class" from the section when it doesn't reach the viewport
       }
           
  

    }
    
})


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
