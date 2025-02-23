import { FormBuilder, Validators } from "@angular/forms";
import REGEX from "../../shared/constants/regex";


export const loginByEmail = () =>
    new FormBuilder().group(
        {
            email: [null, [Validators.required, Validators.pattern(REGEX.EMAIL)]],
            password: [null, [Validators.required]],
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
};
