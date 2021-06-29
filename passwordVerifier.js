// Utility functions

const isNotNull = password => password !== null;

const hasRightLength = password => {
    return isNotNull(password) && password.length <= 8;
}

const hasUpperCaseCharacter = (password) => {
    return isNotNull(password) && password.toLowerCase() !== password;
}

const hasLowerCaseCharacter = (password) => {
    return isNotNull(password) && password.toUpperCase() !== password;
}

const hasDigit = password =>  /\d/.test(password);

const minimumConditionsReached = conditions => {
    // conditions is an array of booleans
    trueconditions = conditions.filter(bool => bool) /// is htzelfde als bool => bool === true
    return (trueconditions.length >= 3);
}

const passwordVerifier = (trueconditions) => {
    const res = hasLowerCaseCharacter(password);
    console.log(res)
    if (res == true) {

    }
}

// Outer functions

const verifyPassword = (password) => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    console.log(conditions);
    const result = minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result
}

module.exports = {verifyPassword, hasRightLength, isNotNull, hasUpperCaseCharacter, hasLowerCaseCharacter, hasDigit, minimumConditionsReached, passwordVerifier}



// const minimumConditionsReached = conditions => {
//     // conditions is an array of booleans
//     trueConditions = conditions.filter(bool => bool);
//     return trueConditions.length >= 3;
// };

// // "Outer" function
// const verifyPassword = password => {
//     const conditions = [
//         isNotNull(password),
//         hasRightLength(password),
//         hasUpperCaseCharacter(password),
//         hasLowerCaseCharacter(password),
//         hasDigit(password)
//     ];
//     const result =
//         minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

//     return result;
// };

// module.exports = {
//     verifyPassword,
//     hasRightLength,
//     isNotNull,
//     hasUpperCaseCharacter,
//     hasLowerCaseCharacter,
//     hasDigit,
//     minimumConditionsReached
// };