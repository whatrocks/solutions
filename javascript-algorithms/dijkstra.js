const PriorityQueue = require('./PriorityQueue')

// algo to find the shortest path between a and b
// it picks the unvisted vertex with the lowest distance,
// calculates the distance through it to each unvisited neightoy
// and updates the neighbors distance if smaller
// mark visited when done with neighbors


function dijkstra(graph, startVertex) {

    const distances = {}
    const visitedVertices = {}
    const previousVertices = {}
    const queue = new PriorityQueue();

    // init all distances with infinity assumtably that currently cant reach
    // anyhting other than the start
    Object.keys(graph).forEach((vertex) => {
        distances[vertex] = Infinity
        previousVertices[vertex] = null;
    })
    distances[startVertex] = 0;

    // Init verticies queue
    queue.add(startVertex, distances[startVertex])

    while (!queue.isEmpty()) {
        const currentVertex = queue.poll();
        console.log("I'm looking at Vertex: ", currentVertex, " with queue: ", queue.heapContainer)

        Object.entries(graph[currentVertex[0]]).forEach((neighbor) => {
            const neighborVertex = neighbor[0]
            const neighborWeight = neighbor[1]; // edge

            // dont visit already visted vertexes
            if (!visitedVertices[neighborVertex]) {

                // update distances to every neighboy from the current vertex
                
                const existingDistanceToNeighbor = distances[neighborVertex];
                const distanceToNeighborFromCurrent = distances[currentVertex] + neighborWeight;

                if (distanceToNeighborFromCurrent < existingDistanceToNeighbor) {
                    // found a shorted route
                    distances[neighborVertex] = distanceToNeighborFromCurrent

                    // change priority
                    if (queue.hasValue(neighbor)) {
                        console.log("changing priority")
                        queue.changePriority(neighbor, distances[neighborVertex])
                    }

                    // rememve previous vertex
                    previousVertices[neighborVertex] = currentVertex
                }

                // add neighbor to queue for further visiting
                if (!queue.hasValue(neighbor)) {
                    console.log("add to queue")
                    queue.add(neighbor, distances[neighborVertex])
                }

            }
        })

        // add currentvertex to visitedones
        visitedVertices[currentVertex] = currentVertex

    }

    // console.log("queue: ", queue);
    // console.log(distances);
    // console.log(previousVertices);

    return {
        distances,
        previousVertices
    }

}

example_graph = {
    'U': {'V': 2, 'W': 5, 'X': 1},
    'V': {'U': 2, 'X': 2, 'W': 3},
    'W': {'V': 3, 'U': 5, 'X': 3, 'Y': 1, 'Z': 5},
    'X': {'U': 1, 'V': 2, 'W': 3, 'Y': 1},
    'Y': {'X': 1, 'W': 1, 'Z': 1},
    'Z': {'W': 5, 'Y': 1},
}

console.log(dijkstra(example_graph, 'X'))