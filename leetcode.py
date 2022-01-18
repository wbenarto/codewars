
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

# 5 <Medium> Longest Palindrome Substring


class Solution:
    def longestPalindrome(self, s: str) -> str:
        res = ''
        resLen = 0

        for i in range(len(s)):
            # odd
            l, r = i, i
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if (r - l + 1) > resLen:
                    res = s[l:r+1]
                    resLen = r - l + 1
                l -= 1
                r += 1

            # even
            l, r = i, i+1
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if (r-l + 1) > resLen:
                    res = s[l:r+1]
                    resLen = r - l + 1
                l -= 1
                r += 1

        return res

# 6 <Medium> ZigZag Conversion


class Solution:
    def convert(self, s: str, numRows: int) -> str:

        if numRows == 1 or numRows > len(s):
            return s

        res = [[] for i in range(numRows)]
        idx = 0
        delta = -1
        for i in s:
            res[idx].append(i)

            if idx == 0 or idx == numRows - 1:
                delta *= -1
            idx += delta

        for i in range(len(res)):
            res[i] = ''.join(res[i])

        return(''.join(res))
