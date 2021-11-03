import time

# linear time O(n)
def sum_to_n(n):
    # record start time
    start = time.time()

    # run the functions code
    total = 0
    for i in range(n+1):
        total += i

    # record end time
    end = time.time()
    return total, end - start

# constant time O(1)
def arithmetic_sum(n):
    start = time.time()
    total = n * (n + 1) / 2
    end = time.time()
    return total, end - start

output_template = '{}({}) = {:15d} ({:8.7f} seconds)'
for i in range(1, 10):
    print(output_template.format('sum_to_n', i * 1000000, *sum_to_n(i * 1000000)))

for i in range(1, 10):
    print(output_template.format('arithmetic_sum', i * 1000000, *arithmetic_sum(i * 1000000)))


