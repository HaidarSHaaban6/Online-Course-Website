import { User } from "../data/interfaces";

class AuthService {
  private static isValidEmail(email: string) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
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

  public static SignUserIn(users: User[], loginUser: User) {
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
}

export default AuthService;
