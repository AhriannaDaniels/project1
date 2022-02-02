

// Homepage carousel for NFTs


// function nxtCarouselCard() {
//     carouselNFTs[nftCarouselIndex].classList.remove('ActiveCarouselCard');
//     nftCarouselIndex++
//     carouselNFTs[nftCarouselIndex].classList.add('animate__fadeOutLeft');
// }

// function carousel() {
//     carouselNFTs[nftCarouselIndex].classList.add('animate__fadeOutLeft');
//     setTimeout(nxtCarouselCard, 1000)
// }

var menuicon = document.getElementById('menu-icon');
var menuState = false;
// HerHeroism Menu Item
var menuItemOne = document.getElementById("MI1")
var menuItemOneText = document.getElementById("itemOne")

// About Menu Item
var menuItemTwo = document.getElementById("MI2");
var menuItemTwoText = document.getElementById("itemTwo");

// Contact Menu Item
var menuItemThree = document.getElementById("MI3");
var menuItemThreeText = document.getElementById("itemThree");


var starContainer = document.getElementById('star-container');
var bigStarContainer = document.getElementById('bigger-star-container');

for(i=1; i<101;i++){
    var xAxis = Math.floor(Math.random() * 100) + 1 + '%';
    var yAxis = "-" + Math.floor(Math.random() * 100) + 1 + '%';
    var element = document.createElement("div")
    element.classList.add('star');

    element.style.left = xAxis;
    element.style.bottom = yAxis;
    starContainer.appendChild(element)
}

for(i=1; i<51;i++){
    var xAxis = Math.floor(Math.random() * 100) + 1 + '%';
    var yAxis = "-" + Math.floor(Math.random() * 100) + 1 + '%';
    var element = document.createElement("div")
    element.classList.add('bigstar');

    element.style.left = xAxis;
    element.style.bottom = yAxis;
    bigStarContainer.appendChild(element)
}



menuicon.addEventListener("click", function(e){
    if(menuState == false){
        document.getElementById('navbar-ul').style.height = "100vh;"
        // First Bar
        document.getElementById('bar-one').classList.remove("menuTopL");
        document.getElementById('bar-one').classList.add("menuTopX");

         // Middle Bar Bar
         document.getElementById('bar-two').classList.remove("menuMiddleShow");
         document.getElementById('bar-two').classList.add("menuMiddleHide");

        //  Bottom Bar
        document.getElementById('bar-three').classList.remove("menuBottomL");
        document.getElementById('bar-three').classList.add("menuBottomX");

        // ACTUAL MENU ITEMS
        menuItemOne.style.opacity = "1";
        menuItemOne.style.right = "0%";
        menuItemOneText.style.right = "0%";
        
        setTimeout(function() { menuItemTwo.style.right = "0%"; menuItemTwo.style.opacity = "1";}, 300);
        setTimeout(function() { menuItemTwoText.style.right = "0%"; }, 500)

        setTimeout(function() { menuItemThree.style.right = "0%"; menuItemThree.style.opacity = "1";}, 500);
        setTimeout(function() { menuItemThreeText.style.right = "0%"; }, 700)

        menuState = true;
    } else if( menuState == true){

        collaspeMenu()
    }

});

function delay (URL) {
    collaspeMenu()

    setTimeout( function() { 
        document.getElementById('body').classList.remove('animate__fadeIn');
        document.getElementById('body').classList.add('animate__fadeOut');

    }, 1500);
    setTimeout( function() { window.location = URL }, 2000 );
}

function collaspeMenu() {
    document.getElementById('bar-one').classList.remove("menuTopX");
        document.getElementById('bar-one').classList.add("menuTopL");

         // Middle Bar Bar
         document.getElementById('bar-two').classList.remove("menuMiddleHide");
         document.getElementById('bar-two').classList.add("menuMiddleShow");

         //  Bottom Bar
        document.getElementById('bar-three').classList.remove("menuBottomX");
        document.getElementById('bar-three').classList.add("menuBottomL");

        // ACTUAL MENU ITEMS
        // document.getElementById("MI1").preventDefault();
        document.getElementById("itemOne").style.right = "200%";
        setTimeout(function() {
            menuItemOne.style.right = "200%";
            setTimeout(function() {
                menuItemOne.style.opacity = "0";
            }, 200);
        }, 400)
        
        setTimeout(function() { menuItemTwoText.style.right = "200%"; }, 400)
        setTimeout(function() { 
            menuItemTwo.style.right = "200%"; 
            setTimeout(function() {
                menuItemTwo.style.opacity = "0";
            }, 200);
        }, 600);

        setTimeout(function() { menuItemThreeText.style.right = "200%"; }, 600)
        setTimeout(function() { 
            menuItemThree.style.right = "200%"; 
            setTimeout(function() {
                menuItemThree.style.opacity = "0";
            }, 100)
        }, 800);

        setTimeout(function() {
            // Reset Everything
            
            menuItemOne.style.right = "-100%";
            menuItemOneText.style.right = "-100%";

            menuItemTwo.style.right = "-100%";
            menuItemTwoText.style.right = "-100%";

            menuItemThree.style.right = "-100%";
            menuItemThreeText.style.right = "-100%";
        },1200)
        setTimeout(function() {
            document.getElementById('navbar-ul').style.height = "0;"
        })
        menuState = false;
}