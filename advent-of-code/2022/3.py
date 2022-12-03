

# 67 - 90 A-Z
# 97 - 122 a - z

def get_priority(letter):
    prio = ord(letter) - 96
    if prio < 0:
        prio = prio + 58
    return prio

priority_sum = 0

badge_sum = 0

with open("input3.txt") as f:
    lines = [x.rstrip() for x in f.readlines()]
    for line in lines:
        length = len(line)
        half = int(length/2)
        cache = {}
        side_a = set(line[0:half])
        side_b = set(line[half:])
        letter = side_a.intersection(side_b)
        priority_sum = priority_sum + get_priority(next(iter(letter)))

    # part two
    
    for idx, line in enumerate(lines):
        if (idx + 1) % 3 == 0:
            letter = set(lines[idx - 2]).intersection(set(lines[idx-1])).intersection(set(lines[idx]))
            badge_sum = badge_sum + get_priority(next(iter(letter)))

        
print(priority_sum, badge_sum)
        
