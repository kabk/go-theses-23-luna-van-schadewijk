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
                    } else if (left > abs && left < ch1) {
                      chapter1.style.display = "none";
                      chapter2.style.display = "block";
                      chapter3.style.display = "none";
                      chapter4.style.display = "none";
                      chapter5.style.display = "none";
                      chapter6.style.display = "none";
                      chapter7.style.display = "none";
                      chapter8.style.display = "none";
                    } else if (left > ch1 && left < ch1_1) {
                      chapter1.style.display = "none";
                      chapter2.style.display = "none";
                      chapter3.style.display = "block";
                      chapter4.style.display = "none";
                      chapter5.style.display = "none";
                      chapter6.style.display = "none";
                      chapter7.style.display = "none";
                      chapter8.style.display = "none";
                    } else if (left > ch1_1 && left < ch1_2) {
                      chapter1.style.display = "none";
                      chapter2.style.display = "none";
                      chapter3.style.display = "block";
                      chapter4.style.display = "none";
                      chapter5.style.display = "none";
                      chapter6.style.display = "none";
                      chapter7.style.display = "none";
                      chapter8.style.display = "none";
                    } else if (left > ch1_2 && left < ch1_3) {
                      chapter1.style.display = "none";
                      chapter2.style.display = "none";
                      chapter3.style.display = "none";
                      chapter4.style.display = "block";
                      chapter5.style.display = "none";
                      chapter6.style.display = "none";
                      chapter7.style.display = "none";
                      chapter8.style.display = "none";
                    } else if (left > ch1_3 && left < ch2) {
                      chapter1.style.display = "none";
                      chapter2.style.display = "none";
                      chapter3.style.display = "none";
                      chapter4.style.display = "none";
                      chapter5.style.display = "block";
                      chapter6.style.display = "none";
                      chapter7.style.display = "none";
                      chapter8.style.display = "none";
                    } else if (left > ch2 && left < ch2_1) {
                      chapter1.style.display = "none";
                      chapter2.style.display = "none";
                      chapter3.style.display = "none";
                      chapter4.style.display = "none";
                      chapter5.style.display = "none";
                      chapter6.style.display = "block";
                      chapter7.style.display = "none";
                      chapter8.style.display = "none";
                    } else if (left > ch2_1 && left < ch2_2) {
                      chapter1.style.display = "none";
                      chapter2.style.display = "none";
                      chapter3.style.display = "none";
                      chapter4.style.display = "none";
                      chapter5.style.display = "none";
                      chapter6.style.display = "none";
                      chapter7.style.display = "block";
                      chapter8.style.display = "none";
                    } else if (left > ch2_2 && left < ch2_3) {
                      chapter1.style.display = "none";
                      chapter2.style.display = "none";
                      chapter3.style.display = "none";
                      chapter4.style.display = "none";
                      chapter5.style.display = "none";
                      chapter6.style.display = "none";
                      chapter7.style.display = "block";
                      chapter8.style.display = "none";
                    }
                    else if (left > ch2_3) {
                      chapter1.style.display = "none";
                      chapter2.style.display = "none";
                      chapter3.style.display = "none";
                      chapter4.style.display = "none";
                      chapter5.style.display = "none";
                      chapter6.style.display = "none";
                      chapter7.style.display = "none";
                      chapter8.style.display = "block";
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

document.querySelector(".infobar").addEventListener("click", function(){
  this.classList.toggle("fullheight");
  document.querySelector(".infobartext").classList.toggle("visible");

})

// mobile starts here

if(window.innerWidth < 779) {

  document.querySelectorAll(".footnote-marker").forEach((footnotemarkers) => {
    footnotemarkers.addEventListener("click", function(){
      // console.log(footnotemarkers.classList[1])
      document.querySelectorAll(".footnote-content").forEach((footnotecontents) => {
        if (footnotecontents.classList.contains(footnotemarkers.classList[1])){
          footnotecontents.style.display = "block";
        }

      });

    })
    footnotemarkers.addEventListener("click", function(){
      document.querySelectorAll(".footnote-content").forEach((footnotecontents) => {
        footnotecontents.style.display = "none";
      })
    })
  });
}
