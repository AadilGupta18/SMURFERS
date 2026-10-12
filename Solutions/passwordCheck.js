// Password Validator
// Write a Python program that validates a user's password.

// A password is considered valid if:
// It contains at least 8 characters
// It contains at least one uppercase letter
// It contains at least one lowercase letter
// It contains at least one digit

// The program should display whether the password is valid or invalid.

function passwordCheck(password) {
  let has_upper = false;
  let has_lower = false;
  let has_digit = false;

  if (password.length >= 8) {
    // We need to check the length of the password so added .length
    //password can contain atleast 8 digits so added "=" here.

    for (let char of password) {
      if (/[0-9]/.test(char)) {
        has_digit = true; // if the password contains a digit this variable should turned to true.
      } else if (char == char.toUpperCase()) {
        has_upper = true; // if the password contains an uppercase letter this variable should turned to true.
      } else if (char == char.toLowerCase()) {
        has_lower = true; // the password contains a lowercase letter and this variable should be turned to true.
      }
    }

    if (has_upper && has_lower && has_digit) {
      //We need to verify if all the statements are true so replaced "||" (OR) with "&&" (AND).
      console.log("Valid Password");
    } else {
      console.log("Invalid Password");
    }
  } else {
    console.log(
      "Invalid Password because password should contain atleast 8 digits", //Better error message.
    );
  }
}
