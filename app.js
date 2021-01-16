document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector(".elements");
    const submitBtn = document.querySelector("#submit");
    let squares1 = Array.from(document.querySelectorAll('.numbers1 div'));
    let squares2 = Array.from(document.querySelectorAll('.numbers2 div'));
    let squares3 = Array.from(document.querySelectorAll('.numbers3 div'));
    let squares4 = Array.from(document.querySelectorAll('.numbers4 div'));
    let message = document.querySelector(".message");
    const indexToReveal = document.querySelector("#givenIndex");

    var uniqueArray = [];
    var revealedArray = [8,16,32];
    var limit = 40;
    var upperBound = 300;
    var lowerBound = 100;

    //generate the random array and random target
    while(uniqueArray.length < limit)
    {
        var random = Math.floor(Math.random()*(upperBound - lowerBound) + lowerBound);
        if(uniqueArray.indexOf(random) == -1){
            uniqueArray.push(random);
        }
    }
    
    var target =-1;
    while(target == -1)
    {
        target = Math.floor(Math.random()*limit);
        if(target%7 == 0)
            target = -1;
    }
    display.innerHTML += uniqueArray[target];

    squares1[7].innerHTML = uniqueArray[7];
    squares2[5].innerHTML = uniqueArray[15];
    squares3[3].innerHTML = uniqueArray[23];
    squares4[1].innerHTML = uniqueArray[31];

    //Reveal Logic 
    const reveal = () => {
        let index = parseInt(indexToReveal.value-1);
        if(index >= 0 && index < 40)
        {
            if(index >= 0 && index < 10)
                squares1[index].innerHTML = uniqueArray[index];
            if(index >= 10 && index < 20)
                squares2[index-10].innerHTML = uniqueArray[index];
            if(index >= 20 && index < 30)
                squares3[index-20].innerHTML = uniqueArray[index];
            if(index >= 30 && index < 40)
                squares4[index-30].innerHTML = uniqueArray[index];
            message.innerHTML = "";
        }
        else
        {
            message.innerHTML = "Enter valid Index";
        }

        if(uniqueArray[index] === uniqueArray[target])
        {
            message.innerHTML = "Bravo! You did it!";
            submitBtn.disabled = true;
        }
    };

    submitBtn.addEventListener('click', reveal);
    
});
