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


def preorder(node):
    if node:
        print(node['val'])
        preorder(node.get('left'))
        preorder(node.get('right'))

def postorder(node):
    if node:
        postorder(node.get('left'))
        postorder(node.get('right'))
        print(node['val'])

def inorder(node):
    if node:
        inorder(node.get('left'))
        print(node['val'])
        inorder(node.get('right'))

def construct_expression(parse_tree):
    if parse_tree is None:
        return ''
    
    left = construct_expression(parse_tree.get('left'))
    right = construct_expression(parse_tree.get('right'))
    val = parse_tree['val']

    if left and right:
        print("left: ", left)
        print("right: ", right)
        return '({}{}{})'.format(left, val, right)
    
    return val


pt = build_parse_tree('(3+(4*5))')
print(pt)
print(evaluate(pt))
print(preorder(pt))
# print("postorder")
# print(postorder(pt))
# print("inorder")
# print(inorder(pt))

print(construct_expression(pt))