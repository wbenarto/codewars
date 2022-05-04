# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        if len(preorder) < 1 and len(inorder) < 1:
            return None

        root = TreeNode(preorder[0])

        midIdx = inorder.index(preorder[0])

        leftInorder = inorder[:midIdx]
        rightInorder = inorder[midIdx+1:]

        root.left = self.buildTree(
            [x for x in preorder if x in leftInorder], leftInorder)
        root.right = self.buildTree(
            [x for x in preorder if x in rightInorder], rightInorder)

        return root


# 110 balance a binary tree
# # Definition for a binary tree node.
# # class TreeNode:
# #     def __init__(self, val=0, left=None, right=None):
# #         self.val = val
# #         self.left = left
# #         self.right = right
# class Solution:
#     def getHeight(self, root):
#         if root is None:
#             return -1
#         return 1 + max(self.getHeight(root.left), self.getHeight(root.right))
#     def isBalanced(self, root: Optional[TreeNode]) -> bool:
#         if root is None:
#             return True
#         diff = abs(self.getHeight(root.left) - self.getHeight(root.right))
#         if diff <= 1 and self.isBalanced(root.left) and self.isBalanced(root.right):
#             return True
#         else:
#             return False


#  125
#  class Solution:
#     def findKthLargest(self, nums: List[int], k: int) -> int:
#         idx = 1
#         leftIdx = idx * 2
#         rightIdx = idx * 2 + 1
#         sorted = nums.sort(reverse=True)
#         print(nums)

#         return nums[k-1]


# 2
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:

        res = ListNode()
        cur = res
        print(res)
        carry = 0

        while l1 or l2 or carry:
            v1 = l1.val if l1 else 0
            v2 = l2.val if l2 else 0

            val = v1 + v2 + carry
            carry = val // 10
            val = val % 10
            cur.next = ListNode(val)

            cur = cur.next
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None

        return res.next


# 3
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        charSet = set()
        result = 0
        l = 0

        for r in range(len(s)):
            while s[r] in charSet:
                charSet.remove(s[l])
                l += 1
            result = max(result, r - l + 1)
            charSet.add(s[r])
        return result

# 33


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        print(nums, target)
        if (target in nums):
            return nums.index(target)
        else:
            return -1

# 17


class Solution:
    def letterCombinations(self, digits: str) -> List[str]:

        res = []

        hashMap = {'2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
                   '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'}

        def backtrack(i, curStr):
            if len(curStr) == len(digits):
                res.append(curStr)
                return
            for e in hashMap[digits[i]]:
                backtrack(i+1, curStr + e)

        if digits:
            backtrack(0, '')

        return res


# 19
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)

        left = dummy
        right = head

        while n > 0 and right:
            n -= 1
            right = right.next

        while right:
            left = left.next
            right = right.next

        left.next = left.next.next

        return dummy.next


# 34
hashMap = {}
  res = []

   if target not in nums:
        return [-1, -1]

    # if target in nums:
    #     res.append(nums.index(target))
    #     temp = nums[nums.index(target):]
    #     for e in temp:

    for i, e in enumerate(nums):
        if e == target:
            res.append(i)
    minVal = min(res)
    maxVal = max(res)
    print([minVal, maxVal])

    return [minVal, maxVal]


class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        left = self.binSearch(nums, target, True)
        right = self.binSearch(nums, target, False)
        
        return [left, right]
    
    
    def binSearch(self, nums, target, leftBias):
        l , r = 0 , len(nums) - 1
        i = -1
        
        while l <= r:
            m = (l + r ) // 2
            
            if target > nums[m]:
                l = m + 1
            elif target < nums[m]:
                r = m - 1
            else:
                i = m
                if leftBias:
                    r = m - 1
                else:
                    l = m + 1
        return i
        
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = [1] * len(nums)
        
        
        prefix = 1
        for i in range(len(nums)):
            res[i] = prefix
            prefix *= nums[i]
        
        postfix = 1
        for i in range(len(nums)-1, -1, -1):
            res[i] *= postfix
            postfix *= nums[i]
            
        return res

class Solution:
    def findMin(self, nums: List[int]) -> int:
        minNum = nums[0]
        l , r = 0, len(nums) - 1
        
        while l<=r:
            if nums[r] >= nums[l]:
                return min(nums[l], minNum)
            
            m = (l+r)//2
            minNum = min(nums[m], minNum)
            if nums[m] >= nums[l]:
                l = m + 1
            else: 
                r = m - 1
                
        return minNum

# class Solution:
#     def maxProduct(self, nums: List[int]) -> int:
#         res = nums[0]
#         maxProd, minProd = 1, 1
        
#         for i in nums:
#             if i == 0:
#                 maxProd, minProd = 1, 1
            
#             temp = maxProd * i
#             maxProd = max(maxProd * i, minProd * i, i)
#             minProd = min(temp, minProd * i, i)
            
#             res = max(maxProd, res)
#             print(res, maxProd, minProd)
        
#         return res
# class Solution:
#     def threeSum(self, nums: List[int]) -> List[List[int]]:
#         res = []
#         nums.sort()
        
#         for i, e in enumerate(nums):
#             if i > 0 and nums[i] == nums[i - 1]:
#                 continue
            
#             l , r = i + 1, len(nums)  - 1
            
#             while l < r:
#                 sum = e + nums[l] + nums[r]
                
