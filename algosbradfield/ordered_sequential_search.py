def ordered_sequential_search(alist, item):
    position = 0

    while position < len(alist):
        if alist[position] == item:
            return True

        if alist[position] > item:
            return False
            
        position = position + 1

    return False

testlist = [0, 1, 2, 8, 13]
print(ordered_sequential_search(testlist, 3))
print(ordered_sequential_search(testlist, 13))