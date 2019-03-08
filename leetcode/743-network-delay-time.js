/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
    // create our graph
    const graph = {}
    for (var i = 0; i < times.length; i++) {
        const [u, v, w] = times[i]
        if (!graph[u]) {
            graph[u] = { [v]: w }
        } else {
            graph[u][v] = w
        }
    }
    // track our costs
    const costsSoFar = {}
    // does this need to be priority queue
    const queue = []
    queue.push([K, 0])
    while (queue.length) {
        const current = queue.shift();
        const vertex = current[0]
        const costToThisVertex = current[1]
        const neighbors = graph[vertex]
        if (neighbors) {
            for (let neighbor of Object.keys(neighbors)) {
                if (parseInt(neighbor) === K) {
                    continue;
                }
                const potentialNewCost = costToThisVertex + neighbors[neighbor]
                if (!costsSoFar[neighbor] || costsSoFar[neighbor] > potentialNewCost) {
                    costsSoFar[neighbor] = potentialNewCost
                    queue.push([parseInt(neighbor), potentialNewCost])
                }
            }
        }
    }
    if (Object.keys(costsSoFar).length !== N - 1) {
        return -1
    } else {
        return Math.max(...Object.values(costsSoFar))
    }
};

// const times = [
//     [2,1,1],
//     [2,3,1],
//     [3,4,1]]
// const n = 4
// const k = 2

const times = [[1,2,1],[2,1,3]]
const n = 2
const k = 2

console.log("result is: ", networkDelayTime(times, n, k))


