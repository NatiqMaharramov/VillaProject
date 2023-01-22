let slider_container_start = document.querySelector(".slider_container_start");




fetch("data.json")
  .then((resp) => resp.json())
  .then((data) => {
    // console.log(data);

    data.forEach((x) => {
      slider_container_start.innerHTML += `
        <div class="slider_card">
        <i class="fa-solid fa-chevron-left left"></i>
        <div class="sldrr">
        <img class="slider_img" id='sldr_img' src="${x.img}" >
        <img class="slider_img" id='sldr_img' src="${x.img2}" >
      </div>

        <div class="slider_content">
          <p>${x.price}</p>

          <button class="btn_view">View Details</button>
        </div>
        <div class="slider_btn">
          <button>
            <img src="images/Vector (23).png" alt="" />
            <div><span>1</span> Bedrooms</div>
          </button>
          <button>
            <img src="images/Vector (24).png" alt="" />
            <div><span>1</span> Bath</div>
          </button>
          <button>535 sq ft</button>
        </div>
        <i class="fa-solid fa-chevron-right right"></i>
      </div>
        
        
        
        `;
    });



    let left = document.querySelectorAll(".left");
    let right = document.querySelectorAll(".right");
    let slider_img = document.querySelectorAll(".slider_img");
 


    for (let j = 0; j < right.length; j++) {
      right[j].addEventListener("click", () => {

        console.log(j);
        let px = -(slider_img[j].clientWidth);
        let k=j*2;
        for (let i = k; i < k+2; i++) {
          slider_img[i].style.transform = `translateX(${px}px) `
          slider_img[i].style.transition='1s';
          // console.log(slider_img[i]);
        }
        // console.log("-----");
  
      });

      left[j].addEventListener("click", () => {
        let px = 0;
        let k=j*2;
        for (let i = k; i < k+2; i++) {
          slider_img[i].style.transform = `translateX(${px}px)`;
        }
      });
    }
  });












// ================================OTHER VERSION SLIDER========================.

//   let right = [...document.querySelectorAll(".right")]
//   let left = [...document.querySelectorAll(".left")];    


//   right.forEach((a)=>{
//       a.addEventListener("click",(e)=>{     
//         console.log(e.target.parentElement.children[1].children);     
//              let px = -577;
//              let b= e.target.parentElement.children[1].children
//               for (let i = 0; i < 2; i++) {
//                 b[i].style.transform = `translateX(${px}px)`
//                 ;
//               }
//       })
//   })

//   left.forEach(a=>{
//     a.addEventListener("click",(e)=>{
//         let px = 0;
//         let b= e.target.parentElement.children[1].children
//             for (let i = 0; i < 2; i++) {
//               b[i].style.transform = `translateX(${px}px)`;
//             }
  
//     })
// })

