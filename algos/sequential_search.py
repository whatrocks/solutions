def sequential_search(alist, item):
    position = 0

    while position < len(alist):
        if alist[position] == item:
            return True
        position += 1

    return False

testlist = [1, 2, 32, 8, 17, 19, 42, 13, 0]

print(sequential_search(testlist, 3))  # => False
print(sequential_search(testlist, 13))  # => True
