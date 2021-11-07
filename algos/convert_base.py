def convert_to_binary(decimal_number):
    remainder_stack = []

    while decimal_number > 0:
        remainder = decimal_number % 2
        remainder_stack.append(remainder)
        decimal_number = decimal_number // 2

    binary_digits = []
    while remainder_stack:
        binary_digits.append(str(remainder_stack.pop()))

    return ''.join(binary_digits)

print(convert_to_binary(42))

DIGITS = '0123456789abcdef'

def convert_to_base(decimal_number, base):
    remainder_stack = []

    while decimal_number > 0:
        remainder = decimal_number % base
        remainder_stack.append(remainder)
        decimal_number = decimal_number // base

    new_digits = []
    while remainder_stack:
        new_digits.append(DIGITS[remainder_stack.pop()])

    return ''.join(new_digits)

print(convert_to_base(25,2))
print(convert_to_base(25, 16))
