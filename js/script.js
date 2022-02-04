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


var i = 0; 
var x = 0;
function animateStars() {
    setTimeout(function() {
        if( i < 101){
            var xAxis = Math.floor(Math.random() * 100) + 1 + '%';
            var yAxis = "-" + Math.floor(Math.random() * 100) + 1 + '%';
            var element = document.createElement("div")
            element.classList.add('star');

            element.style.left = xAxis;
            element.style.bottom = yAxis;
            starContainer.appendChild(element)

            staryNight(element, "star")
            i++
            animateStars();
        }
    },500);

    setTimeout(function() {
        if( x < 26){
            var xAxis = Math.floor(Math.random() * 100) + 1 + '%';
            var yAxis = "-" + Math.floor(Math.random() * 100) + 1 + '%';
            var element = document.createElement("div")
            element.classList.add('bigstar');

            element.style.left = xAxis;
            element.style.bottom = yAxis;
            bigStarContainer.appendChild(element)
            staryNight(element, "bigstar")

            x++
            animateStars();
        }
    },700);
};


animateStars();

function staryNight(element, starType) {
    setTimeout(function() {
            if(starType == "star") {
                element.style.animation = "starAnimate 90000ms infinite"
            }
            else {
                element.style.animation = "starAnimate 50000ms infinite"
            }
    },400);
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
        document.getElementById('content').style.animation = "slideFadeOut 1500ms forwards"

    }, 1000);
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

// Set the date we're counting down to
var countDownDate = new Date("Feb 22, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = "Countdown </br>" +days + "D " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "WE LAUNCHED!";
  }
}, 1000);