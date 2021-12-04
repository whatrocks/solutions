def score_calc(guess, board):
    sum = 0
    for row in board:
        for col in row:
            if col != None:
                sum += col
    return guess * sum

def check_horiz_win(board):
    for row in board:
        count = 0
        for col in row:
            if col == None:
                count += 1
            if count == len(board[0]):
                return True
    return False

def mark_board(guess, board):
    for i, row in enumerate(board):
        for j, col in enumerate(row):
            if col == guess:
                board[i][j] = None

with open('input4.txt') as f:
    lines = [x.rstrip() for x in f.readlines()]

    guesses = []
    boards = []

    current_board = []
    for index, line in enumerate(lines):
        if index == 0:
            nums = line.split(',')
            guesses = [int(x) for x in nums]
        elif index == 1:
            continue
        elif line == '':
            boards.append(current_board)
            current_board = []
        else:
            split = line.split(' ')
            cleaned = []
            for n in split:
                if len(n):
                    cleaned.append(int(n))
            current_board.append(cleaned)
    boards.append(current_board)
    
    
    found_winner = False
    for guess in guesses:
        if found_winner:
            break
        for board in boards:
            mark_board(guess, board)
            is_winner_horiz = check_horiz_win(board)
            vert_transposed = [[board[col][row] for col in range(len(board))] for row in range(len(board[0]))]
            is_winner_vert = check_horiz_win(vert_transposed)
            if is_winner_horiz:
                score = score_calc(guess, board)
                print("score is: ", score)
                found_winner = True
                break
            
        
