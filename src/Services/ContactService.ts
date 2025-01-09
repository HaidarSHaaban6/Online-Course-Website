import { contactInfo } from "../redux/slice/contactFormSlice";
import AuthService from "./AuthService";

class ContactService {
  public static validateContact(contactInfo: contactInfo) {
    let errors: contactInfo = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };
    if (!contactInfo.firstName)
      errors.firstName = "First Name field is required";
    if (!contactInfo.lastName) errors.lastName = "Last Name field is required";
    if (!contactInfo.email) errors.email = "Email field is required";
    else if (!AuthService.isValidEmail(contactInfo.email))
      errors.email = "Email field should be an Email";
    if (!contactInfo.phone) errors.phone = "Phone field is required";
    else if (!AuthService.isValidPhoneNumber(contactInfo.phone))
      errors.phone = "Phone field should be a valid Syrian Phone";
    if (!contactInfo.subject) errors.subject = "Subject field is required";
    if (!contactInfo.message) errors.message = "Message field is required";

    const hasErrors = Object.values(errors).some((value) => value !== "");
    return { errors, hasErrors };
  }
}

export default ContactService;
