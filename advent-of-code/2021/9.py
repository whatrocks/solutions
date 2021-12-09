

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


    # part two
    # dFS until you hit a 9 or a None
    # def checker(grid):
