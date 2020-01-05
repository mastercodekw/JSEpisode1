/**
 * greet(name):
 * - optionally receives a name
 * - logs "Hello" if there is no name
 * - logs "Hello <name>" if there is a name
 */
function greet(name) {
    // Your code here
    if (name == undefined) {
        console.log("Hello");
    } else {
        console.log("Hello " + name);
    }
}

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 */
function isOdd(n) {
    // Your code here
    return (n % 2 != 0) ? true : false;
}

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 *
 * Hint: you can solve this without writing any loops!
 */
function oddsSmallerThan(n) {
    // Your code here
    return Math.floor(n / 2);
}
 
/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
    // Your code here
    if (n % 2 != 0) {
        return n*n;
    } else {
        return n*2;
    }
}

/**
 * ageFromBirthDate(birthDate):
 * - receives a birthDate as a STRING of the form <YYYYMMDD>
 *   where:
 *     - YYYY is the year
 *     - MM is the month (01 - 12)
 *     - DD is the date
 * - calculates and returns the age in years (rounded down to the nearest year)
 * - assume all birthDates will be valid
 *
 * Hint: you can use JavaScript's Date() class to make things easier
 *
 * e.g. (if we assume that the date today is September 23 2018):
 *    ageFromBirthDate("19870506") -> 31 (because the birthday already passed)
 *    ageFromBirthDate("19971110") -> 20 (because the birthday hasn't passed yet)
 */
function ageFromBirthDate(birthDate) {
    const _MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;
    
    if (birthDate.length != 8 || isNaN(birthDate)) {
        return "ERROR: birth date must be in the format: 'YYYYMMD'.";
    }
    
    // only initialize the required objects to use as low memory as possible
    var today = new Date();
    
    // make sure the birth year is valid
    var today_year = today.getFullYear();
    var birth_year = Number(birthDate.substr(0,4));
    
    if (today_year < birth_year) {
        return "ERROR: invalid birth year!";
    } else {
        // if the birth month passed, only compare years
        // so, check if the birth month passed
        var today_month	= today.getMonth()+1;
        var birth_month = Number(birthDate.substr(4,2));
        if (today_month > birth_month) {
            // birth month passed, only compare years
            return today_year - birth_year
        } else {
            // birth month not passed, check if it's his/her birth month
            var today_day = today.getDate();
            var birth_day = Number(birthDate.substr(6,2));
            if (today_month == birth_month) {
                // it's his/her birth month
                if (today_day >= birth_day) {
                    // birth day passed
                    return today_year - birth_year
                } else {
                    // didn't reach his/her birth day
                    return today_year - birth_year - 1
                }
            } else {
                // didn't reach his/her birth month
                return today_year - birth_year - 1
            }
        }
    }
}

module.exports = {
    greet,
    isOdd,
    oddsSmallerThan,
    squareOrDouble,
    ageFromBirthDate
};
