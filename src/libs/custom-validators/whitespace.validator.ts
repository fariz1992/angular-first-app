export function WhiteSpaceValidator(formControl: any) {
    return formControl.value.replace(" ", "").length !== formControl.value.length ? { whitespace: true } : null;
}