// Get the string from the page
// Controller function
function getValue(){
    
    document.getElementById("alert").classList.add("invisible");
    
    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);
}

// Revese the string
// Logic function 
function reverseString(userString){

    let revString = [];
    
    // Reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }
    return revString;
}

// Display our reversed string to the user
// View function
function displayString(revstring){

    // Write to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revstring}`;
    document.getElementById("alert").classList.remove("invisible");
}