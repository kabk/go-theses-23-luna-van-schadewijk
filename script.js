let abs = window.scrollX + document.querySelector('#image-one').getBoundingClientRect().left;
let ch0 = window.scrollX + document.querySelector('#image-two').getBoundingClientRect().left;
let ch1 = window.scrollX + document.querySelector('#image-three').getBoundingClientRect().left;
let ch1_1 = window.scrollX + document.querySelector('#image-four').getBoundingClientRect().left;
let ch1_2 = window.scrollX + document.querySelector('#image-five').getBoundingClientRect().left;
let ch1_3 = window.scrollX + document.querySelector('#image-six').getBoundingClientRect().left;
let ch2 = window.scrollX + document.querySelector('#image-seven').getBoundingClientRect().left;
let ch2_1 = window.scrollX + document.querySelector('#image-eight').getBoundingClientRect().left;
let ch2_2 = window.scrollX + document.querySelector('#image-nine').getBoundingClientRect().left;
let ch2_3 = window.scrollX + document.querySelector('#image-ten').getBoundingClientRect().left;

let chapter1 = document.querySelector('.one');
let chapter2 = document.querySelector('.two');
let chapter3 = document.querySelector('.three');
let chapter4 = document.querySelector('.four');
let chapter5 = document.querySelector('.five');
let chapter6 = document.querySelector('.six');
let chapter7 = document.querySelector('.seven');
let chapter8 = document.querySelector('.eight');
let chapter9 = document.querySelector('.nine');

let nav1 = document.querySelector('#nav1');
let nav2 = document.querySelector('#nav2');
let nav3 = document.querySelector('#nav3');
let nav4 = document.querySelector('#nav4');
let nav5 = document.querySelector('#nav5');
let nav6 = document.querySelector('#nav6');
let nav7 = document.querySelector('#nav7');
let nav8 = document.querySelector('#nav8');
let nav9 = document.querySelector('#nav9');

