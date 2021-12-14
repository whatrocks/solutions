import copy
with open('input13.txt') as f:
    lines = [x.rstrip() for x in f.readlines()]
    locations = []
    folds = []
    foundGap = False
    for line in lines:
        if line == "":
            foundGap = True
            continue
        if not foundGap:
            location = line.split(",")
            locations.append(location)
        else:
            move = line.split("fold along ")[1].split("=")
            folds.append(move)

    xMap = {}
    yMap = {}
    for location in locations:
        x = location[0]
        y = location[1]
        # update xMap
        if x in xMap:
            xMap[x][y] = '#'
        else:
            xMap[x] = {y: '#'}

        # update yMap
        if y in yMap:
            yMap[y][x] = '#'
        else:
            yMap[y] = {x: '#'}
    
    # print("-----------")
    # print("XMAP")
    # print(xMap)
    # print("-----------")
    # print("YMAP")
    # print(yMap)
    # print("-----------")


    # print(height, width)
    def printGrid(yMap, xMap):

        height = sorted([int(x) for x in yMap.keys()])[-1] + 1
        width = sorted([int(x) for x in xMap.keys()])[-1] + 1
        s = ''
        for i in range(height):
            if str(i) in yMap:
                # print("found", i)
                positions = yMap[str(i)]
                # print("i: ", i, "pos: ", positions)
                row = ''
                for j in range(width):
                    if str(j) in positions:
                        row += '#'
                    else:
                        row += '.'
                s += row
            else:
                s += '.' * width
            s += '\n'
        print("=============")
        print(s)
        print("=============")
    
    def countHashes(yMap):
        count = 0
        for key in yMap.keys():
            for loc in yMap[key].keys():
                count += 1
        return count


    # printGrid(yMap)
    # print("##############################################")
    for direction, distance in folds:
        # print("ymap: ", yMap)
        # print("xmap: ", xMap)
        # printGrid(yMap)
        newYMap = copy.deepcopy(yMap)
        newXMap = copy.deepcopy(xMap)
        if direction == "y":
            # print("fold up")
            for key in yMap:
                keys_to_delete = []
                if int(key) > int(distance):
                    # print("key: ", key)
                    targetKey = str(int(distance) - (int(key) - int(distance)))
                    for location in yMap[key]:
                        # update yMap
                        if targetKey in newYMap:
                            newYMap[targetKey][location] = '#'
                        else:
                            newYMap[targetKey] = {location: '#'}
                        # update xMap
                        
                        if location in newXMap:
                            newXMap[location][targetKey] = '#'
                        else:
                            newXMap[location] = {targetKey: '#'}
                        del newXMap[location][key]
                    del newYMap[key]
        else:
            print("Fold left")
            for key in xMap:
                if int(key) > int(distance):
                    targetKey = str(int(distance) - (int(key) - int(distance)))
                    for location in xMap[key]:
                        # update xMap
                        if targetKey in newXMap:
                            newXMap[targetKey][location] = '#'
                        else:
                            newXMap[targetKey] = {location: '#'}
                        # update yMap
                        if location in newYMap:
                            newYMap[location][targetKey] = '#'
                        else:
                            newYMap[location] = {targetKey: '#'}
                        del newYMap[location][key]
                    del newXMap[key]
        yMap = copy.deepcopy(newYMap)
        xMap = copy.deepcopy(newXMap)

    # print("-----------")
    # print("XMAP")
    # print(xMap)
    # print("-----------")
    # print("YMAP")
    # print(yMap)
    # print("-----------")
    printGrid(yMap, xMap)
    counted = countHashes(yMap)
    print(counted)