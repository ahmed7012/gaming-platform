// ? =============> Global ===============>
const btnLogin = document.getElementById("btnLogin");


// ! =============> Functions ===============>
// btnLogin.addEventListener('click',function(){
//    location.href = '../index.html'
// })
// function setForm() {
//    const user = {
//       email: inputs[0].value,
//       password: inputs[1].value,
//    };

//    console.log(user);
//    btnLogin.addEventListener('click',function(){
//       console.log('aaaa')
//    })}

// function direct() {


// }

// function loginForm() {


   
// //    const api = await fetch(`https://sticky-note-fe.vercel.app/signin`, {
// //       method: "post",
// //       body: JSON.stringify(userData),
// //       headers: {
// //          Accept: "application/json",
// //          "Content-Type": "application/json",
// //       },
// //    });

// //    const response = await api.json();

// //    if (response.message === "success") {
// //       localStorage.setItem("uToken", response.token);
// //       location.href = "./home.html";
// //    } else {
// //       document.getElementById("msg").innerHTML = response.message;
// //    }

// //    console.log(response);
// }

//  =============> Validation ===============>

// function validationEmail() {
//    const regexStyle =
//       /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

//    if (regexStyle.test(inputs[0].value)) {
//       // el tmam
//       inputs[0].classList.add("is-valid");
//       inputs[0].classList.remove("is-invalid");
//       return true;
//    } else {
//       //el mesh tmam

//       inputs[0].classList.add("is-invalid");
//       inputs[0].classList.remove("is-valid");

//       return false;
//    }
// }
// function validationPassword() {
//    const regexStyle = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

//    if (regexStyle.test(inputs[1].value)) {
//       // el tmam
//       inputs[1].classList.add("is-valid");
//       inputs[1].classList.remove("is-invalid");
//       return true;
//    } else {
//       //el mesh tmam

//       inputs[1].classList.add("is-invalid");
//       inputs[1].classList.remove("is-valid");

//       return false;
//    }
// }