const scrollContainer = document.querySelector("main");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;

    let left = scrollContainer.scrollLeft;

    if (left <= abs) {
        chapter1.style.display = "block";
        chapter2.style.display = "none";
        chapter3.style.display = "none";
        chapter4.style.display = "none";
        chapter5.style.display = "none";
        chapter6.style.display = "none";
        chapter7.style.display = "none";
        chapter8.style.display = "none";
        chapter9.style.display = "none";
        nav1.style.color = "black";
        nav2.style.color = "white";
        nav3.style.color = "white";
        nav4.style.color = "white";
        nav5.style.color = "white";
        nav6.style.color = "white";
        nav7.style.color = "white";
        nav8.style.color = "white";
        nav9.style.color = "white";

    } else if (left > abs && left < ch1) {
        chapter1.style.display = "none";
        chapter2.style.display = "block";
        chapter3.style.display = "none";
        chapter4.style.display = "none";
        chapter5.style.display = "none";
        chapter6.style.display = "none";
        chapter7.style.display = "none";
        chapter8.style.display = "none";
        chapter9.style.display = "none";
        nav1.style.color = "white";
        nav2.style.color = "black";
        nav3.style.color = "white";
        nav4.style.color = "white";
        nav5.style.color = "white";
        nav6.style.color = "white";
        nav7.style.color = "white";
        nav8.style.color = "white";
        nav9.style.color = "white";

    } else if (left > ch1 && left < ch1_1) {
        chapter1.style.display = "none";
        chapter2.style.display = "none";
        chapter3.style.display = "block";
        chapter4.style.display = "none";
        chapter5.style.display = "none";
        chapter6.style.display = "none";
        chapter7.style.display = "none";
        chapter8.style.display = "none";
        chapter9.style.display = "none";
        nav1.style.color = "white";
        nav2.style.color = "white";
        nav3.style.color = "black";
        nav4.style.color = "white";
        nav5.style.color = "white";
        nav6.style.color = "white";
        nav7.style.color = "white";
        nav8.style.color = "white";
        nav9.style.color = "white";

    } else if (left > ch1_1 && left < ch1_2) {
        chapter1.style.display = "none";
        chapter2.style.display = "none";
        chapter3.style.display = "block";
        chapter4.style.display = "none";
        chapter5.style.display = "none";
        chapter6.style.display = "none";
        chapter7.style.display = "none";
        chapter8.style.display = "none";
        chapter9.style.display = "none";
        nav1.style.color = "white";
        nav2.style.color = "white";
        nav3.style.color = "black";
        nav4.style.color = "white";
        nav5.style.color = "white";
        nav6.style.color = "white";
        nav7.style.color = "white";
        nav8.style.color = "white";
        nav9.style.color = "white";

    } else if (left > ch1_2 && left < ch1_3) {
        chapter1.style.display = "none";
        chapter2.style.display = "none";
        chapter3.style.display = "none";
        chapter4.style.display = "block";
        chapter5.style.display = "none";
        chapter6.style.display = "none";
        chapter7.style.display = "none";
        chapter8.style.display = "none";
        chapter9.style.display = "none";
        nav1.style.color = "white";
        nav2.style.color = "white";
        nav3.style.color = "white";
        nav4.style.color = "black";
        nav5.style.color = "white";
        nav6.style.color = "white";
        nav7.style.color = "white";
        nav8.style.color = "white";
        nav9.style.color = "white";

    } else if (left > ch1_3 && left < ch2) {
        chapter1.style.display = "none";
        chapter2.style.display = "none";
        chapter3.style.display = "none";
        chapter4.style.display = "none";
        chapter5.style.display = "block";
        chapter6.style.display = "none";
        chapter7.style.display = "none";
        chapter8.style.display = "none";
        chapter9.style.display = "none";
        nav1.style.color = "white";
        nav2.style.color = "white";
        nav3.style.color = "white";
        nav4.style.color = "white";
        nav5.style.color = "black";
        nav6.style.color = "white";
        nav7.style.color = "white";
        nav8.style.color = "white";
        nav9.style.color = "white";

    } else if (left > ch2 && left < ch2_1) {
        chapter1.style.display = "none";
        chapter2.style.display = "none";
        chapter3.style.display = "none";
        chapter4.style.display = "none";
        chapter5.style.display = "none";
        chapter6.style.display = "block";
        chapter7.style.display = "none";
        chapter8.style.display = "none";
        chapter9.style.display = "none";
        nav1.style.color = "white";
        nav2.style.color = "white";
        nav3.style.color = "white";
        nav4.style.color = "white";
        nav5.style.color = "white";
        nav6.style.color = "black";
        nav7.style.color = "white";
        nav8.style.color = "white";
        nav9.style.color = "white";

    } else if (left > ch2_1 && left < ch2_2) {
        chapter1.style.display = "none";
        chapter2.style.display = "none";
        chapter3.style.display = "none";
        chapter4.style.display = "none";
        chapter5.style.display = "none";
        chapter6.style.display = "none";
        chapter7.style.display = "block";
        chapter8.style.display = "none";
        chapter9.style.display = "none";
        nav1.style.color = "white";
        nav2.style.color = "white";
        nav3.style.color = "white";
        nav4.style.color = "white";
        nav5.style.color = "white";
        nav6.style.color = "white";
        nav7.style.color = "black";
        nav8.style.color = "white";
        nav9.style.color = "white";

    } else if (left > ch2_2 && left < ch2_3) {
        chapter1.style.display = "none";
        chapter2.style.display = "none";
        chapter3.style.display = "none";
        chapter4.style.display = "none";
        chapter5.style.display = "none";
        chapter6.style.display = "none";
        chapter7.style.display = "none";
        chapter8.style.display = "block";
        chapter9.style.display = "none";
        nav1.style.color = "white";
        nav2.style.color = "white";
        nav3.style.color = "white";
        nav4.style.color = "white";
        nav5.style.color = "white";
        nav6.style.color = "white";
        nav7.style.color = "white";
        nav8.style.color = "black";
        nav9.style.color = "white";
    }
    else if (left > ch2_3) {
        chapter1.style.display = "none";
        chapter2.style.display = "none";
        chapter3.style.display = "none";
        chapter4.style.display = "none";
        chapter5.style.display = "none";
        chapter6.style.display = "none";
        chapter7.style.display = "none";
        chapter8.style.display = "none";
        chapter9.style.display = "block";
        nav1.style.color = "white";
        nav2.style.color = "white";
        nav3.style.color = "white";
        nav4.style.color = "white";
        nav5.style.color = "white";
        nav6.style.color = "white";
        nav7.style.color = "white";
        nav8.style.color = "white";
        nav9.style.color = "black";
    }
});

