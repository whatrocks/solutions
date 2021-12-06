with open('input5.txt') as f:
    hits = {}
    lines = [x.rstrip().split(' -> ') for x in f.readlines()]
    for line in lines:
        [x1, y1] = [int(x) for x in line[0].split(',')]
        [x2, y2] = [int(x) for x in line[1].split(',')]
        
        # part one only
        # if x1 != x2 and y1 != y2:
        #     continue
        currentX = x1
        currentY = y1

        # print(currentX, x2, currentY, y2)
        while True:

            currentLoc = str(currentX) + ',' + str(currentY)
            if currentLoc in hits:
                hits[currentLoc] += 1
            else:
                hits[currentLoc] = 1

            if currentX == x2 and currentY == y2:
                break

            if x1 < x2 and currentX < x2:
                currentX += 1
            if x1 > x2 and currentX > x2:
                currentX -= 1
            if y1 < y2 and currentY < y2:
                currentY += 1
            if y1 > y2 and currentY > y2:
                currentY -= 1
        # print("done", hits)
    
    count = 0
    for hit in hits.values():
        if hit >= 2:
            count +=1
    print(count)

        # print(line)