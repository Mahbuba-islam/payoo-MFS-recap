// shared function for get input value 
function getInputValue(id){
 const inputElement = document.getElementById(id).value
 const inputNumber = parseFloat(inputElement)
 return inputNumber
}

// shared function for get text value
function getTextValue(id){
    const textValue = document.getElementById(id).innerText
    const numberValue = parseFloat(textValue)
    return numberValue
}

// function for set value on display
function setValue(id, newValue) {
    document.getElementById(id).innerText = newValue;
}


// show and hide section
function showSectionById(id){
    // hide all the section
    document.getElementById('add-money-section').classList.add('hidden')
   document.getElementById('cash-out-section').classList.add('hidden'); 
  document.getElementById('transgiction-section').classList.add('hidden')
//    show the section with provided id
document.getElementById(id).classList.remove('hidden')
}