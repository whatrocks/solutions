with open("input4.txt") as f:
    lines = [x.rstrip() for x in f.readlines()]
    count = 0
    overlap = 0 
    for line in lines:
        pieces = line.split(",")
        left = pieces[0].split("-")
        right = pieces[1].split("-")
        print(left)
        left_range = list(range(int(left[0]), int(left[1]) + 1))
        right_range = list(range(int(right[0]), int(right[1]) + 1))
        intersect = set(left_range).intersection(set(right_range))
        if len(intersect) > 0:
            overlap = overlap + 1
        # print(left_range, right_range, len(intersect))
        if len(intersect) == len(left_range) or len(intersect) == len(right_range):
            count = count + 1
    print(f"count {count}, overlap {overlap}")