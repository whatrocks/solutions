
def getDigitMap(digits):

    sortx = ["".join(sorted(x)) for x in digits]

    digitsCopy = sortx.copy()
    # get the actual letters
    cache = {}
    solved = 0
    while solved < 10:
        current = digits.pop()
        current = "".join(sorted(current))
        if len(current) == 2:
            cache[current] = 1
        if len(current) == 3:
            cache[current] = 7
        if len(current) == 7:
            cache[current] = 8
        if len(current) == 4:
            cache[current] = 4 
        solved += 1
    
    
    allletters = ["a", "b", "c", "d", "e", "f"]
    letters = { "a": None, "b": None, "c": None, "d": None, "e": None, "f": None, "g": None}
    seven = ""
    one = ""
    sixDigits = []
    fiveDigits = []
    for num in digitsCopy:
        if len(num) == 2:
            one = num
            print("one:", one)
        elif len(num) == 3:
            seven = num
            print("seven:" , seven)
        elif len(num) == 6:
            sixDigits.append(num)
        elif len(num) == 5:
            fiveDigits.append(num)
    # print(one, seven, sixDigits, fiveDigits)
    
    # lets get number six and b/c
    bc = []
    for letter in seven:
        if letter not in one:
            letters["a"] = letter
        else:
            bc.append(letter)
    print("bc: ", bc)
    # print("letters: ", letters, "bc: ", bc)
    six = ""
    zeroNine = []
    for num in sixDigits: # could be 0, 6, 9
        foundCount = 0
        for letter in num:
            if letter in bc:
                foundCount += 1
        if foundCount < 2:
            six = num
            sortedNum = "".join(sorted(num))
            cache[sortedNum] = 6

    for char in six:
        if char in bc:
            letters["c"] = char
    for char in bc:
        if char != letters["c"]:
            letters["b"] = char

    zeroNine = []
    for num in sixDigits:
        if num != six:
            zeroNine.append(num)
            # removeAbc = 
            # print("before: ", num, "after: ", removeAbc)
            # zeroNine.append(removeAbc)
    
    four = None
    for d in cache:
        if cache[d] == 4:
            four = d
            break
    
    reducedFour = four.replace(letters["a"],"").replace(letters["b"],"").replace(letters["c"],"")
    print("reduced Four: ", reducedFour)
    for num in zeroNine:
        reduced = num.replace(letters["a"],"").replace(letters["b"],"").replace(letters["c"],"")
        foundCount = 0
        dLetter = ''
        for c in reduced:
            if c in reducedFour:
                foundCount += 1
        if foundCount == 2:
            sortedNum = "".join(sorted(num))
            cache[sortedNum] = 9
            for c in reduced:
                if c not in reducedFour:
                    # print("hiiii")
                    letters["d"] = c
        else:
            sortedNum = "".join(sorted(num))
            cache[sortedNum] = 0
        print("removed: ", num, reduced)

    counts = {}
    for num in zeroNine:
        reduced = num.replace(letters["a"],"").replace(letters["b"],"").replace(letters["c"],"").replace(letters["d"],"")
        for l in reduced:
            if l in counts:
                counts[l] += 1
                letters["f"] = l
            else:
                counts[l] = 1

    for num in zeroNine:
        reduced = num.replace(letters["a"],"").replace(letters["b"],"").replace(letters["c"],"").replace(letters["d"],"").replace(letters["f"],"")
        
        for r in reduced:
            if r in reducedFour:
                letters["g"] = r
            else:
                letters["e"] = r

    for num in fiveDigits:
        # number 5
        foundB = False
        for c in num:
            if letters["b"] == c:
                foundB = True
        if not foundB:
            sortedNum = "".join(sorted(num))
            cache[sortedNum] = 5
            print("five: ", num)
    
    twoThree = []
    for num in fiveDigits:
        if num not in cache:
            twoThree.append(num)


    for num in twoThree:
        # number 2/3
        foundE = False
        for c in num:
            if letters["e"] == c:
                foundE = True
        if not foundE:
            sortedNum = "".join(sorted(num))
            cache[sortedNum] = 3

    two = ''
    for num in twoThree:
        if num not in cache:
            two = num
            sortedNum = "".join(sorted(num))
            cache[sortedNum] = 2


    # print("letters: ", letters, "six: ", six, "-09", zeroNine)
    print("cachce: ", cache)
    return cache







with open('input8.txt') as f:
    lines = [x.rstrip() for x in f.readlines()]
    sides = [x.split(' ') for line in lines for x in line.split(' | ')]
    # part one
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

    # part two
    digitMap = None
    sum = 0
    for index, side in enumerate(sides):
        print("-------------")
        if index % 2 == 0:
            # print("input side")
            digitMap = getDigitMap(side)
            print("digitMap: ", digitMap)
        else:
            buildingNumber = ''
            for num in side:
                print("num: ", num)
                sortedNum = "".join(sorted(num))
                val = digitMap[sortedNum]
                buildingNumber += str(val)
            sum += int(buildingNumber)
    print("SUM: ", sum)
