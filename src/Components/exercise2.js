//Email Validation using built in functions in JS

function validateEmail(str) {
  let email = str.trim();
  let l = email.length;

  if (
    l > 250 ||
    email.split("@").length !== 2 ||
    email[0] === "@" ||
    email[l - 1] === "@" ||
    email.lastIndexOf(".") <= (email.indexOf("@") + 1)
  ) {
    return false;
  }

  return true;
}

console.log(validateEmail("ethj.w.gf@.h"));
