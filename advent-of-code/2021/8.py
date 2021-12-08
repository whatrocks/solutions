with open('input8.txt') as f:
    lines = [x.rstrip() for x in f.readlines()]
    sides = [x.split(' ') for line in lines for x in line.split(' | ')]
    # print(sides)
    easyDigitSegments = [2, 3, 4, 7]
    easyDigitCount = 0
    for index, side in enumerate(sides):
        if index % 2 != 0:
            # print(side)
            for digit in side:
                # print(digit, len(digit))
                if len(digit) in easyDigitSegments:
                    easyDigitCount += 1
    print(easyDigitCount)
