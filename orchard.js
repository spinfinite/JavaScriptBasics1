///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
// We need to create a for look that adds the nunber of acres picked from each type of apple
let totalFujiAcres = 0
let totalGalaAcres = 0
let totalPinkAcres = 0


for ( i = 0; i < fujiAcres.length; i++) {
    totalFujiAcres = totalFujiAcres + fujiAcres[i]
    //console.log(totalAcres)

}

for ( i = 0; i < galaAcres.length; i++) {
    totalGalaAcres = totalGalaAcres + galaAcres[i]
    //console.log(totalAcres)

}
for ( i = 0; i < pinkAcres.length; i++) {
    totalPinkAcres = totalPinkAcres + pinkAcres[i]
    //console.log(totalAcres)

}

console.log(totalFujiAcres)
console.log(totalGalaAcres)
console.log(totalPinkAcres)

let totalAcres = totalFujiAcres + totalGalaAcres + totalPinkAcres  // This is where each total number of acres per type of apple was added to totalAcres
console.log(`The Total acres harvested is: ${totalAcres}`)

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
let averageDailyAcres = totalAcres / 7  // if we divide the number of acres by the 7 days of the week we get the result. 
console.log(`The average number of apples picked per day is ${averageDailyAcres}`)



// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
while ( acresLeft > 0) {
    days++

    acresLeft = acresLeft - averageDailyAcres  // days increases every time 9 is deducted from acres left
}
console.log(days)

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
// I will create copies of the arrays first by using slice
let dailyFugiApplesPicked = fujiAcres.slice(0,7)
let dailyGalaApplesPicked = galaAcres.slice(0,7)
let dailyPinkApplesPicked = pinkAcres.slice(0,7)

let fujiTons = []
let galaTons = []
let pinkTons = []

//console.log(dailyFugiApplesPicked, dailyGalaApplesPicked, dailyPinkApplesPicked) // Checks to make sure we made the copies correctly
for (i = 0; i < dailyFugiApplesPicked.length; i++){
    fujiTons[i] = dailyFugiApplesPicked[i] * 6.5 
}
for (i = 0; i < dailyGalaApplesPicked.length; i++){
    galaTons[i] = dailyGalaApplesPicked[i] * 6.5 
}
for (i = 0; i < dailyPinkApplesPicked.length; i++){
    pinkTons[i] = dailyPinkApplesPicked[i] * 6.5 
}

// Log each new array in tons to the consolde
console.log(`The daily amount of Fuji apples in tons is: ${fujiTons}`)
console.log(`The daily amount of Gala apples in tons is: ${galaTons}`)
console.log(`The daily amount of Pink apples in tons is: ${pinkTons}`)



// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

fujiTonsTotal = 0
galaTonsTotal = 0
pinkTonsTotal = 0


for (i = 0; i < fujiTons.length; i++) {
    fujiTonsTotal += fujiTons[i] * 2000
}
for (i = 0; i < galaTons.length; i++) {
    galaTonsTotal += galaTons[i] * 2000
}
for (i = 0; i < pinkTons.length; i++) {
    pinkTonsTotal += pinkTons[i] * 2000
}

let fujiPounds = fujiTonsTotal
let galaPounds = galaTonsTotal
let pinkPounds = pinkTonsTotal

console.log(`The total number of pounds for Fuji Apples is ${fujiPounds}`)
console.log(`The total number of pounds for Gala Apples is ${galaPounds}`)
console.log(`The total number of pounds for Pink Apples is ${pinkPounds}`)



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE
/*
const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55
*/
// Multiply each total in pounds per the price per pound 

let fujiProfit = fujiPounds * .89
let galaProfit = galaPounds * .64
let pinkProfit = pinkPounds * .55

console.log(fujiProfit)
console.log(galaProfit)
console.log(pinkProfit)




// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
// We added all profit totals to create totalProfit
let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log(`Our total Profit is:  ${totalProfit}`)