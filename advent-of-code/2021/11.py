grid = []

def printGrid(g):
    s = ''
    for row in g:
        rs = ''
        for col in row:
            rs += str(col) + ','
        rs += '\n'
        s += rs
    print(s)

with open("input11.txt") as f:
    lines = [x.rstrip() for x in f.readlines()]
    grid = [list(l) for l in lines]
    for r, row in enumerate(grid):
        for c, col in enumerate(row):
            grid[r][c] = int(col)
    
    flash_count = 0
    for _ in range(100):
        octopi = []
        flashed = {}
        # first increase everyone by one
        # and add the ones greater than 10 to the batcj
        for r, row in enumerate(grid):
            for c, col in enumerate(row):
                new_age = grid[r][c] + 1
                if new_age > 9:
                    octopi.append([r, c])
                grid[r][c] = new_age

        printGrid(grid)
        # handle the ones next to flashes
        while len(octopi):
            octopus = octopi.pop(0)
            row = octopus[0]
            col = octopus[1]
            age = grid[row][col]
            # print("row: ", row, "col: ", col, "age: ", age)
            # new_age = age + 1
            flash_key = str(row) + "-" + str(col)
            # print(flashed)
            if flash_key not in flashed:
                grid[row][col] = 0
                # print("flash key: ", flash_key)
                flashed[flash_key] = True
                flash_count += 1
                # up
                if row > 0:
                    neighbor_age = grid[row-1][col] + 1
                    if neighbor_age > 9:
                        octopi.append([row-1, col])
                    if neighbor_age != 1:
                        grid[row-1][col] = neighbor_age
                # down
                if row < len(grid) - 1:
                    neighbor_age = grid[row+1][col] + 1
                    if neighbor_age > 9:
                        octopi.append([row+1, col])
                    if neighbor_age != 1:
                        grid[row+1][col] = neighbor_age
                # left
                if col > 0:
                    neighbor_age = grid[row][col - 1] + 1
                    if neighbor_age > 9:
                        octopi.append([row, col - 1])
                    if neighbor_age != 1:
                        grid[row][col - 1] = neighbor_age
                # right
                if col < len(grid[row]) - 1:
                    neighbor_age = grid[row][col +1] + 1
                    if neighbor_age > 9:
                        octopi.append([row, col +1])
                    if neighbor_age != 1:
                        grid[row][col + 1] = neighbor_age
                # up left
                if row > 0 and col > 0:
                    neighbor_age = grid[row -1][col -1] + 1
                    if neighbor_age > 9:
                        octopi.append([row -1 , col -1])
                    if neighbor_age != 1:
                        grid[row -1][col - 1] = neighbor_age
                # up right
                if row > 0 and col < len(grid[row]) - 1:
                    neighbor_age = grid[row-1][col +1] + 1
                    if neighbor_age > 9:
                        octopi.append([row -1, col +1])
                    if neighbor_age != 1:
                        grid[row -1][col + 1] = neighbor_age
                # down left
                if row < len(grid) - 1 and col > 0:
                    neighbor_age = grid[row +1][col -1] + 1
                    if neighbor_age > 9:
                        octopi.append([row +1, col -1])
                    if neighbor_age != 1:
                        grid[row + 1][col - 1] = neighbor_age
                # down right
                if row < len(grid) -1 and col < len(grid[row]) -1:
                    neighbor_age = grid[row+1][col+1] + 1
                    if neighbor_age > 9:
                        octopi.append([row+1, col+1])
                    if neighbor_age != 1:
                        grid[row+1][col+1] = neighbor_age
                # printGrid(grid)
                
    print("--------")
    print("flash Count: ", flash_count)
    printGrid(grid)
    print("--------")