#                 if sum < 0:
#                     l += 1
#                 elif sum > 0:
#                     r -= 1
#                 else: 
#                     res.append([e, nums[l], nums[r]])
#                     l += 1
#                     while nums[l] == nums[l-1] and l < r:
#                         l += 1
#         return res
                
# 
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
  
        l, r = 0, len(numbers)-1
        
        while l < r:
            if numbers[l] + numbers[r] == target:
                return [l+1, r+1]
            elif numbers[l] + numbers[r] < target:
                l+=1
            else:
                r -= 1
                
            
        
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()
        for i, e in enumerate(nums):
            if i>0 and nums[i] == nums[i-1]:
                continue
            
            l , r = i + 1, len(nums) - 1
            
            while l < r:
                tsome = e + nums[l] + nums[r]
                if tsome > 0:
                    r -= 1
                elif tsome < 0:
                    l += 1
                else:
                    res.append([e, nums[l], nums[r]])
                    l += 1
                    while nums[l] == nums[l-1] and l < r:
                        l += 1
        return res
 
 class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l , r = 0, len(nums) - 1
        
        while l<=r:
            m=(l+r)//2
            
            if nums[m] == target:
                return m
            
            if nums[m] >= nums[l]:
                if target < nums[l] or target > nums[m]:
                    l = m + 1
                else:
                    r = m - 1
            else:
                if target > nums[r] or target < nums[m]:
                    r = m - 1
                else: 
                    l = m + 1
        return -1
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        res = nums[0]
        maxProd, minProd = 1, 1
        
        for i in nums:
            if i == 0:
                maxProd, minProd = 1, 1
            
            temp = maxProd * i
            maxProd = max(maxProd * i, minProd * i, i)
            minProd = min(temp, minProd * i, i)
            
            res = max(maxProd, res)
            print(res, maxProd, minProd)
        
        return res

# 11 
class Solution:
    
    def maxArea(self, height: List[int]) -> int:
        resArea = []
        
        l, r = 0, len(height)-1

            # self.calcArea(width, min(l,r), resArea = [])
        while l < r:
            width = r - l
            resArea.append(self.calcArea(width, min(height[l],height[r])))
            if height[l] < height[r]:
                l+=1
               
                # self.calcArea(width, min(height[l],height[r]), resArea = [])
            
            else:
                r-= 1
                # self.calcArea(width,min(height[l],height[r]), resArea = [])
        # print(max(resArea))
        return max(resArea)
        
    def calcArea(self, indexWidth, height):
        return indexWidth * height

class Solution:
    def maxArea(self, height: List[int]) -> int:
        tempMax = 0
        
        l , r = 0, len(height) - 1
        
        while l < r:
            dist = r - l
            area = min(height[l], height[r]) * dist
            tempMax = max(tempMax, area)
            
            if height[l] < height[r]:
                l += 1
            else:
                r -= 1
        return tempMax
   
        
    
        
# 22
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        stack = []
        res = []
        
        def backtrack(openN, closeN):
            
            if openN == closeN == n:
                res.append(''.join(stack))
                return
        
            if openN < n:
                stack.append('(')
                backtrack(openN + 1 , closeN)
                stack.pop()
            
            if closeN < openN:
                stack.append(')')
                backtrack(openN, closeN + 1)
                stack.pop()
                
        backtrack(0, 0)
        
        return res

# 33 Find target in rotated sorted array
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l , r = 0, len(nums) - 1
        
        while l <= r:
            m = (l + r) // 2
            if nums[m] == target: 
                return m
            
            # left sorted
            if nums[l] <= nums[m]:
                if target < nums[l] or target > nums[m]:
                    l = m + 1
                else: 
                    r = m - 1
            # right sorted
            else: 
                if target < nums[m] or target > nums[r]:
                    r = m - 1
                else: 
                    l = m + 1
    
            
        return -1

# 15 3sum
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()
        
        for i, e in enumerate(nums):
            if i > 0 and e == nums[i-1]:
                continue
            
            l , r = i + 1, len(nums) - 1
            
            while l < r:
                threeSum = e + nums[l] + nums[r]
                
                if threeSum > 0:
                    r -= 1
                elif threeSum < 0: 
                    l += 1
                else:
                    res.append([e, nums[l], nums[r]])
                    l += 1
                    while nums[l] == nums[l-1] and l < r:
                        l += 1
        return res


# 152 Max product subarray
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        res = max(nums)
        maxSub, minSub = 1, 1
        
        for n in nums:
            if n == 0:
                maxSub, minSub = 1, 1
                continue
            
            temp = n * maxSub
            maxSub = max(n *maxSub , n*minSub, n)
            minSub = min(temp, n*minSub, n)
            
            res= max(maxSub, res)
        return res
# 153 Min num in sub-sorted arr
class Solution:
    def findMin(self, nums: List[int]) -> int:
        res = nums[0]
        l, r = 0, len(nums) - 1
        
        while l <= r:
            if nums[l] <= nums[r]:
                res = min(res, nums[l])
                break
            m = (l + r) // 2
            res = min(res, nums[m])
            
            if nums[m] >= nums[l]:
                l = m + 1
            else: 
                r = m - 1
            
        return res
# 238 product of list except itself
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        
        # loop thru arr
        # multiply all nums except i
        
        # if 0 in list return 0
        
        res = [1] * len(nums)
        
        prefix = 1
        for i in range(len(nums)):
            res[i] = prefix
            prefix *= nums[i]
        postfix = 1
        for i in range(len(nums)-1, -1, -1):
            res[i] *= postfix
            postfix *= nums[i]
         
        return res
