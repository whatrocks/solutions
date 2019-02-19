function swap(nums, m, n) {
    console.log("swap: ", m, n)
    const temp = nums[m]
    nums[m] = nums[n]
    nums[n] = temp;
}

var sortColors = function(nums) {
    
    // Space O(1) solution
    // pointer separating red and white
    let rw = 0
    // pointed separating white and blue
    let wb = nums.length -1

    let i = 0
    while (i <= wb) {
        n = nums[i]
        if (n === 0) {
            swap(nums, i, rw)
            rw += 1
        }
        if (n === 2) {
            swap(nums, i, wb)
            wb -= 1
        } else {
            i += 1
        }
    }

    // My failed attempt at the Space O(1) solution
    // let first_red_idx;
    // let first_white_idx;
    // let first_blue_idx;

    // for (var i = 0; i < nums.length; i++) {
    //     let current = nums[i];
    //     console.log("current: ", current, "; nums: ", nums)
    //     if (current === 2) {
    //         // blue
    //         if (first_blue_idx === undefined || first_blue_idx > i) {
    //             first_blue_idx = 0
    //         }
    //     } else if (current === 1) {
    //         // white
    //         if (first_white_idx === undefined || first_white_idx > i) {
    //             first_white_idx = i
    //         }
    //         // if (first_white_idx === first_red_idx) {
    //         //     first_white_idx = i
    //         // }
           
    //         if (first_blue_idx < i) {
    //             console.log("swap white and blue")
    //             swap(nums, i, first_blue_idx)
    //             if (first_white_idx > first_blue_idx) {
    //                 console.log("seeting first white")
    //                 first_white_idx = first_blue_idx
    //             }
    //             first_blue_idx++
    //         } 
    //     } else { // red
    //         if (first_red_idx === undefined || first_red_idx > i) {
    //             first_red_idx = i
    //         }
    //         // try to swap with first blue
    //         if (first_blue_idx < i) {
    //             console.log("swap blue and something")
    //             swap(nums, i, first_blue_idx)
    //             if (nums[first_blue_idx] === 0) {
    //                 if (first_red_idx > i) {
    //                     first_white_idx = first_red_idx
    //                 }    
    //             } else {
    //                 if (first_red_idx > first_red_idx) {
    //                     first_white_idx = first_red_idx
    //                 }
    //             }
    //             first_blue_idx++
                
    //         }
    //         // next swap with the first whte
    //         console.log("nums are: ", nums)
    //         console.log("first white: ", first_white_idx)
    //         console.log("first red: ", first_red_idx)
    //         console.log("first blue: ", first_blue_idx)
    //         if (first_white_idx < first_blue_idx - 1 && first_white_idx !== first_red_idx) {
    //             console.log("swap white and red")
    //             swap(nums, first_blue_idx - 1, first_white_idx)
    //             first_white_idx = first_blue_idx - 1
    //         }
    //     }
    // }



    // Time: O(n)
    // Space O(n)

    // let red = 0;
    // let white = 0;
    // let blue = 0;

    // // count the colors
    // for (var i = 0; i < nums.length; i++) {
    //     let color = nums[i];
    //     if (color === 0) {
    //         red++
    //     } else if (color === 1) {
    //         white++
    //     } else if (color === 2) {
    //         blue++
    //     }
    // }

    // // replace with counts
    // for (var i = 0; i < nums.length; i++) {
    //     if (red > 0) {
    //         nums[i] = 0
    //         red--
    //         continue;
    //     }
    //     if (white > 0) {
    //         nums[i] = 1
    //         white--
    //         continue;
    //     }
    //     if (blue > 0) {
    //         nums[i] = 2
    //         blue--
    //         continue;
    //     }
    // }
}

const array = [2,0,2,1,1,0];
sortColors(array)
console.log(array,[0,0,1,1,2,2])

// const array = [0,1];
// sortColors(array)
// console.log(array,[0,1])
