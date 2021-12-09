

with open("input9.txt") as f:
    lines = [x.rstrip() for x in f.readlines()]
    grid = [list(line) for line in lines]
    
    # part one
    low_points = []
    for rowIdx, row in enumerate(grid):
        for colIdx, col in enumerate(row):
            pos = int(col)
            is_low = True
            # check left
            if colIdx > 0:
                # print("checkLeft")
                left = int(grid[rowIdx][colIdx - 1])
                if pos >= left:
                    is_low = False
            # check right
            if colIdx < len(row) - 1:
                right = int(grid[rowIdx][colIdx + 1])
                if pos >= right:
                    is_low = False
                # print("checkRight")
            # check up
            if rowIdx > 0:
                up = int(grid[rowIdx - 1][colIdx])
                if pos >= up:
                    is_low = False
                # print("checkUp")
            # check down
            if rowIdx < len(grid) -1:
                down = int(grid[rowIdx +1][colIdx])
                if pos >= down:
                    is_low = False
                # print("check down")
            if is_low:
                low_points.append(pos)
    print(low_points)
    risk = 0
    for low in low_points:
        risk += low + 1
    print(risk)
    # print(grid)

    # count the sizes of the islands
    print("============================================")
    def printGrid(g):
        s = ''
        for row in g:
            s2 = ''
            for col in row:
                s += col
            s2 += '\n'
            s += s2
        print(s)

    sizes = []
    def checker(rIdx, cIdx, size):
        val = grid[rIdx][cIdx]
        if val == "9":
            return size
        else:
            grid[rIdx][cIdx] = "9"
            size += 1
            #up
            if rIdx > 0:
                size = checker(rIdx -1,cIdx, size)
            #down
            if rIdx < len(grid) - 1:
                size = checker(rIdx + 1,cIdx, size)
            #left
            if cIdx > 0:
                size = checker(rIdx,cIdx - 1, size)
            #right
            if cIdx < len(grid[rIdx]) - 1:
                size = checker(rIdx, cIdx + 1, size)
            return size

    for rIdx, row in enumerate(grid):
        for cIdx, col in enumerate(row):
            # printGrid(grid)
            if col != '9':
                s = checker(rIdx, cIdx, 0)
                sizes.append(s)
    

    biggest = sorted(sizes, reverse=True)
    result = biggest[0] * biggest[1] * biggest[2]
    print(result)
