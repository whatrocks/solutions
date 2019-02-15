var assert = require('assert');
var QUEUE_CLASSES = require('./queue').QUEUE_CLASSES;

function run_tests(queue_implementation) {
  /*
   * A few simple assertions to ensure the queue actually works.
   *
   * Add your own!
   */
  let queue = new queue_implementation();
  assert(queue.is_empty());
  queue.enqueue(1);
  queue.enqueue(2);
  assert(queue.dequeue() === 1);
  queue.enqueue(3);
  queue.enqueue(4);
  assert(queue.dequeue() === 2);
  assert(queue.dequeue() === 3);
  assert(queue.dequeue() === 4);
  assert(queue.is_empty());
}

function run_simulation(queue_implementation, p_enqueue=0.5, p_dequeue=0.5, duration=2) {
  /*
   * Run a simulation where a producer periodically adds to a queue, and
   * a consumer periodically pulls from it.
   */
  let start_ms = Date.now();
  let duration_ms = 1000 * duration;

  let num_enqueues = 0, num_dequeues = 0, max_queue_size = 0;
  let queue = new queue_implementation()
  
  let elapsed_ms = 0;
  while ((elapsed_ms = Date.now() - start_ms) < duration_ms) {
    if (Math.random() < p_enqueue) {
      queue.enqueue("Item");
      num_enqueues++;
      max_queue_size = Math.max(max_queue_size, queue.size());
    }
    if (Math.random() < p_dequeue) {
      if (!queue.is_empty()) {
        queue.dequeue();
        num_dequeues++;
      }
    }
  }
  console.log({
    'Queue implementation': queue_implementation.name,
    'Average enqueues / s': 1000 * num_enqueues / elapsed_ms,
    'Average dequeues / s': 1000 * num_dequeues / elapsed_ms,
    'Max queue size': max_queue_size,
  });
}

QUEUE_CLASSES.forEach(function(queue_implementation) {
  run_tests(queue_implementation);
});

console.log('All implementations passing simple correctness test, benchmarking..')

let prob_pairs = [[.5, .5], [.6, .4], [.49, .51]];

prob_pairs.forEach(function(prob_pair) {
  let p_enqueue = prob_pair[0], p_dequeue = prob_pair[1];
  console.log();
  console.log('Benchmarking for P(enqueue)=%f, P(dequeue)=%f', p_enqueue, p_dequeue);
  QUEUE_CLASSES.forEach(function(queue_implementation) {
    run_simulation(queue_implementation, p_enqueue, p_dequeue);
  });
});
