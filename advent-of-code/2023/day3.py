def is_symbol(c):
    return not c.isdigit() and not c == "."

def check_touch(row, col, height, width, lines):
    # up
    if (row > 0):
        if is_symbol(lines[row-1][col]):
            return True
    # down
    if (row < height - 1):
        if is_symbol(lines[row+1][col]):
            return True
    # left
    if (col > 0):
        if is_symbol(lines[row][col-1]):
            return True
    # right
    if (col < width - 1):
        if is_symbol(lines[row][col+1]):
            return True
    # up-left
    if row > 0 and col > 0:
        if is_symbol(lines[row-1][col-1]):
            return True
    # up-right
    if row > 0 and col < width - 1:
        if is_symbol(lines[row-1][col+1]):
            return True
    # down-left
    if row < height - 1 and col > 0:
        if is_symbol(lines[row+1][col-1]):
            return True
    # down-right
    if row < height - 1 and col < width - 1:
        if is_symbol(lines[row+1][col+1]):
            return True
    return False


LOC = {}
GEARS = []

with open("input3.txt") as f:
    lines = [x.rstrip() for x in f.readlines()]
    result = 0
    height = len(lines)
    for row_idx, line in enumerate(lines):
        width = len(line)
        # get the numbers in a line
        num = ''
        is_touching = False
        coords = []
        for col_idx, c in enumerate(line):
            if c.isdigit():
                num += c
                is_touching = is_touching or check_touch(row_idx, col_idx, height, width, lines) 
                # check if is_touching
                coords.append(f'{row_idx}-{col_idx}')
            elif len(num) and is_touching:
                print("num: ", num)
                result += int(num)
                is_touching = False
                for coord in coords:
                    LOC[coord] = int(num)
                num = ''
                coords = []
            else:
                num = ''
                is_touching = False
                coords = []
            if c == "*":
                GEARS.append(f"{row_idx}-{col_idx}")
        if num and is_touching:
            result += int(num)
            for coord in coords:
                LOC[coord] = int(num)
            num = ''
            is_touching = False
            coords = []
        # for each number check to see if any of its digits touch a symbol
    print(f"result {result}")
    
    gear_total = 0
    for gear in GEARS:
        pieces = gear.split("-")
        row_idx = int(pieces[0])
        col_idx = int(pieces[1])
        nums = set()
        # check if touching two numbers
        # up 
        if row_idx > 0:
            key = f"{row_idx - 1}-{col_idx}"
            if key in LOC:
                nums.add(LOC[key])
        # down
        if row_idx < height - 1:
            key = f"{row_idx+1}-{col_idx}"
            if key in LOC:
                nums.add(LOC[key])
        # left
        if col_idx > 0:
            key = f"{row_idx}-{col_idx - 1}"
            if key in LOC:
                nums.add(LOC[key])
        # right
        if col_idx < width - 1:
            key = f"{row_idx}-{col_idx+1}"
            if key in LOC:
                nums.add(LOC[key])
        # up left
        if row_idx > 0 and col_idx > 0:
            key = f"{row_idx - 1}-{col_idx - 1}"
            if key in LOC:
                nums.add(LOC[key])
        # up right
        if row_idx > 0 and col_idx < width - 1:
            key = f"{row_idx - 1}-{col_idx + 1}"
            if key in LOC:
                nums.add(LOC[key])
        # down left
        if row_idx < height - 1 and col_idx > 0:
            key = f"{row_idx + 1}-{col_idx-1}"
            if key in LOC:
                nums.add(LOC[key])
        # down right
        if row_idx < height - 1 and col_idx < width - 1:
            key = f"{row_idx + 1}-{col_idx+1}"
            if key in LOC:
                nums.add(LOC[key])

        # if 
        print(nums)
        if len(nums) == 2:
            gear_ratio = 1
            for i in nums:
                gear_ratio *= i
            print(f"gear ratio {gear_ratio}")
            gear_total += gear_ratio
        

    print(f"gear total {gear_total}")
    #print(LOC)
    #print(GEARS)
