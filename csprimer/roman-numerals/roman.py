PLACES = {
 '1': ['I', 'V', 'X'],
 '10': ['X','L', 'C'],
 '100': ['C', 'D', 'M'],
 '1000': ['M'],
}

def maker(digit, pattern):
    if digit == 1:
        return pattern[0]
    if digit == 2:
        return pattern[0] * 2
    if digit == 3:
        return pattern[0] * 3
    if digit == 4:
        return pattern[0] + pattern[1]
    if digit == 5:
        return pattern[1]
    if digit == 6:
        return pattern[1] + pattern[0]
    if digit == 7:
        return pattern[1] + pattern[0] * 2
    if digit == 8:
        return pattern[1] + pattern[0] * 3
    if digit == 9:
        return pattern[0] + pattern[2]

def get_place_value(digit, place):
   return 'foo'

def roman(num): 
    thousands = num // 1000
    hundreds = num // 100 % 10
    tens = num // 10 % 10
    ones = num % 10
    result = ''
    if thousands:
        result += maker(thousands, PLACES['1000'])
    if hundreds:
        result += maker(hundreds, PLACES['100'])
    if tens:
        result += maker(tens, PLACES['10'])
    if ones:
        result += maker(ones, PLACES['1'])
        
    return result


ROMANS = {
 '1000': 'M',
 '900': 'CM',
 '500': 'D',
 '400': 'CD',
 '100': 'C',
 '90': 'XC',
 '50': 'L',
 '40': 'XL',
 '10': 'X',
 '9': 'IX',
 '5': 'V',
 '4': 'IV',
 '1': 'I',
}


def roman_recursive(num):
    # subtract partA
    if num == 0:
        return ''
    for key in ROMANS:
        target = int(key)
        if num - target >= 0:
            break
    return ROMANS[key] + roman_recursive(num - target)

for i in range(1,21):
    print(roman_recursive(i))

tests = [39, 246, 789, 2421]

for test in tests:
    print(f"{test} is {roman(test)}")

print("done")
