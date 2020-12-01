cache = {}
with open("input-day-1.txt") as f:
    lines = f.readlines()
    for line in lines:
        n = int(line);
        target = 2020 - n;
        if target in cache:
            print(n, target, n + target, n * target)
            break
        cache[n] = n
print("done with part one!")

print("part two...")
with open("input-day-1.txt") as f:
    lines = f.readlines()
    i = 0
    found = False
    while i < len(lines):
        c = {}
        j = i + 1
        while j < len(lines):
            current = int(lines[i]) + int(lines[j])
            target = 2020 - current
            if target in cache:
                print("found it", int(lines[i]), int(lines[j]), target)
                print(int(lines[i]) * int(lines[j]) * target)
                print(current + target)
                found = True
                break
            cache[current] = current
            j += 1
        i += 1
        if found:
            break
print("done with part two!")