document.querySelector("#nav1").addEventListener("click", function(){
// console.log("click")
    document.querySelector('.one').style.display = "block";
    document.querySelector('.two').style.display = "none";
    document.querySelector('.three').style.display = "none";
    document.querySelector('.four').style.display = "none";
    document.querySelector('.five').style.display = "none";
    document.querySelector('.six').style.display = "none";
    document.querySelector('.seven').style.display = "none";
    document.querySelector('.eight').style.display = "none";
    document.querySelector('.nine').style.display = "none";
    document.querySelector("#nav1").style.color = "black";
    document.querySelector("#nav2").style.color = "white";
    document.querySelector("#nav3").style.color = "white";
    document.querySelector("#nav4").style.color = "white";
    document.querySelector("#nav5").style.color = "white";
    document.querySelector("#nav6").style.color = "white";
    document.querySelector("#nav7").style.color = "white";
    document.querySelector("#nav8").style.color = "white";
    document.querySelector("#nav9").style.color = "white";
});

document.querySelector("#nav2").addEventListener("click", function(){
// console.log("click")
    document.querySelector('.one').style.display = "none";
    document.querySelector('.two').style.display = "block";
    document.querySelector('.three').style.display = "none";
    document.querySelector('.four').style.display = "none";
    document.querySelector('.five').style.display = "none";
    document.querySelector('.six').style.display = "none";
    document.querySelector('.seven').style.display = "none";
    document.querySelector('.eight').style.display = "none";
    document.querySelector('.nine').style.display = "none";
    document.querySelector("#nav1").style.color = "white";
    document.querySelector("#nav2").style.color = "black";
    document.querySelector("#nav3").style.color = "white";
    document.querySelector("#nav4").style.color = "white";
    document.querySelector("#nav5").style.color = "white";
    document.querySelector("#nav6").style.color = "white";
    document.querySelector("#nav7").style.color = "white";
    document.querySelector("#nav8").style.color = "white";
    document.querySelector("#nav9").style.color = "white";
});

document.querySelector("#nav3").addEventListener("click", function(){
// console.log("click")
    document.querySelector('.one').style.display = "none";
    document.querySelector('.two').style.display = "none";
    document.querySelector('.three').style.display = "block";
    document.querySelector('.four').style.display = "none";
    document.querySelector('.five').style.display = "none";
    document.querySelector('.six').style.display = "none";
    document.querySelector('.seven').style.display = "none";
    document.querySelector('.eight').style.display = "none";
    document.querySelector('.nine').style.display = "none";
    document.querySelector("#nav1").style.color = "white";
    document.querySelector("#nav2").style.color = "white";
    document.querySelector("#nav3").style.color = "black";
    document.querySelector("#nav4").style.color = "white";
    document.querySelector("#nav5").style.color = "white";
    document.querySelector("#nav6").style.color = "white";
    document.querySelector("#nav7").style.color = "white";
    document.querySelector("#nav8").style.color = "white";
    document.querySelector("#nav9").style.color = "white";
});

document.querySelector("#nav4").addEventListener("click", function(){
// console.log("click")
    document.querySelector('.one').style.display = "none";
    document.querySelector('.two').style.display = "none";
    document.querySelector('.three').style.display = "none";
    document.querySelector('.four').style.display = "block";
    document.querySelector('.five').style.display = "none";
    document.querySelector('.six').style.display = "none";
    document.querySelector('.seven').style.display = "none";
    document.querySelector('.eight').style.display = "none";
    document.querySelector('.nine').style.display = "none";
    document.querySelector("#nav1").style.color = "white";
    document.querySelector("#nav2").style.color = "white";
    document.querySelector("#nav3").style.color = "white";
    document.querySelector("#nav4").style.color = "black";
    document.querySelector("#nav5").style.color = "white";
    document.querySelector("#nav6").style.color = "white";
    document.querySelector("#nav7").style.color = "white";
    document.querySelector("#nav8").style.color = "white";
    document.querySelector("#nav9").style.color = "white";
});

