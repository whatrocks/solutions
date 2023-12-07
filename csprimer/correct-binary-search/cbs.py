def bs(arr, target):
    if not len(arr):
        return -1
    start = 0
    end = len(arr) - 1

    count = 0
    while True:
        mid = int((start + end) / 2)
        print(start, end, mid)
        if arr[mid] == target:
            return mid
        if arr[mid] < target:
            start = mid + 1
        else:
            end = mid - 1
        if start == end:
            if arr[start] == target:
                return start
            else:
               return -1
        if start > end:
            return -1
        count += 1

cases = (
        ([-4,-2,1,6,10], -2, 1), 
        ([-4, -2, 1, 6, 10], 5, -1),
        ([], 10, -1),
        ([-4,-2,0,1], 1, 3),
        ([-4,-2,0,1],-1,-1),
)

for arr, target, expected in cases:
    result = bs(arr, target)
    assert result == expected, "wrong"
print("ok")
