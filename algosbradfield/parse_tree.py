import operator

OPERATORS = {
    '+': operator.add,
    '-': operator.sub,
    '*': operator.mul,
    '/': operator.truediv
}

LEFT_PAREN = '('
RIGHT_PAREN = ')'

def build_parse_tree(expression):
    tree = {}
    stack = [tree]
    node = tree
    for token in expression:
        if token == LEFT_PAREN:
            # new paren
            # create a left node, add current to stack, and descend
            node['left'] = {}
            stack.append(node)
            node = node['left']
        elif token == RIGHT_PAREN:
            # end of paren
            node = stack.pop()
        elif token in OPERATORS.keys():
            # is a math operator
            # set value to token, create a right and descend
            node['val'] = token
            node['right'] = {}
            stack.append(node)
            node = node['right']
        else:
            # is a number
            # add the number and return to parent at top of stack
            node['val'] = int(token)
            parent = stack.pop()
            node = parent
    return tree

def evaluate(tree):
    try:
        operate = OPERATORS[tree['val']]
        return operate(evaluate(tree['left']), evaluate(tree['right']))
    except KeyError:
        # no left or right, so is a leaf -- our base case
        return tree['val']


pt = build_parse_tree('(3+(4*5))')
print(pt)
print(evaluate(pt))