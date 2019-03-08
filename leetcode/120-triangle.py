inf = float('infinity')


class Solution(object):
    def minimumTotal(self, triangle):
        """
        :type triangle: List[List[int]]
        :rtype: int
        """
        choices = [0]
        for layer in triangle:
            print("----------------")
            choices = [inf] + choices + [inf]
            print("choieces: ", choices)
            best_choices = map(min, zip(choices[:-1], choices[1:]))
            choices = map(sum, zip(layer, best_choices))
            print("layer: ", layer)
            print("best choices: ", best_choices)
            print("choices: ", choices)

        print("======================", choices)
        return min(choices)

solution = Solution()

print(solution.minimumTotal([[-1],[2,3],[1,-1,-3]]))