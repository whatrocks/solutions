def validator(minimum, maximum, target, pw):
    letter_count = 0
    for c in pw:
        if c == target:
            letter_count += 1
        if letter_count > maximum:
            return False
    if letter_count < minimum:
        return False
    return True

def validator_two(first, second, target, pw):
    print(first, second, target, pw)
    if first >len(pw) or second > len(pw):
        return False
    if (pw[first] == target or pw[second] == target) and (pw[first] != pw[second]):
        return True
    return False

with open("input-day-2.txt") as f:
    lines = f.readlines()
    rules = [line.split() for line in lines]
    valid_first = 0
    valid_second = 0
    for rule in rules:
        targets = rule[0].split("-")
        is_valid_first = validator(int(targets[0]), int(targets[1]), rule[1][0], rule[2])
        if is_valid_first:
            valid_first += 1
        is_valid_second = validator_two(int(targets[0]) - 1, int(targets[1]) - 1, rule[1][0], rule[2])
        if is_valid_second:
            valid_second += 1
    print("valid first", valid_first)
    print("valid second", valid_second)


