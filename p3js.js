let name = document.querySelector(".name");
let email = document.querySelector(".email");
let phone = document.querySelector(".phnumber");

let nameerror = document.querySelector(".name-error");
let emailerror = document.querySelector(".email-error");
let phoneerror = document.querySelector(".phnumber-error");

const valthis = () => {
  document.querySelector(".box-1").style.opacity = "0";
  document.querySelector(".box-2").style.opacity = "0";
  document.querySelector(".box-3").style.opacity = "0";
  nameerror.innerHTML = "";
  emailerror.innerHTML = "";
  phoneerror.innerHTML = "";
  email.style.borderColor = "#3c88da";
  name.style.borderColor = "#3c88da";
  phone.style.borderColor = "#3c88da";
  //name///////////////////////////////////////////////////////////
  if (name.value == "") {
    nameerror.innerHTML = "Please enter a name";
    document.querySelector(".box-1").style.opacity = "1";
  } else if (name.value.match(/[@#$%^&*+()!~":}{?><|?}]/)) {
    nameerror.innerHTML = "name can't have signs";
    document.querySelector(".box-1").style.opacity = "1";
  } else if (/\d/.test(name.value)) {
    nameerror.innerHTML = "name can't have digits";
    document.querySelector(".box-1").style.opacity = "1";
  } else if (name.value.length <= 4) {
    document.querySelector(".box-1").style.opacity = "1";
    nameerror.innerHTML = "name should be more than 5 characters";
  } else {
    name.style.borderColor = "#42e272";
  }
  //email////////////////////////////////////////////////////////
  if (email.value == "") {
    emailerror.innerHTML = "Please enter an email";
    document.querySelector(".box-2").style.opacity = "1";
  } else if (/@/.test(email.value) == false) {
    emailerror.innerHTML = "email should contain '@'";
    document.querySelector(".box-2").style.opacity = "1";
  } else if (/\w/.test(email.value) == false) {
    emailerror.innerHTML = "email is not valid";
    document.querySelector(".box-2").style.opacity = "1";
  } else if (email.value.length <= 6) {
    document.querySelector(".box-2").style.opacity = "1";
    emailerror.innerHTML = "email should be more than 7 characters";
  } else if (/\.com/.test(email.value) == false) {
    document.querySelector(".box-2").style.opacity = "1";
    emailerror.innerHTML = "email is not valid '.com'";
  } else if (email.value.match(/\s/) != null) {
    document.querySelector(".box-2").style.opacity = "1";
    emailerror.innerHTML = "email cant have space";
  } else {
    email.style.borderColor = "#42e272";
    document.querySelector(".box-2").style.opacity = "0";
  }
  //phone////////////////////////////////////////////////////////
  if (phone.value == "") {
    phoneerror.innerHTML = "Please enter a phone";
    document.querySelector(".box-3").style.opacity = "1";
  } else if (phone.value.match(/[@!@#$%^&*()_+|?,.<>]/)) {
    phoneerror.innerHTML = "phone can't have signs";
    document.querySelector(".box-3").style.opacity = "1";
  } else if (phone.value.match(/\D/g) != null) {
    phoneerror.innerHTML = "phone can't have word char";
    document.querySelector(".box-3").style.opacity = "1";
  } else if (phone.value.length <= 7) {
    document.querySelector(".box-3").style.opacity = "1";
    phoneerror.innerHTML = "phone should be more than 8 digits";
  } else {
    phone.style.borderColor = "#42e272";
    document.querySelector(".box-3").style.opacity = "0";
  }
};
