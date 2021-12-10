PAIRS = {
    ')': '(',
    ']': '[',
    '}': '{',
    '>': '<' 
}

POINTS = {
    ')': 3,
    ']': 57,
    '}': 1197,
    '>': 25137 
}

with open('input10.txt') as f:
    lines = [x.rstrip() for x in f.readlines()]

    incomplete_lines = []
    corrupted_lines = []
    points = 0
    for line in lines:
        stack = []
        for paren in line:
            if paren not in PAIRS:
                stack.append(paren)
            else:
                last = stack.pop()
                if PAIRS[paren] != last:
                    corrupted_lines.append(line)
                    points += POINTS[paren]
                    continue
    print("PART ONE: ", points)


    AUTO_COMPLETE_POINTS = {
        ')': 1,
        ']': 2,
        '}': 3,
        '>': 4 
    }

    MATCHES = {
        '(': ')',
        '[': ']',
        '{': '}',
        '<': '>' 
    }

    lines = list(set(lines) - set(corrupted_lines))
    # print(lines)
    points = []
    for line in lines:
        stack = []
        for paren in line:
            if paren not in PAIRS: # left bracket
                stack.append(paren)
            else:
                last = stack.pop()
        score = 0
        while len(stack):
            current = stack.pop()
            desire = MATCHES[current]
            score = score * 5 + AUTO_COMPLETE_POINTS[desire]
        points.append(score)
    points = sorted(points)
    middleIdx = int(len(points) / 2)
    print("PART TWO: ", points[middleIdx])
            
    

    # print("PART TWO: ", points)


"""
one or more chunks on a link.
chunks contain zero or more other chunks

some lines are incomplete
but other lines are corrupted

FIRST: discard the corrupted lines
CORRUPTED is where a chunk closes with the WRONG cHARACTER
IF THIS EVER HAPPENS, DISCARD THE LINE
"""