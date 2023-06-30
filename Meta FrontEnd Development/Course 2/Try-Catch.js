try {
    // This code will throw an error because the variable is not defined
    let x = y + 1;
} catch (err) {
    // This code will execute when an error is thrown
    console.log("Error is: " + err);
}

// This code will execute regardless of whether an error was thrown or not
console.log("No error, chill maar");