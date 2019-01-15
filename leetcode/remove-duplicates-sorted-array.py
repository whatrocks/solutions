class Solution:
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """        
        index = 0
        prior = None
        while True:
            try: 
                current = nums[index]
                if current == prior:
                    del nums[index]
                else:
                    prior = current
                    index += 1
            except IndexError: 
                return len(nums)

mySolution = Solution()
assert mySolution.removeDuplicates([1,1,2]) == 2
assert mySolution.removeDuplicates([0,0,1,1,1,2,2,3,3,4]) == 5