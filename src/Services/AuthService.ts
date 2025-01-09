import { User } from "../data/interfaces";

class AuthService {
  // function (string) => boolean
  // used to make sure that the string passed is an email pattern
  public static isValidEmail(email: string) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  // function (string) => boolean
  // used to make sure that the string passed is a Syrian phone number pattern
  public static isValidPhoneNumber(phoneNumber: string) {
    const phonePattern = /^\+9639\d{8}$/;
    return phonePattern.test(phoneNumber);
  }
  // function (string) => string
  //used to validate the string passed to match the password requirements
  private static validatePassword(password: string) {
    let error = "";
    if (password.length == 0) {
      error = "Password field is required";
    } else {
      if (password.length < 8) {
        error = "Password should be 8 charechters or more";
      }
    }
    return error;
  }

  // function (user[], user) => {errors, boolean}
  // this function is used to validate the signing up fields requirments
  public static SignUserUn(users: User[], loginUser: User) {
    // the errors messages
    let errors: User = {
      fullName: "",
      email: "",
      password: "",
    };
    let errorsExits = false;
    // validating the full name
    if (loginUser.fullName.length == 0) {
      errors.fullName = "Full Name Field is required";
      errorsExits = true;
    }
    // validating the email
    if (loginUser.email.length == 0) {
      errors.email = "Email field is required";
      errorsExits = true;
    } else {
      if (!this.isValidEmail(loginUser.email)) {
        errors.email = "This field should be an Email!";
      } else {
        const userAreadyExists = users.find(
          (user) => user.email == loginUser.email
        );
        if (userAreadyExists) {
          errors.email = "Email already in use!";
          errorsExits = true;
        }
      }
    }
    // validating the password
    const passwordError = this.validatePassword(loginUser.password);
    if (passwordError) {
      errors.password = passwordError;
      errorsExits = true;
    }

    return { errors, errorsExits };
  }

  // function (user[], user) => {errors, boolean}
  // this function is used to validate the logging in fields requirments
  public static logUserIn(email: string, password: string) {
    let errors = {
      fullName: "",
      email: "",
      password: "",
    };
    let errorsExits;

    //validating the password
    const passwordError = this.validatePassword(password);
    if (passwordError) {
      errors.password = passwordError;
      errorsExits = true;
    }

    //validating the email
    if (email.length == 0) {
      errors.email = "Email field is required";
      errorsExits = true;
    } else {
      if (!this.isValidEmail(email)) {
        errors.email = "This field should be an Email!";
        errorsExits = true;
      }
    }

    return { errors, errorsExits };
  }

  public static rememberUser(user: User) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  public static getRememberedUser() {
    const storedUser = localStorage.getItem("currentUser");
    const user = storedUser ? JSON.parse(storedUser) : null;
    return user;
  }

  public static logRememberedUserOut() {
    localStorage.removeItem("currentUser");
  }

  public static isUserAnAdmin(user: User) {
    return user.email == "fadinoumih18@gmail.com";
  }
}

export default AuthService;