document.querySelector("#nav5").addEventListener("click", function(){
// console.log("click")
    document.querySelector('.one').style.display = "none";
    document.querySelector('.two').style.display = "none";
    document.querySelector('.three').style.display = "none";
    document.querySelector('.four').style.display = "none";
    document.querySelector('.five').style.display = "block";
    document.querySelector('.six').style.display = "none";
    document.querySelector('.seven').style.display = "none";
    document.querySelector('.eight').style.display = "none";
    document.querySelector('.nine').style.display = "none";
    document.querySelector("#nav1").style.color = "white";
    document.querySelector("#nav2").style.color = "white";
    document.querySelector("#nav3").style.color = "white";
    document.querySelector("#nav4").style.color = "white";
    document.querySelector("#nav5").style.color = "black";
    document.querySelector("#nav6").style.color = "white";
    document.querySelector("#nav7").style.color = "white";
    document.querySelector("#nav8").style.color = "white";
    document.querySelector("#nav9").style.color = "white";
});

document.querySelector("#nav6").addEventListener("click", function(){
// console.log("click")
    document.querySelector('.one').style.display = "none";
    document.querySelector('.two').style.display = "none";
    document.querySelector('.three').style.display = "none";
    document.querySelector('.four').style.display = "none";
    document.querySelector('.five').style.display = "none";
    document.querySelector('.six').style.display = "block";
    document.querySelector('.seven').style.display = "none";
    document.querySelector('.eight').style.display = "none";
    document.querySelector('.nine').style.display = "none";
    document.querySelector("#nav1").style.color = "white";
    document.querySelector("#nav2").style.color = "white";
    document.querySelector("#nav3").style.color = "white";
    document.querySelector("#nav4").style.color = "white";
    document.querySelector("#nav5").style.color = "white";
    document.querySelector("#nav6").style.color = "black";
    document.querySelector("#nav7").style.color = "white";
    document.querySelector("#nav8").style.color = "white";
    document.querySelector("#nav9").style.color = "white";
});

document.querySelector("#nav7").addEventListener("click", function(){
// console.log("click")
    document.querySelector('.one').style.display = "none";
    document.querySelector('.two').style.display = "none";
    document.querySelector('.three').style.display = "none";
    document.querySelector('.four').style.display = "none";
    document.querySelector('.five').style.display = "none";
    document.querySelector('.six').style.display = "none";
    document.querySelector('.seven').style.display = "block";
    document.querySelector('.eight').style.display = "none";
    document.querySelector('.nine').style.display = "none";
    document.querySelector("#nav1").style.color = "white";
    document.querySelector("#nav2").style.color = "white";
    document.querySelector("#nav3").style.color = "white";
    document.querySelector("#nav4").style.color = "white";
    document.querySelector("#nav5").style.color = "white";
    document.querySelector("#nav6").style.color = "white";
    document.querySelector("#nav7").style.color = "black";
    document.querySelector("#nav8").style.color = "white";
    document.querySelector("#nav9").style.color = "white";
});

document.querySelector("#nav8").addEventListener("click", function(){
// console.log("click")
    document.querySelector('.one').style.display = "none";
    document.querySelector('.two').style.display = "none";
    document.querySelector('.three').style.display = "none";
    document.querySelector('.four').style.display = "none";
    document.querySelector('.five').style.display = "none";
    document.querySelector('.six').style.display = "none";
    document.querySelector('.seven').style.display = "none";
    document.querySelector('.eight').style.display = "block";
    document.querySelector('.nine').style.display = "none";
    document.querySelector("#nav1").style.color = "white";
    document.querySelector("#nav2").style.color = "white";
    document.querySelector("#nav3").style.color = "white";
    document.querySelector("#nav4").style.color = "white";
    document.querySelector("#nav5").style.color = "white";
    document.querySelector("#nav6").style.color = "white";
    document.querySelector("#nav7").style.color = "white";
    document.querySelector("#nav8").style.color = "black";
    document.querySelector("#nav9").style.color = "white";
});

