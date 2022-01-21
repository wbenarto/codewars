
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


# 2 <Medium> Add 2 numbers
# Definition for singly-linked list.

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:

        carryover = 0
        res = ListNode()
        dummy = res

        #O(n + m)
        while l1 or l2 or carryover:
            v1 = l1.val if l1 else 0
            v2 = l2.val if l2 else 0

            tempVal = v1 + v2 + carryover

            if (tempVal) > 9:
                tempVal -= 10
                carryover = 1
            else:
                carryover = 0

            dummy.next = ListNode(tempVal)
            dummy = dummy.next

            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None

        return(res.next)

# 3 O(n) Longest Substring with no repeating char


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        charSet = set()
        l = 0
        res = 0

        for r in range(len(s)):
            while s[r] in charSet:
                charSet.remove(s[l])
                l += 1
            charSet.add(s[r])

            res = max(res, r - l + 1)
        return res


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
# Time = O(n) Space = O(n)


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
