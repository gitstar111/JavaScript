
let score =  10 // we can use null, boolean, string
console.log(typeof score)
let scoreInt = Number(score) // THIS STATEMENT WILL NOT GENERATE ANY ERROR. THE TYPE WILL BE NUMBER ONLY BUT THE VALUE
                            // MAY DEPEND UPON THE GIVEN PARAMETERS, EG. (NaN --> Not an number) for impure numbers like 22ab
console.log(typeof scoreInt)
console.log(scoreInt)

console.log(+true) // --> Gives the integer value for the given boolean ie. 1 for true and 2 for false

/* some converts

--> "33" --> 33
--> true --> 1
--> false --> 0
--> "33abc" --> NaN (not a number)
--> "" empty string to boolean --> False
--> "xyz" used string to boolean --> True */