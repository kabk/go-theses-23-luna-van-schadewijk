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
                    }
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

if(window.innerWidth < 779) {

  document.querySelectorAll(".footnote-marker").forEach((footnotemarkers) => {
    footnotemarkers.addEventListener("click", function(){
      console.log("click")
      document.querySelectorAll(".footnote-content").forEach((footnotecontents) => {
        if (footnotecontents.classList.contains(footnotemarkers.classList[1])){
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

  let h1 = window.scrollY + document.querySelector('.one').getBoundingClientRect().top;
  let h2 = window.scrollY + document.querySelector('.two').getBoundingClientRect().top;
  let h3 = window.scrollY + document.querySelector('.three').getBoundingClientRect().top;
  let h4 = window.scrollY + document.querySelector('.four').getBoundingClientRect().top;
  let h5 = window.scrollY + document.querySelector('.five').getBoundingClientRect().top;
  let h6 = window.scrollY + document.querySelector('.six').getBoundingClientRect().top;
  let h7 = window.scrollY + document.querySelector('.seven').getBoundingClientRect().top;
  let h8 = window.scrollY + document.querySelector('.eight').getBoundingClientRect().top;
  let h9 = window.scrollY + document.querySelector('.nine').getBoundingClientRect().top;

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

  const scrollContainer = document.querySelector("main");

  scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollTop += evt.deltaX;

              let top = scrollContainer.scrollTop;

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
              } else if (left > h1 && left < h2) {
                image1.style.display = "none";
                image2.style.display = "block";
                image3.style.display = "none";
                image4.style.display = "none";
                image5.style.display = "none";
                image6.style.display = "none";
                image7.style.display = "none";
                image8.style.display = "none";
                image9.style.display = "none";
              } else if (left > h2 && left < h3) {
                image1.style.display = "none";
                image2.style.display = "none";
                image3.style.display = "block";
                image4.style.display = "none";
                image5.style.display = "none";
                image6.style.display = "none";
                image7.style.display = "none";
                image8.style.display = "none";
                image9.style.display = "none";
              } else if (left > h3 && left < h4) {
                image1.style.display = "none";
                image2.style.display = "none";
                image3.style.display = "none";
                image4.style.display = "block";
                image5.style.display = "none";
                image6.style.display = "none";
                image7.style.display = "none";
                image8.style.display = "none";
                image9.style.display = "none";
              } else if (left > h4 && left < h5) {
                image1.style.display = "none";
                image2.style.display = "none";
                image3.style.display = "none";
                image4.style.display = "none";
                image5.style.display = "block";
                image6.style.display = "none";
                image7.style.display = "none";
                image8.style.display = "none";
                image9.style.display = "none";
              } else if (left > h5 && left < h6) {
                image1.style.display = "none";
                image2.style.display = "none";
                image3.style.display = "none";
                image4.style.display = "none";
                image5.style.display = "none";
                image6.style.display = "block";
                image7.style.display = "none";
                image8.style.display = "none";
                image9.style.display = "none";
              } else if (left > h6 && left < h7) {
                image1.style.display = "none";
                image2.style.display = "none";
                image3.style.display = "none";
                image4.style.display = "none";
                image5.style.display = "none";
                image6.style.display = "none";
                image7.style.display = "block";
                image8.style.display = "none";
                image9.style.display = "none";
              } else if (left > h7 && left < h8) {
                image1.style.display = "none";
                image2.style.display = "none";
                image3.style.display = "none";
                image4.style.display = "none";
                image5.style.display = "none";
                image6.style.display = "none";
                image7.style.display = "none";
                image8.style.display = "block";
                image9.style.display = "none";
              } else if (left > h8 && left < h9) {
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
              else if (left > h9) {
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
