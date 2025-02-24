import { FormBuilder, Validators } from "@angular/forms";
import REGEX from "../../shared/constants/regex";
import { validateSamePassword } from "../../core/helpers/validation";


export const signUpForm = () =>
    new FormBuilder().group(
        {
            email: [null, [Validators.required, Validators.pattern(REGEX.EMAIL)]],
            password: [null, [Validators.required]],
            confirmPassword: [null, [Validators.required, validateSamePassword]]
        },
    );


export const validationMessages = {
    email: {
        required: "Email is required!",
        pattern: "Email is invalid!"
    },
    password: {
        required: "Password is required!",
    },
    confirmPassword: {
        required: "Confirm Password is required!",
        notSame: 'Password and confirm password not match!'
    }
};
