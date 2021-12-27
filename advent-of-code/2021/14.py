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

    """
    # works for part one
    for step in range(6):
        print(step, template, len(template))
        length = len(template)
        next = ''
        for i in range(length):
            first = template[i]
            if i + 1 > length - 1:
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
    """

    import collections
    # part two
    counts = {}
    q = collections.deque()

    for i, c in enumerate(template):
        if c in counts:
            counts[c] += 1
        else:
            counts[c] = 1
        if i == len(template) - 1:
            break
        first_letter = template[i]
        second_letter = template[i + 1]
        combined = first_letter + second_letter
        q.appendleft(combined)

    # print(q)

    for step in range(40):
        print(step)
        next_queue = collections.deque()
        while len(q):
            current = q.pop()
            next = rules[current]
            if next in counts:
                counts[next] += 1
            else:
                counts[next] = 1
            next_queue.appendleft(current[0] + next)
            next_queue.appendleft(next + current[1])
        # print("next: ", next_queue)
        q = next_queue

    # l = 20
    # add = l - 1
    # for _ in range(40):
    #     l  += add
    #     add *= 2
    # print("L : ", l)
    
    # print(counts)
    sorted_counts = sorted(counts.values())
    print(sorted_counts[len(sorted_counts) - 1] - sorted_counts[0])

