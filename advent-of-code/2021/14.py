with open("input14.txt") as f:
    lines = [x.rstrip() for x in f.readlines()]
    template = ''
    rules = {}
    for i, line in enumerate(lines):
        if i == 0:
            template = line
        elif i == 1:
            continue
        else:
            sides = line.split(' -> ')
            rules[sides[0]] = sides[1]
    print(template)
    print(rules)

    for step in range(40):
        next = ''
        for i, _ in enumerate(template):
            first = template[i]
            if i + 1 > len(template) - 1:
                next += first
            else:
                second = template[i+1]
                combined = first + second
                middle = rules[combined]
                next += first + middle
        template = next

    counts = {}
    for c in template:
        if c in counts:
            counts[c] += 1
        else:
            counts[c] = 1
    
    print(counts)
    sorted_counts = sorted(counts.values())
    print(sorted_counts[len(sorted_counts) - 1] - sorted_counts[0])

