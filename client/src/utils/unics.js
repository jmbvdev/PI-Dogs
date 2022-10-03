function temperamentsUnic(temperaments) {
    const temperamentsUnic = [];
    for (let i = 0; i < temperaments.length; i++) {
      temperamentsUnic.push(temperaments[i].name);
    }
    const temperamentSelect = [...new Set(temperamentsUnic)];
    return temperamentSelect
}
function dogsUnic(dogs) {
    const dogsUnic = [];
    for (let i = 0; i < dogs.length; i++) {
      dogsUnic.push(dogs[i].name);
    }
    const raceSelect = [...new Set(dogsUnic)];
    return raceSelect
    
}


module.exports={temperamentsUnic, dogsUnic}