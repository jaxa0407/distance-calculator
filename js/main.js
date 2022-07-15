 var theForm = document.querySelector("#form");
 var theInput = document.querySelector("#input")  
 
 var theWalk = document.querySelector("#walk");
 var theBike = document.querySelector("#bike");
 var theCar = document.querySelector("#car");
 var thePlane = document.querySelector("#plane");
 
 var speedByFoot = 3.6;
 var speedByBike = 20.1;
 var speedByCar = 70;
 var speedByPlane = 800;
 
 
 
 var calculateTime = function (speed, distanceInput) {
    var totalTime = distanceInput / speed;
    var hours = Math.floor(totalTime);
    var minutes = Math.ceil((totalTime - hours) * 60)
    
    if (minutes == 60) {
        hours = hours + 1
        minutes = 0
        
        return `${hours} hours ${minutes} minutes`  
    }
    
    if (hours == 0) {
        return `${minutes} minutes` 
        
    }else if (minutes == 0){
        return `${hours} hours`
    }else {
        return `${hours} hours ${minutes} minutes`
    }
    console.log(hours, minutes);    
}
theForm.addEventListener('submit', function (evt) {
    evt.preventDefault()
    var input = theInput.value.trim(); 

    if (input == 0) {
        alert("Please, enter N number");
    }else if (input < 0) {
       alert("incorrect distance!!");
    }else{

    theWalk.textContent = calculateTime(speedByFoot, input)
    theBike.textContent = calculateTime(speedByBike, input)
    theCar.textContent = calculateTime(speedByCar, input)
    thePlane.textContent = calculateTime(speedByPlane, input)
    }
})
 