
def does_exist(board, word, word_idx, i, j, visited):
    if len(word) == word_idx:
        return True
    
    for (di, dj) in ((-1, 0), (1, 0), (0, -1), (0, 1)):
        ci = i + di
        cj = j + dj
        if not 0 <= ci < len(board) or not 0 <= cj <= len(board[ci]) \
            or board[ci][cj] != word[word_idx] or (ci, cj) in visited:
            continue
        visited.add((ci, cj))
        has_path = does_exist(
            board,
            word,
            word_idx + 1,
            ci,
            cj,
            visited
        )
        visited.remove((ci, cj))
        if has_path:
            return True
    return False

class Solution(object):
    def exist(self, board, word):
        for i, row in enumerate(board):
            for j, val in enumerate(row):
                if val == word[0] and \
                    does_exist(board, word, 1, i, j, {(i, j)}):
                    return True
        return False
