count = 0
with open("input1.txt") as f:
    lines = f.readlines()
    last = None
    # part one
    for line in lines:
        current = int(line)
        if last == None:
            last = current
            continue
        if current > last:
            count += 1
        last = current
    print("part one: ", count)
        
    # part two
    count = 0
    run_sum = 0
    current_sum = 0
    for idx, val in enumerate(lines):
        current = int(val)
        oldest_in_run_sum = 0
        if idx - 3 >= 0:
            oldest_in_run_sum = int(lines[idx - 3])
        print(f'BEFORE: idx {idx}, current {current}, run_sum {run_sum}, current_sum {current_sum}, oldest_in_run_sum {oldest_in_run_sum}')
        current_sum = run_sum + current - oldest_in_run_sum
        print(f'AFTER : idx {idx}, current {current}, run_sum {run_sum}, current_sum {current_sum}, oldest_in_run_sum {oldest_in_run_sum}')
        if current_sum > run_sum and idx > 2:
            count += 1
        run_sum = current_sum
    print("part two: ", count)
