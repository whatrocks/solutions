var RecentCounter = function() {
    this.pings_queue = []
    this.recent_count = 0
}

RecentCounter.prototype.ping = function(t) {
    if (!t) {
        return
    }
    if (!this.pings_queue.length) {
        this.pings_queue.push(t)
        this.recent_count = 1
    }
    else if (t - this.pings_queue[0] <= 3000) {
        this.recent_count++
        this.pings_queue.push(t)
    } else {
        // remove the first item from the lsit
        this.pings_queue.shift()

        while (this.pings_queue.length) {
            if (t - this.pings_queue[0] <= 3000) {
                break;
            } else {
                this.pings_queue.shift()
                this.recent_count--
            }
        }
        this.pings_queue.push(t)

    }
    return this.recent_count    
}

var rc = new RecentCounter()
console.log(rc.ping(642))
console.log(rc.ping(1849))
console.log(rc.ping(4921))
console.log(rc.ping(5936))
console.log(rc.ping(5957))