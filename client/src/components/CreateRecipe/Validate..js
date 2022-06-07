
export function validate (input){
    let errors = {};

    if(input.title === ""){
        errors.title = "Name required!";

    } else if(input.title.length < 3) {
        errors.title = 'Minimum 3 letters'

    } else if(!input.summary){
        errors.summary= "summary must be complete";

    } else if(input.summary.length < 20){
        errors.summary = 'Minimum 20 letters';

    }else if(input.healthScore < 0 || input.healthScore> 100 ){
        errors.healthScore = 'Maximum up to 100'

    }else if (!input.image.includes("https")) {
        errors.image = 'Please insert an image type URL'
    }else if(!input.analyzedInstructions){
        errors.analyzedInstructions = "required field"
    }

    return errors;
}
