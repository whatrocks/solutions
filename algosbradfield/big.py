import time

def sum_to_n(n):
    # record start time
    start = time.time()
    
    # run the code
    total = 0
    for i in range(n + 1):
        total += i

    # record end time
    end = time.time()

    return total, end - start


def constant_sum_to_n(n):
    start = time.time()
    sum = n * (n + 1) // 2
    end = time.time()
    return sum, end - start



print(sum_to_n(5))
print(sum_to_n(1000000))

output_template = '{}({}) = {:15d} ({:8.7f} seconds)'
#for _ in range(5):
 #   print(output_template.format('sum_to_n', 1000000, *sum_to_n(1000000)))

for i in range(1, 10):
    print(output_template.format('constant_sum_to_n', i * 1000000, *constant_sum_to_n(i * 1000000)))
