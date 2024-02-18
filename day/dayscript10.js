/* day10 */

/*************
    Intro Animation 
**************/

/*************************
Effect 1
**************************/

// let intro = document.querySelector(".intro");
// let logo = document.querySelector(".logo-header");
// let logoSpan = document.querySelectorAll(".logo");
// let subBox = document.querySelector(".sub-box-container");
// let close = document.querySelector("#close-mark");
// let form = document.querySelector("#subscription");
// let main = document.querySelector(".dimmer-main");
// let header = document.querySelector(".dimmer-header");

// function effect1(timeoutOverAll, bgTimeout) {
//   setTimeout(() => {
//     // logo appear
//     logoSpan.forEach((span, index) => {
//       setTimeout(() => {
//         span.classList.remove("fade");
//         span.classList.add("active");
//       }, (index + 1) * 100);
//     });

//     // logo disappear
//     setTimeout(() => {
//       logoSpan.forEach((span, index) => {
//         setTimeout(() => {
//           span.classList.remove("active");
//           span.classList.add("fade");
//         }, (index + 1) * 80); //3
//       });
//     }, 1500); //2

//     // bg disappear
//     setTimeout(() => {
//       intro.style.top = "-100vh";
//       intro.style.opacity = "0";
//       subBox.style.top = "50%";
//       subBox.style.display = "flex";
//       main.style.opacity = "0.1";
//       header.style.opacity = "0.5";
//     }, bgTimeout);
//   }, timeoutOverAll); // 1
// }

// function showEffect1() {
//   intro.style.height = "100vh";
//   intro.style.opacity = "1";
//   intro.style.top = "0";
// }

// window.addEventListener("DOMContentLoaded", () => {
//   showEffect1();
//   effect1(300, 2500);
// });

// document.querySelector("#effect1Button").addEventListener("click", () => {
//   showEffect1();
//   effect1(400, 2800);
// });

// /*************************
// Subscription Box
// **************************/

// close.addEventListener("click", () => {
//   subBox.style.display = "none";
//   subBox.style.top = "-100vh";
//   main.style.opacity = "1";
//   header.style.opacity = "1";
// });

/*************************
Effect 2
**************************/

let loader = document.querySelector("#preloader");

// window.addEventListener("load", () => {
//   loader.style.display = "none";
// });

document.querySelector("#effect2Button").addEventListener("click", () => {
  console.log("click2");
  loader.style.display = "block";

  setTimeout(() => {
    loader.style.display = "none";
    loader.style.transition = "1s ease-in-out";
  }, 3000);
});

/*************************
Effect 3
**************************/

let effect3 = document.querySelector(".effect3");
let titles = document.querySelectorAll(".title");
let blocks = document.querySelectorAll(".block");

document.querySelector("#effect3Button").addEventListener("click", () => {
  setTimeout(() => {
    console.log("clicked3");

    // slogan appear
    effect3.style.top = "0";

    // each slide
    titles.forEach((title, idx) => {
      setTimeout(() => {
        setTimeout(() => {
          title.classList.remove("fade");
          title.classList.add("active");
        });

        setTimeout(() => {
          title.classList.remove("active");
          title.classList.add("fade");
        }, 700);
      }, (idx + 1) * 1450); // end each slide
    });

    // slogan appear end

    // block appear
    setTimeout(() => {
      blocks.forEach((block, idx) => {
        setTimeout(() => {
          block.classList.remove("fade");
          block.classList.add("active");
        });
      });
    }, 5300);

    // block disappear
    setTimeout(() => {
      blocks.forEach((block, idx) => {
        setTimeout(() => {
          block.classList.remove("active");
          block.classList.add("fade");
        }, (idx + 1) * 200);
      });
    }, 6200);

    // section disappear
    setTimeout(() => {
      effect3.style.top = "-100vh";
    }, 9000);
  }); // whole section
});

/*************************
Effect 4 - 未完
**************************/

let effect4 = document.querySelector(".effect4");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let effect4Button2 = document.querySelector("#effect4Button-2");
let effect4Button3 = document.querySelector("#effect4Button-3");

document.querySelector("#effect4Button").addEventListener("click", () => {
  TweenMax.to(effect4, 1, {
    // element, animation duration, {motion 冇單位}
    top: "0",
    zIndex: "20",
  });
});

effect4Button2.addEventListener("click", () => {
  console.log("c2");
  right.style.background = "#F2E0D2";
  right.style.color = "#D0604C";
  left.style.background = "#D0604C";
  left.style.color = "#F2E0D2";
  effect4Button2.style.display = "none";
  effect4Button3.style.visibility = "unset";
});

effect4Button3.addEventListener("click", () => {
  TweenMax.to(effect4, 1, {
    top: "-100vh",
  });
});

/*************************
Effect 5 - hover arrow
**************************/

let elements = document.querySelectorAll(".hoverEffect");

//為每個element 加入 arrow span
hoverElements = document.querySelectorAll(".hoverEffect");
hoverElements.forEach((hoverElement) => {
  let arrowSpan = document.createElement("span");
  arrowSpan.innerHTML = `<span class="cu-arrow-con"><i class="fa-solid fa-arrow-right cu-arrow"></i></span>`;
  hoverElement.appendChild(arrowSpan);
  // hoverElement.addEventListener("mouseover", handleHover);
  // hoverElement.addEventListener("mouseout", handleMouseout);
});
