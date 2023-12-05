def is_num(c):
    if ord(c) >= ord("0") and ord(c) <= ord("9"):
        return True
    return False


NUMBS = {
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
}

with open("input1.txt") as f:
    lines = [x.rstrip() for x in f.readlines()]
    sum = 0
    for line in lines:
        left = None
        right = None
        for i, c in enumerate(line):
            if not is_num(c):
                current = ""
                current_idx = i
                while current_idx < len(line):
                    letter = line[current_idx]
                    current += letter
                    if current in NUMBS:
                        if not left:
                            left = NUMBS[current]
                        right = NUMBS[current]
                        break
                    current_idx += 1

            if is_num(c):
                if not left:
                    left = c
                right = c
        print(line, left, right)
        num = int(left + right)
        sum += num
    print("sum: ", sum)

