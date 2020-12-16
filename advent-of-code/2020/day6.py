with open("day6.txt") as f:
    lines = f.readlines()
    count = 0
    current = {}
    people = 0
    for line in lines:
        l = line.strip()
        if len(l) == 0:
            # count += len(current.keys())
            for v in current.values():
                # print("v: ", v)
                if v == people:
                    count += 1
            # reset things
            current = {}
            people = 0
        else:
            for c in l:
                if c in current:
                    current[c] += 1
                else:
                    current[c] = 1
            people += 1
    if len(current.keys()):
        for v in current.values():
            if v == people:
                count += 1
    print("count: ", count)
        