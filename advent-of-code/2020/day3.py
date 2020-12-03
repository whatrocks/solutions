with open("day3.txt") as f:
    lines = f.readlines()
    paths = [(1,1), (3,1), (5,1), (7,1), (1,2)]
    combo = 1
    for path in paths:
        x = 0
        y = 0
        trees = 0
        while y < len(lines):
            line = lines[y][:-1]
            pos = line[x]
            print(x, y, trees, pos)
            if pos == "#":
                trees += 1
            x += path[0]
            if x >= len(line):
                x -= len(line)
            y += path[1]
        print("trees: ", trees)
        combo *= trees
    print(combo)
