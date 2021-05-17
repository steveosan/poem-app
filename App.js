$(document).ready(function() {
    $("button#addWord").on("click", addWord);
    $("button#generate").on("click", generate);
});

let one = ["pot", "cat", "the"];
let two = ["napkin", "goblin","cactus"];
let three = ["Attention", "Banana", "Blindingly"];
let four = ["Degenerate", "Execution", "Overwhelming"];
let five = ["Subterranean","amanuensis","tonsillectomy"];
let six = ["comfortability", "aibohphobia", "osteoporosis" ];
let seven = ["interpenetratingly","unconventionality","magnetoluminescent"];

let haiku = [];



function addWord()
{
    let word = $("input").val()
    cutWord = (word.split("-").length)
    trimmedWord = word.replace(/-/g, "")

    haiku.push(`The word is ${trimmedWord} and it has ${cutWord} syllable's`)
    $("input").val("")


    if (cutWord = 1)
    {
        one.push(trimmedWord)
    }
    if (cutWord = 2)
    {
        two.push(trimmedWord)   
    }
    if (cutWord = 3)
    {
        three.push(trimmedWord)
    }
    if (cutWord = 4)
    {
        four.push(trimmedWord)
    }
    if (cutWord = 5)
    {
        five.push(trimmedWord)
    }
    if (cutWord = 6)
    {
        six.push(trimmedWord)
    }
    if (cutWord = 7)
    {
        seven.push(trimmedWord)
    }else{}

    $("input").focus();

}

function generate() 
{
    // let x = 0
    // let ranNum = Math.floor(Math.random() * 7) + 1;
    // if (x <= 5)
    // {
    //     if (ranNum <= 5 && x<=5)
    //      {
    //         var randomItem = five[Math.floor(Math.random()*five.length)];
    //         $("p#output").append(" " +randomItem);
    //         x+5
    //         }
    //         else if (ranNum <= 4 && x<=5)
    //         {
    //             var randomItem = four[Math.floor(Math.random()*four.length)];
    //             $("p#output").append(" " +randomItem);
    //             x+4
    //         }
    //         else if (ranNum <= 3 && x<=5 )
    //         {
    //             var randomItem = three[Math.floor(Math.random()*three.length)];
    //             $("p#output").append(" " +randomItem);
    //             x+3
    //         }
    //         else if (ranNum <= 2 && x<=5)
    //         {
    //             var randomItem = two[Math.floor(Math.random()*two.length)];
    //             $("p#output").append(" " +randomItem);
    //             x+2  
    //         }
    //         else if (ranNum <= 1 && x<=5)
    //         {
    //             var randomItem = one[Math.floor(Math.random()*one.length)];
    //             $("p#output").append(" " +randomItem);
    //             x+1 
    //         }
    //  }


    for(let aword of haiku)
    {
        let poem=`${aword} <br>`;
        $("p#output").append(poem); 

    }
}