document.querySelector("#nav9").addEventListener("click", function(){
// console.log("click")
    document.querySelector('.one').style.display = "none";
    document.querySelector('.two').style.display = "none";
    document.querySelector('.three').style.display = "none";
    document.querySelector('.four').style.display = "none";
    document.querySelector('.five').style.display = "none";
    document.querySelector('.six').style.display = "none";
    document.querySelector('.seven').style.display = "none";
    document.querySelector('.eight').style.display = "none";
    document.querySelector('.nine').style.display = "block";
    document.querySelector("#nav1").style.color = "white";
    document.querySelector("#nav2").style.color = "white";
    document.querySelector("#nav3").style.color = "white";
    document.querySelector("#nav4").style.color = "white";
    document.querySelector("#nav5").style.color = "white";
    document.querySelector("#nav6").style.color = "white";
    document.querySelector("#nav7").style.color = "white";
    document.querySelector("#nav8").style.color = "white";
    document.querySelector("#nav9").style.color = "black";
});

document.querySelectorAll(".footnote-marker").forEach((footnotemarkers) => {
    footnotemarkers.addEventListener("mouseenter", function(){
// console.log(footnotemarkers.classList[1])
        document.querySelectorAll(".footnote-content").forEach((footnotecontents) => {
            if (footnotecontents.classList.contains(footnotemarkers.classList[1])){
                footnotecontents.style.display = "block";
            }

        });

    })
    footnotemarkers.addEventListener("mouseleave", function(){
        document.querySelectorAll(".footnote-content").forEach((footnotecontents) => {
            footnotecontents.style.display = "none";
        })
    })
});

// document.querySelector(".infobar").addEventListener("click", function(){
//   this.classList.toggle("fullheight");
//   document.querySelector(".infobartext").classList.toggle("visible");
//
// })

// mobile starts here


$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});


