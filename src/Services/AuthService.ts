import { User } from "../data/interfaces";

class AuthService {
  private static isValidEmail(email: string) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  public static logUserIn(users: User[], loginUser: User) {
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
    if (loginUser.password.length == 0) {
      errors.password = "Password field is required";
      errorsExits = true;
    } else {
      if (loginUser.password.length < 8) {
        errors.password = "Password should be 8 charechters or more";
        errorsExits = true;
      }
    }

    return { errors, errorsExits };
  }
}

export default AuthService;
