OPENING = '('

def is_balanced(parentheses):
    stack = []
    for paren in parentheses:
        if paren == OPENING:
            stack.append(paren)
        else:
            try:
                stack.pop()
            except IndexError: # too many closing parens
                return False
    return len(stack) == 0 # false if too many open parens

print(is_balanced('((()))'))
print(is_balanced('(()'))
print(is_balanced('())'))
