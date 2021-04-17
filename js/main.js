function checkRepeat() {
  if (
    document.getElementById("password").value !==
    document.getElementById("repeat_password").value
  ) {
    console.log("ar emtxeva");
    document.querySelector(".warning").innerHTML = "პაროლები არ ემთხვევა!";
  }
}

//  let regBtn = document.querySelector('.reg-btn')
//   regBtn.addEventListener('click', (event)=>{
//     event.preventDefault()
//   })

function slideRegistration() {
  let registration = document.querySelector(".regist");
  registration.classList.toggle("hidden");
  let authForm = document.querySelector(".login");
  authForm.classList.toggle("hidden");

  setTimeout(function () {
    let regSlider = document.querySelector(".regist_slider");
    regSlider.classList.toggle("hidden");

    let authSlider = document.querySelector(".login_slider");
    authSlider.classList.toggle("hidden");

    let background = document.querySelector(".blue_bg");
    background.classList.toggle("transform");
  }, 1);
}

let regSliderBtn = document.querySelector(".regist_slider_btn");
regSliderBtn.addEventListener("click", slideRegistration);

let authSliderBtn = document.querySelector(".login_slider_btn");
authSliderBtn.addEventListener("click", slideRegistration);

const email = document.getElementById("login_email");
const loginPassword = document.getElementById("login_password");
const loginForm = document.getElementById("login_form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (email.value === "" || email.value === null) {
    console.log("Asd");
    email.classList.add("error_syle");
    email.placeholder = " შეავსეთ ყველა ველი";
    // document.querySelector(".input_error").innerHTML =
    //   " გთხოვთ შეიყვანოთ მეილის მისამართი";
  } else if (loginPassword.value === "" || loginPassword.value === null) {
    loginPassword.classList.add("error_syle");
    loginPassword.placeholder = " შეავსეთ ყველა ველი";
  }
});
