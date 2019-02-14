OPENING = '('

def is_balanced(parens):
    stack = []
    for paren in parens:
        if paren == OPENING:
            stack.append(paren)
        else:
            try:
                stack.pop()
            except IndexError: # too many closing parens
                return False
    return len(stack) == 0 # false if too many opening parens

print(is_balanced('((()))'))
print(is_balanced('(()'))
print(is_balanced('())'))

PAIRS = {
    '(': ')',
    '{': '}',
    '[': ']'
}

def is_balanced_pairs(symbols):
    stack = []
    for s in symbols:
        if s in PAIRS.keys():
            stack.append(s)
            continue
        try:
            expected_opening_symbol = stack.pop()
        except IndexError: # too many closing
            return False
        if s != PAIRS[expected_opening_symbol]:
            return False

    return len(stack) == 0

print(is_balanced_pairs('{{([][])}()}'))
print(is_balanced_pairs('{[])'))
print(is_balanced_pairs('(())'))