const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks");

hamburger.addEventListener("click",()=>{
    
    navlinks.classList.toggle("navlinks-active");
})

function handleDiscoverButtonClick() {
    window.location.href = 'discover.html'; 
}


const discoverButtons = document.querySelectorAll('.card button.sec-btn');

discoverButtons.forEach(button => {
    button.addEventListener('click', handleDiscoverButtonClick);
});

function discoverButtonClick() {
    alert('Discover button clicked!'); 
}

