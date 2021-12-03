with open("input3.txt") as f:
    nums = [list(num.rstrip()) for num in f.readlines()]
    transposed = [[nums[j][i] for j in range(len(nums))] for i in range(len(nums[0]))]
    
    gamma = '' # most common
    epilson = '' # least common
    
    for places in transposed:
        ones = 0
        zeroes = 0
        for digit in places:
            if digit == '0':
                zeroes += 1
            else:
                ones += 1
        if ones > zeroes:
            gamma += '1'
            epilson += '0'
        else:
            gamma += '0'
            epilson += '1'

    print(int(gamma, 2) * int(epilson, 2))

def get_next_numbers_more(nums, index):
    ones = []
    zeroes = []
    for n in nums:
        if n[index] == '1':
            ones.append(n)
        else:
            zeroes.append(n)
    if len(ones) > len(zeroes):
        return ones
    elif len(ones) == len(zeroes):
        return ones
    else:
        return zeroes

def get_next_numbers_less(nums, index):
    ones = []
    zeroes = []
    for n in nums:
        if n[index] == '1':
            ones.append(n)
        else:
            zeroes.append(n)
    if len(ones) < len(zeroes):
        return ones
    elif len(ones) == len(zeroes):
        return zeroes
    else:
        return zeroes

with open("input3.txt") as f:
    nums = [n.rstrip() for n in f.readlines()]
    len_of_num = len(nums[0])

    oxygen = nums.copy()
    co2 = nums.copy()
    for i in range(len_of_num):
        print(oxygen)
        if len(oxygen) > 1:
            oxygen = get_next_numbers_more(oxygen, i)
        if len(co2) > 1:
            co2 = get_next_numbers_less(co2, i)
    print(oxygen, co2)
    print(int(oxygen[0], 2), int(co2[0], 2))
    print(int(oxygen[0],2) * int(co2[0], 2))
        


