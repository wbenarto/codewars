
# 1 <Easy> Two Sum
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        res = {}

        for i, e in enumerate(nums):
            diff = target - e
            if diff in res:
                return [i, res[diff]]
            else:
                res[e] = i


# 4 <Hard> Median of two sorted arrays
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:

        jointList = sorted(nums1 + nums2)

        if len(jointList) % 2 == 1:
            midIdx = int(len(jointList) / 2)
            return(jointList[midIdx])
        else:
            midIdx = int(len(jointList) / 2)
            med = (jointList[midIdx-1] + jointList[midIdx]) / 2
            return(med)
