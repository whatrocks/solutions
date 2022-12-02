SCORE_MAP = {
    'X': 1, # rock
    'Y': 2, # paper 
    'Z': 3, # scissors
}

WIN_MAP = {
    'AX': 3, # rock rock
    'AY': 6, # rock paper
    'AZ': 0, # rock scicossrs
    'BX': 0, # paper rock
    'BY': 3, # paper paper
    'BZ': 6, # paper scissors
    'CX': 6, # scissors rock
    'CY': 0, # scissors paper
    'CZ': 3,
}


WINNER_MAP = {
    'X': 0,
    'Y': 3,
    'Z': 6,
}

MY_MOVE_MAP = {
    'AX': 'Z', # rock lose
    'AY': 'X', # rock draw
    'AZ': 'Y', # rock win
    'BX': 'X', # paper lose
    'BY': 'Y', # paper draw
    'BZ': 'Z', # paper win
    'CX': 'Y', # scissors lose
    'CY': 'Z', # scissors draw
    'CZ': 'X', # scissors win
}




with open("input2.txt") as f:
    lines = [x.rstrip() for x in f.readlines()]
    moves = [x.split(" ") for x in lines]
    total_score = 0
    for moveset in moves:
        opponent = moveset[0]
        me = moveset[1]
        score = SCORE_MAP[me] + WIN_MAP[f'{opponent}{me}']
        total_score = total_score + score
    print(total_score)
    print("part two")
    actual_score = 0
    for moveset in moves:
        opponent = moveset[0]
        me = moveset[1]
        score = WINNER_MAP[me] + SCORE_MAP[MY_MOVE_MAP[f'{opponent}{me}']]
        actual_score = actual_score + score
    print(actual_score)
        