if(window.innerWidth < 779) {

    document.querySelectorAll(".footnote-marker").forEach((footnotemarkers) => {
        footnotemarkers.addEventListener("click", function(){
// console.log("click")
            document.querySelectorAll(".footnote-content").forEach((footnotecontents) => {
                if (footnotecontents.classList.contains(footnotemarkers.classList[1])){
                    // document.querySelector(".footnote-content").classList.toggle("visible");
                    footnotecontents.style.display = "block";
                }

            });

        })
// footnotemarkers.addEventListener("click", function(){
//   document.querySelectorAll(".footnote-content").forEach((footnotecontents) => {
//     footnotecontents.style.display = "none";
//   })
// })
    });

// image scroll MOBILE

    let h1 = window.scrollY + document.querySelector('#one2').getBoundingClientRect().top;
    let h2 = window.scrollY + document.querySelector('#two2').getBoundingClientRect().top;
    let h3 = window.scrollY + document.querySelector('#three2').getBoundingClientRect().top;
    let h4 = window.scrollY + document.querySelector('#four2').getBoundingClientRect().top;
    let h5 = window.scrollY + document.querySelector('#five2').getBoundingClientRect().top;
    let h6 = window.scrollY + document.querySelector('#six2').getBoundingClientRect().top;
    let h7 = window.scrollY + document.querySelector('#seven2').getBoundingClientRect().top;
    let h8 = window.scrollY + document.querySelector('#eight2').getBoundingClientRect().top;
    let h9 = window.scrollY + document.querySelector('#nine2').getBoundingClientRect().top;

    let image1 = document.querySelector("#image-one");
    let image2 = document.querySelector("#image-two");
    let image3 = document.querySelector("#image-three");
    let image4 = document.querySelector("#image-four");
    let image5 = document.querySelector("#image-five");
    let image6 = document.querySelector("#image-six");
    let image7 = document.querySelector("#image-seven");
    let image8 = document.querySelector("#image-eight");
    let image9 = document.querySelector("#image-nine");
    let image10 = document.querySelector("#image-ten");

    let nav1 = document.querySelector('#nav1');
    let nav2 = document.querySelector('#nav2');
    let nav3 = document.querySelector('#nav3');
    let nav4 = document.querySelector('#nav4');
    let nav5 = document.querySelector('#nav5');
    let nav6 = document.querySelector('#nav6');
    let nav7 = document.querySelector('#nav7');
    let nav8 = document.querySelector('#nav8');
    let nav9 = document.querySelector('#nav9');

    const scrollContainer = document.querySelector("main");

    addEventListener("scroll", (event) => {


        let top = window.pageYOffset;
        // console.log(top);
        if (top <= h1) {
            image1.style.display = "block";
            image2.style.display = "none";
            image3.style.display = "none";
            image4.style.display = "none";
            image5.style.display = "none";
            image6.style.display = "none";
            image7.style.display = "none";
            image8.style.display = "none";
            image9.style.display = "none";
            nav1.style.color = "black";
            nav2.style.color = "white";
            nav3.style.color = "white";
            nav4.style.color = "white";
            nav5.style.color = "white";
            nav6.style.color = "white";
            nav7.style.color = "white";
            nav8.style.color = "white";
            nav9.style.color = "white";
        } else if (top > h1 && top < h2) {
            image1.style.display = "none";
            image2.style.display = "block";
            image3.style.display = "none";
            image4.style.display = "none";
            image5.style.display = "none";
            image6.style.display = "none";
            image7.style.display = "none";
            image8.style.display = "none";
            image9.style.display = "none";
            // console.log('hey');
        } else if (top > h2 && top < h3) {
            image1.style.display = "none";
            image2.style.display = "none";
            image3.style.display = "block";
            image4.style.display = "none";
            image5.style.display = "none";
            image6.style.display = "none";
            image7.style.display = "none";
            image8.style.display = "none";
            image9.style.display = "none";
        } else if (top > h3 && top < h4) {
            image1.style.display = "none";
            image2.style.display = "none";
            image3.style.display = "none";
            image4.style.display = "block";
            image5.style.display = "none";
            image6.style.display = "none";
            image7.style.display = "none";
            image8.style.display = "none";
            image9.style.display = "none";
        } else if (top > h4 && top < h5) {
            image1.style.display = "none";
            image2.style.display = "none";
            image3.style.display = "none";
            image4.style.display = "none";
            image5.style.display = "block";
            image6.style.display = "none";
            image7.style.display = "none";
            image8.style.display = "none";
            image9.style.display = "none";
        } else if (top > h5 && top < h6) {
            image1.style.display = "none";
            image2.style.display = "none";
            image3.style.display = "none";
            image4.style.display = "none";
            image5.style.display = "none";
            image6.style.display = "block";
            image7.style.display = "none";
            image8.style.display = "none";
            image9.style.display = "none";
        } else if (top > h6 && top < h7) {
            image1.style.display = "none";
            image2.style.display = "none";
            image3.style.display = "none";
            image4.style.display = "none";
            image5.style.display = "none";
            image6.style.display = "none";
            image7.style.display = "block";
            image8.style.display = "none";
            image9.style.display = "none";
        } else if (top > h7 && top < h8) {
            image1.style.display = "none";
            image2.style.display = "none";
            image3.style.display = "none";
            image4.style.display = "none";
            image5.style.display = "none";
            image6.style.display = "none";
            image7.style.display = "none";
            image8.style.display = "block";
            image9.style.display = "none";
        } else if (top > h8 && top < h9) {
            image1.style.display = "none";
            image2.style.display = "none";
            image3.style.display = "none";
            image4.style.display = "none";
            image5.style.display = "none";
            image6.style.display = "none";
            image7.style.display = "none";
            image8.style.display = "none";
            image9.style.display = "block";
        }
        else if (top > h9) {
            image1.style.display = "none";
            image2.style.display = "none";
            image3.style.display = "none";
            image4.style.display = "none";
            image5.style.display = "none";
            image6.style.display = "none";
            image7.style.display = "none";
            image8.style.display = "none";
            image9.style.display = "block";
        }
    });


}
