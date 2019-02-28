// // event loop is array that acts as a queue (fifo)
// var eventLoop = []
// var event;

// // keep going forever
// while (true) {
//     // perform a tick
//     if (eventLoop.length > 0) {
//         // get the next event
//         event = eventLoop.shift()

//         // now execute the next event
//         try {
//             event()
//         }
//         catch (err) {
//             reportError(err)
//         }
//     }
// }