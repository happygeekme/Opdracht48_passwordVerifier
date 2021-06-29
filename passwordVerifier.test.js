const { verifyPassword, hasRightLength, isNotNull, hasUpperCaseCharacter, hasLowerCaseCharacter, hasDigit, minimumConditionsReached, passwordVerifier } = require('./passwordVerifier');

// Utility functions for verifyPassword

test("isNotNull", () => {
    expect(isNotNull(null)).toBe(false);
})

test("isNotNull happyPath", () => {
    expect(isNotNull("truus")).toBe(true);
})

test("hasRightLength", () => {
    expect(hasRightLength("123456789")).toBe(false);
});

test("hasRightLength happyPath", () => {
    expect(hasRightLength("1234567")).toBe(true);
});


test("hasUpperCaseCharacter", () => {
    expect(hasUpperCaseCharacter("A")).toBe(true)
})

test("hasUpperCaseCharacter happyPath", () => {
    expect(hasUpperCaseCharacter("a")).toBe(false)
})


test("hasLowerCaseCharacter", () => {
    expect(hasLowerCaseCharacter("a")).toBe(true)
})

test("hasLowerCaseCharacter digits", () => {
    expect(hasLowerCaseCharacter("123")).toBe(false)
})

test("hasLowerCaseCharacter false", () => {
    expect(hasLowerCaseCharacter("A")).toBe(false)
})

test("hasLowerCaseCharacter false", () => {
    expect(hasLowerCaseCharacter(null)).toBe(false)
})

test("hasDigit", () => {
    expect(hasDigit("a")).toBe(false)
})

test("hasDigit, happy path 1", () => {
    expect(hasDigit("1")).toBe(true)
})

test("hasDigit, happy path 2", () => {
    expect(hasDigit("a1")).toBe(true)
})

test("hasDigit, null", () => {
    expect(hasDigit(null)).toBe(false)
})

// combine the conditions
// Een wachtwoord wordt alléén goedgekeurd als:

// tenminste 3 van de bovenstaande condities true zijn
// conditie 4 true is (die moet dus altijd true zijn)

test("minimumConditionsReached", () => {
    const conditions = [false, false, false, false, false];
    expect(minimumConditionsReached(conditions)).toBe(false);
})

test("minimumConditionsReached under cutoff", () => {
    const conditions = [true, true, false, false, false];
    expect(minimumConditionsReached(conditions)).toBe(false);
})

test("minimumConditionsReached on cutoff", () => {
    const conditions = [true, true, true, false, false];
    expect(minimumConditionsReached(conditions)).toBe(true);
})

test("minimumConditionsReached over cutoff", () => {
    const conditions = [true, true, true, true, false];
    expect(minimumConditionsReached(conditions)).toBe(true);
})

// test voor "outer" verifyPassword

test("verifyPassword null", () => {
    expect(verifyPassword(null)).toBe(false);
});

test("verifyPassword '1'", () => {
    expect(verifyPassword("1")).toBe(false);
});

test("verifyPassword digits", () => {
    expect(verifyPassword("12345")).toBe(false);
});

test("verifyPassword only lowerCase", () => {
    expect(verifyPassword("abcde")).toBe(true);
});

test("verifyPassword correct password", () => {
    expect(verifyPassword("Ab1")).toBe(true);
});

