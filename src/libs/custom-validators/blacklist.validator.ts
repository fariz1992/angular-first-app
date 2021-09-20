import { FormControl } from '@angular/forms';
 

export const BlacklistValidator = (value: string) => {

    return (formControl: any) => {

        return formControl.value.includes(value) ? {
            blacklist: {
                required: true,
                currentValue: value
            }
        } : null;
    };

};