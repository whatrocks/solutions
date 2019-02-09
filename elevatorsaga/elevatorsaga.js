// Currently on challenge 8

{
    init: function(elevators, floors) {
        for (var j = 0; j < elevators.length; j++) {
            (function (j) {
             var elevator = elevators[j];
             elevator.on("idle", function() {
                 elevator.goToFloor(0)        
             })
            /* elevator.on("floor_button_pressed", function(floorNum) {
                 elevator.goToFloor(floorNum)
             })*/
             elevator.on("stopped_at_floor", function(floorNum) {
                 if (elevator.getPressedFloors().length > 0) {
                     console.log("elevator floors: ", elevator.getPressedFloors())
                     elevator.goToFloor(elevator.getPressedFloors()[0])
                 } else {
                     elevator.goToFloor(0)    
                 }
             })
             elevator.on("passing_floor", function(floorNum, direction) {
                 if (direction === 'down') {
                     if (elevator.getPressedFloors().indexOf(floorNum) > -1) {
                         elevator.goToFloor(floorNum, true)
                     }
                 }
             });

             
            })(j);
        }
        
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
