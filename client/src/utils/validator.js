function validate(dog) {
    let errors = {};
    //name
    if (!dog.name) {
       errors.name = "Name is required";
    } else if ((dog.name && dog.name.length < 4) || dog.name.length > 20) {
       errors.name = "Name must be a minimun of 4 and max of 20";
    } else if (!/^[A-Z]+$/i.test(dog.name)) {
       errors.name = "Name is invalid";
    }
    //min Height
   if (!dog.minHeight) {
      errors.minHeight = "Min Height is required";
    }  if (+dog.minHeight >= +dog.maxHeight) {
      errors.minHeight =
        "The minimum height cannot be greater or equal than the maximum height";
    }
    //max Height
     if (!dog.maxHeight) {
      errors.maxHeight = "Max Height is required";
    }  if (+dog.maxHeight <= +dog.minHeight) {
      errors.maxHeight =
        "The maximum height cannot be less or equal than the minimum height";
    }
    //min Weight
    else if (!dog.minWeight) {
      errors.minWeight = "Min Weight is required";
    } else if (+dog.minWeight >= +dog.maxWeight) {
      errors.minWeight =
        "The minimum weight cannot be greater or equal than the maximum weight";
    }
    //max Weight
    else if (!dog.maxWeight) {
      errors.maxWeight = "Max Weight is required";
    } else if (+dog.maxWeight <= +dog.minWeight) {
      errors.maxWeight =
        "The maximum weight cannot be less or equal than the minimum weight";
    }
    //min Life
    else if (!dog.minLife) {
      errors.minLife = "Min Life span is required";
    } else if (+dog.minLife >= +dog.maxLife) {
      errors.minLife =
        "The minimum life span cannot be greater or equal than the maximum life span";
    }
    //max life span
    else if (!dog.maxLife) {
      errors.maxLife = "Max Life span is required";
    } else if (+dog.maxLife <= +dog.minLife) {
      errors.maxLife =
        "The maximum life span cannot be less or equal than the minimum life span";
    }
    //image
    else if (!dog.image) {
      errors.image = "URL is required";
    } else if (
      !dog.image.match(/^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim)
    ) {
      errors.image = "invalid url";
    }
    return errors;
  }

module.exports={validate}