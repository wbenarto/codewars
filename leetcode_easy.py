# 1 Two Sum
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dict = {}

        for i in range(len(nums)):
            leftover = target - nums[i]

            if leftover in dict:
                return [dict[leftover], i]

            dict[nums[i]] = i

# 125


class Solution:
    def isValid(self, s: str) -> bool:
        charSet = {')': '(', "]": "[", "}": "{"}
        stack = []

        for i in s:
            if i in charSet:
                if stack and stack[-1] == charSet[i]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(i)

        return True if not stack else False


class Solution:
    def isValid(self, s: str) -> bool:
        charSet = {')': '(', "]": "[", "}": "{"}
        stack = []

        for i in s:
            if i in charSet:
                if stack and stack[-1] == charSet[i]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(i)

        return True if not stack else False


class Solution:
    def isPalindrome(self, s: str) -> bool:
        # take out white space
        # check 2 pointer left and end

        l, r = 0, len(s)-1
        while l < r:
            print(self.isAlNum(s[l]), self.isAlNum(s[r]))
            while l < r and not self.isAlNum(s[l]):
                l += 1
            while l < r and not self.isAlNum(s[r]):
                r -= 1
            if s[l].lower() != s[r].lower():
                return False
            l += 1
            r -= 1

        return True

    def isAlNum(self, n):
        return ('a' <= n.lower() <= 'z' or
                '0' <= n <= '9'
                )


class Solution:
    def isPalindrome(self, s: str) -> bool:
        # take out white space
        # check 2 pointer left and end

        l, r = 0, len(s)-1
        while l < r:
            print(self.isAlNum(s[l]), self.isAlNum(s[r]))
            while l < r and not self.isAlNum(s[l]):
                l += 1
            while l < r and not self.isAlNum(s[r]):
                r -= 1
            if s[l].lower() != s[r].lower():
                return False
            l += 1
            r -= 1

        return True

    def isAlNum(self, n):
        return ('a' <= n.lower() <= 'z' or
                '0' <= n <= '9'
                )

# 26 remove duplicates in arr


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        l = 1

        for i in range(1, len(nums)):
            if nums[i] != nums[i-1]:
                nums[l] = nums[i]
                l += 1
        return l


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        hashS = {}
        hashT = {}

        for e in s:
            if e in hashS:
                hashS[e] += 1
            else:
                hashS[e] = 1

        for e in t:
            if e in hashT:
                hashT[e] += 1
            else:
                hashT[e] = 1

        print(hashS)
        print(hashT)

        if hashS == hashT:
            return True
        else:
            return False


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        hashS = {}
        hashT = {}

        for e in s:
            if e in hashS:
                hashS[e] += 1
            else:
                hashS[e] = 1

        for e in t:
            if e in hashT:
                hashT[e] += 1
            else:
                hashT[e] = 1

        print(hashS)
        print(hashT)

        if hashS == hashT:
            return True
        else:
            return False


# 121 Buy Sell Stocks


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # set left pointer, then iterate thru rest of element, keep max profit
        # move left pointer until end

        # set left pointer, find highest num bigger than left pointer num
        # set profit
        resProfit = 0

        for i in range(len(prices) - 1):
            maxNum = max(prices[i:]) if max(
                prices[i:]) > prices[i] else prices[i]

            profit = maxNum - prices[i]

            if profit > resProfit:
                resProfit = profit
        return resProfit

        class Solution:

    def maxProfit(self, prices: List[int]) -> int:
        # set left pointer, then iterate thru rest of element, keep max profit
        # move left pointer until end

        # set left pointer, find highest num bigger than left pointer num
        # set profit
        resProfit = 0

        for i in range(len(prices) - 1):
            maxNum = max(prices[i:]) if max(
                prices[i:]) > prices[i] else prices[i]

            profit = maxNum - prices[i]

            if profit > resProfit:
                resProfit = profit
        return resProfit

#         for i in range(len(prices)-1):
#             r = i + 1
#             maxProfit = 0
#             while r < len(prices):
#                 profit = prices[r] - prices[i]
#                 if profit > maxProfit:
#                     maxProfit = profit
#                 r += 1

#             if maxProfit > resProfit:
#                 resProfit = maxProfit

#         return resProfit

# Loop once, set min and calculate profit in the same loop.


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # set left pointer, then iterate thru rest of element, keep max profit
        # move left pointer until end

        # set left pointer, find highest num bigger than left pointer num
        # set profit
        resProfit = 0

        for i in range(len(prices) - 1):
            maxNum = max(prices[i:]) if max(
                prices[i:]) > prices[i] else prices[i]

            profit = maxNum - prices[i]

            if profit > resProfit:
                resProfit = profit
        return resProfit

        class Solution:

    def maxProfit(self, prices: List[int]) -> int:
        # set left pointer, then iterate thru rest of element, keep max profit
        # move left pointer until end

        # set left pointer, find highest num bigger than left pointer num
        # set profit
        resProfit = 0

        for i in range(len(prices) - 1):
            maxNum = max(prices[i:]) if max(
                prices[i:]) > prices[i] else prices[i]

            profit = maxNum - prices[i]

            if profit > resProfit:
                resProfit = profit
        return resProfit

#         for i in range(len(prices)-1):
#             r = i + 1
#             maxProfit = 0
#             while r < len(prices):
#                 profit = prices[r] - prices[i]
#                 if profit > maxProfit:
#                     maxProfit = profit
#                 r += 1

#             if maxProfit > resProfit:
#                 resProfit = maxProfit

#         return resProfit

# Loop once, set min and calcula


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        minPrice = prices[0]
        for i in range(len(prices)):

            if prices[i] < minPrice:
                minPrice = prices[i]
            if prices[i] - minPrice > profit:
                profit = prices[i] - minPrice

        return profit


# 217 find duplicates
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        dict = {}

        for i in nums:
            if i in dict:
                return True
            else:
                dict[i] = 1
        return False


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        dict = {}

        for i in nums:
            if i in dict:
                return True
            else:
                dict[i] = 1
        return False

# 53 Max Subarray


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxSub = nums[0]
        maxSum = 0
        for i in nums:

            if maxSum < 0:
                maxSum = 0
            maxSum += i

            maxSub = max(maxSum, maxSub)
        return maxSub


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        minPrice = prices[0]
        profit = 0

        for i in prices:
            if i < minPrice:
                minPrice = i

            if i - minPrice > profit:
                profit = i - minPrice

        return profit


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        dict = {}

        for i in nums:
            if i in dict:
                return True
            else:
                dict[i] = 1

        return False


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxSub = nums[0]
        maxSum = 0

        for i in nums:
            if maxSum < 0:
                maxSum = 0
            maxSum += i

            maxSub = max(maxSub, maxSum)

        return maxSub


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dict = {}

        for i, e in enumerate(nums):
            diff = target-e
            if diff in dict:
                return [i, dict[diff]]
            else:
                dict[e] = i

    def containsDuplicate(self, nums: List[int]) -> bool:
        res = {}

        for i in nums:
            if i in res:
                return True
            else:
                res[i] = 1

        return False
# 242 valid anagram


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        dict = {}
        if len(s) != len(t):
            return False

        for i in range(len(s)):
            if s[i] in dict:
                dict[s[i]] += 1
            else:
                dict[s[i]] = 1

        for i in range(len(t)):
            if t[i] in dict:
                dict[t[i]] -= 1
                if dict[t[i]] < 0:
                    return False
            else:
                return False

        return True


# # 1
# import functools


# class Solution:
#     def isSumEqual(self, firstWord: str, secondWord: str, targetWord: str) -> bool:

#         letters = {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9, 'k': 10, 'l': 11,
#                    'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18, 't': 19, 'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25}
#         print(letters['z'])

#         first = []
#         second = []
#         target = []
#         for i in firstWord:
#             first.append(str(letters[i]))
#         for i in secondWord:
#             second.append(str(letters[i]))
#         for i in targetWord:
#             target.append(str(letters[i]))
#         a = int(''.join(first))
#         b = int(''.join(second))
#         c = int(''.join(target))

#         return c == a+b


# class Solution:
#     def isSumEqual(self, firstWord: str, secondWord: str, targetWord: str) -> bool:
#         c_offset = ord('a')
#         fw_n = int(''.join([str(ord(c) - c_offset) for c in firstWord]))
#         sw_n = int(''.join([str(ord(c) - c_offset) for c in secondWord]))
#         tw_n = int(''.join([str(ord(c) - c_offset) for c in targetWord]))
#         return fw_n + sw_n == tw_n


# def isSumEqual(self, firstWord: str, secondWord: str, targetWord: str) -> bool:
#     def val_word(word): return int(
#         "".join(map(str, [abs(ord(c) - 97) for c in word])))
#     return val_word(firstWord) + val_word(secondWord) == val_word(targetWord)

# # 2


# class Solution:

#     def maximumWealth(self, accounts: List[List[int]]) -> int:
#         def sumPart(arr):
#             return sum(arr)
#         result = []
#         for i in accounts:
#             result.append(sumPart(i))

#         return sorted(result)[int(len(accounts))-1]


# class Solution:

#     def maximumWealth(self, accounts: List[List[int]]) -> int:
#         def sumPart(arr):
#             return sum(arr)
#         result = [sumPart(i) for i in accounts]

#         return max(result)

# # 3


# class Solution:
#     def runningSum(self, nums: List[int]) -> List[int]:
#         result = [0]
#         for index, val in enumerate(nums):
#             result.append(result[index] + val)
#         return result[1:]

# # 4


# class Solution:
#     def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
#         maxNum = max(candies)
#         result = [i+extraCandies >= maxNum for i in candies]
#         return result

# # 5


# class Solution:
#     def numIdenticalPairs(self, nums: List[int]) -> int:
#         result = 0
#         for i, v in enumerate(nums):
#             for j, v in enumerate(nums):
#                 if nums[i] == nums[j] and i < j:
#                     result += 1
#         return result


# class Solution:
#     def numIdenticalPairs(self, nums: List[int]) -> int:
#         result = 0
#         for i in range(len(nums)):
#             for j in range(i+1, len(nums)):
#                 if nums[i] == nums[j] and i < j:
#                     result += 1
#         return result

# # 6


# class ParkingSystem:

#     def __init__(self, big: int, medium: int, small: int):
#         self.empty = {1: big, 2: medium, 3: small}

#     def addCar(self, carType: int) -> bool:

#         if self.empty[carType] > 0:
#             self.empty[carType] -= 1
#             return True
#         else:
#             return False


# # 7
# class Solution:
#     def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
#         sorted_arr = sorted(nums)
#         res = []
#         for i, v in enumerate(nums):
#             a = sorted_arr.index(nums[i])
#             res.append(a)

#         return res

# # 8


# class Solution:

#     def find_product(self, n):
#         split = [i for i in str(n)]
#         a = 1
#         for i in split:
#             a *= int(i)
#         return a

#     def find_sum(self, n):
#         split = [i for i in str(n)]
#         a = 0
#         for i in split:
#             a += int(i)
#         return a

#     def subtractProductAndSum(self, n: int) -> int:
#         a = self.find_product(n)
#         b = self.find_sum(n)

#         return a - b

# # 9 771


# class Solution:
#     def numJewelsInStones(self, jewels: str, stones: str) -> int:
#         res = 0

#         for i in stones:
#             if i in jewels:
#                 res += 1

#         return res

# # 10 1528


# class Solution:
#     def restoreString(self, s: str, indices: List[int]) -> str:

#         my_dict = {}

#         for i in range(len(s)):
#             my_dict[indices[i]] = s[i]

#         sorted_dict = sorted(my_dict)
#         res = []
#         for i in sorted_dict:
#             print(i)
#             res.append(my_dict[i])

#         return ''.join(res)

# # 11 1342


# class Solution:
#     def numberOfSteps(self, num: int) -> int:
#         temp = num
#         steps = 0
#         while temp > 0:
#             print(temp)
#             if temp % 2 == 0:
#                 temp = temp/2
#                 steps += 1
#             if temp % 2 == 1:
#                 temp = temp - 1
#                 steps += 1

#         return steps

#         # even / 2
#         # odd - 1

# # 12

# # Depth First Search - Inorder Traversal
# # Definition for a binary tree node.
# # Recursive solution
# # class TreeNode:
# #     def __init__(self, val=0, left=None, right=None):
# #         self.val = val
# #         self.left = left
# #         self.right = right


# class Solution:
#     def inorderTraversal(self, root: TreeNode) -> List[int]:
#         print(root)
#         if root is None:
#             return[]

#         return self.inorderTraversal(root.left) + [root.val] + self.inorderTraversal(root.right)

# # Iterative


# class Solution:
#     def inorderTraversal(self, root: TreeNode) -> List[int]:
#         stack = []
#         result = []
#         while root is not None or stack != []:
#             while root is not None:
#                 stack.append(root)
#                 root = root.left
#             root = stack.pop()
#             result.append(root.val)
#             root = root.right
#         return result


# # 13
# class Solution:
#     def twoSum(self, nums: List[int], target: int) -> List[int]:
#         res = []

#         for i in nums:
#             diff = abs(target - i)
#             print(i, diff)

#             if nums.index(diff) > 0:
#                 res.append(nums.index(i))
#                 res.append(nums.index(diff))
#                 return res

#         print(res)


# # /**
# #  * @param {number} x
# #  * @return {number}
# #  */
# # var reverse = function(x) {
# #     let x_string = String(x)
# #     console.log(x_string.split('').reverse().join(''))
# #     let num = Number(x_string.split('').reverse().join(''))
# #     let negNum = -Math.abs(x_string.replace('-', '').split('').reverse().join(''))

# #     if (num > (Math.pow(2, 31)- 1) || negNum < (Math.pow(2, 31) * -1)) {
# #         return 0
# #     }
# #     if (x < 0) {
# #         return negNum
# #     }
# #     else return num

# # };

# # 14
# class Solution(object):
#     def isPalindrome(self, x):
#         chars = [e for e in str(x)]
#         first = chars[0:int(len(chars)/2)]
#         if len(chars) % 2 == 0:
#             last = chars[len(chars)/2:]
#         else:
#             last = chars[int(len(chars)/2)+1:]
#         if first == last[::-1]:
#             return True
#         return False


# # 15 Roman to Integer
# class Solution(object):
#     def romanToInt(self, s):
#         dict = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500,
#                 "M": 1000, 'IV': 4, "IX": 9, 'XL': 40, 'XC': 90, 'CD': 400, 'CM': 900}
#         res = 0
#         i = 0
#         while i < len(s):
#             if i+1 < len(s) and s[i:i+2] in dict:
#                 res += dict[s[i:i+2]]
#                 i += 2
#             else:
#                 res += dict[s[i]]
#                 i += 1
#         return res


# # 110 Balance Tree?
# # Definition for a binary tree node.
# # class TreeNode(object):
# #     def __init__(self, val=0, left=None, right=None):
# #         self.val = val
# #         self.left = left
# #         self.right = right
# class Solution(object):
#     def getHeight(self, root):
#         if (root == None):
#             return -1
#         return 1 + max(self.getHeight(root.left), self.getHeight(root.right))

#     def isBalanced(self, root):
#         """
#         :type root: TreeNode
#         :rtype: bool
#         """
#         if (root == None):
#             return True

#         leftHeight = self.getHeight(root.left)
#         rightHeight = self.getHeight(root.right)
#         heightDiff = abs(leftHeight - rightHeight) <= 1
#         return heightDiff and self.isBalanced(root.left) and self.isBalanced(root.right)


# 108
# # Definition for a binary tree node.
# # class TreeNode:
# #     def __init__(self, val=0, left=None, right=None):
# #         self.val = val
# #         self.left = left
# #         self.right = right


# class Solution:
#     def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
#         if len(nums) == 0:
#             return None
#         midIdx = floor(len(nums)/2)
#         print(midIdx, nums)
#         node = TreeNode(nums[midIdx])

#         left = self.sortedArrayToBST(nums[:midIdx])
#         right = self.sortedArrayToBST(nums[midIdx+1:])

#         node.left = left
#         node.right = right

#         print(node)
#         return node

# # 1


# class Solution:
#     def twoSum(self, nums: List[int], target: int) -> List[int]:

#         track = 0
#         for index, each in enumerate(nums):

#             diff = target - each

#             temp = nums[index+1:]
#             track += 1
#             if diff in temp:
#                 if diff == each:
#                     return [nums.index(each), temp.index(diff)+track]
#                 else:
#                     return [nums.index(each), nums.index(diff)]


# # 20
# class Solution:
#     def isValid(self, s: str) -> bool:
#         stack = []
#         hashmap = {')': '(', ']': '[', '}': '{'}

#         for e in s:
#             if e in hashmap:
#                 if stack and stack[-1] == hashmap[e]:
#                     stack.pop()
#                 else:
#                     return False
#             else:
#                 stack.append(e)
#         return True if not stack else False


# class Solution:
#     def climbStairs(self, n: int) -> int:
#         one, two = 1, 1

#         for i in range(n-1):
#             temp = one
#             one = one + two
#             two = temp

#         return one


# # 101

# # Definition for a binary tree node.
# # class TreeNode:
# #     def __init__(self, val=0, left=None, right=None):
# #         self.val = val
# #         self.left = left
# #         self.right = right
# class Solution:
#     def isSymmetric(self, root: Optional[TreeNode]) -> bool:

#         # recursive
#         if not root:
#             return True

#         def dfs(node1, node2):
#             if (not node1) and (not node2):
#                 return True
#             if (not node1) or (not node2):
#                 return False
#             if node1.val != node2.val:
#                 return False
#             exterior = dfs(node1.left, node2.right)
#             interior = dfs(node1.right, node2.left)
#             return exterior and interior

#         return dfs(root.left, root.right)


# # Definition for a binary tree node.
# # class TreeNode:
# #     def __init__(self, val=0, left=None, right=None):
# #         self.val = val
# #         self.left = left
# #         self.right = right
# class Solution:
#     def isSymmetric(self, root: Optional[TreeNode]) -> bool:

#         # BFS solution
#         # deque

#         if not root:
#             return True
#         q = collections.deque([root, root])

#         while q:
#             r1 = q.popleft()
#             r2 = q.pop()

#             if (not r1) and (not r2):
#                 continue
#             if (not r1) or (not r2):
#                 return False
#             if r1.val != r2.val:
#                 return False

#             q.appendleft(r1.left)
#             q.append(r2.right)
#             q.appendleft(r1.right)
#             q.append(r2.left)
#         return True

# # Definition for a binary tree node.
# # class TreeNode:
# #     def __init__(self, val=0, left=None, right=None):
# #         self.val = val
# #         self.left = left
# #         self.right = right


# class Solution:
#     def isSymmetric(self, root: Optional[TreeNode]) -> bool:

#         # DFS solution
#         # stack

#         if not root:
#             return True

#         stack = [root, root]
#         while stack:
#             r1 = stack.pop()
#             r2 = stack.pop()

#             if (not r1) and (not r2):
#                 continue
#             if (not r1) or (not r2):
#                 return False
#             if r1.val != r2.val:
#                 return False

#             stack.append(r1.left)
#             stack.append(r2.right)
#             stack.append(r1.right)
#             stack.append(r2.left)
#         return True


# 104
# # Definition for a binary tree node.
# # class TreeNode:
# #     def __init__(self, val=0, left=None, right=None):
# #         self.val = val
# #         self.left = left
# #         self.right = right


# class Solution:
#     def maxDepth(self, root: Optional[TreeNode]) -> int:

#         if not root:
#             return 0
#         return max(self.maxDepth(root.left), self.maxDepth(root.right)) + 1


# 136


# class Solution:
#     def singleNumber(self, nums: List[int]) -> int:

#         storage = {}
#         for i, e in enumerate(nums):

#             if e in storage:
#                 storage[e] += 1
#             else:
#                 storage[e] = 1

#         print(list(storage.keys())[list(storage.values()).index(1)])

#         return list(storage.keys())[list(storage.values()).index(1)]


# 141
# # Definition for singly-linked list.
# # class ListNode:
# #     def __init__(self, x):
# #         self.val = x
# #         self.next = None


# class Solution:
#     def hasCycle(self, head: Optional[ListNode]) -> bool:

#         while head:
#             if head.val is None:
#                 return True
#             head.val = None

#             head = head.next

#         return False


# 206
# # Definition for singly-linked list.
# # class ListNode:
# #     def __init__(self, val=0, next=None):
# #         self.val = val
# #         self.next = next


# class Solution:
#     def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
#         tail = None
#         while head:
#             next = head.next
#             head.next = tail
#             tail = head
#             head = next

#         return tail


# 160
# # Definition for singly-linked list.
# # class ListNode:
# #     def __init__(self, x):
# #         self.val = x
# #         self.next = None


# class Solution:

#     def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
#         if headA == None and headB == None:
#             return None
#         A = headA
#         B = headB

#         while A != B:
#             A = A.next
#             B = B.next

#             if A == B:
#                 return A
#             if A == None:
#                 A = headB
#             if B == None:
#                 B = headA

#         return A


# # 35
# class Solution:
#     def searchInsert(self, nums: List[int], target: int) -> int:

#         # already in
#         if target in nums:
#             return nums.index(target)
#         if target < nums[0]:
#             return 0
#         if target > nums[len(nums)-1]:
#             return len(nums)
#         for i in range(len(nums)):
#             if nums[i] > target and nums[i - 1] < target:
#                 return i

# # 53


# class Solution:
#     def maxSubArray(self, nums: List[int]) -> int:
#         maxSub = nums[0]
#         curSum = 0

#         for n in nums:
#             if curSum < 0:
#                 curSum = 0
#             curSum += n
#             maxSub = max(maxSub, curSum)

#         return maxSub

# # 121


# class Solution:
#     def maxProfit(self, prices: List[int]) -> int:

#         buyPrice = prices[0]
#         sellPrice = 0
#         profit = 0
#         maxiProfit = 0
#         for n in prices:
#             if n < buyPrice:
#                 buyPrice = min(buyPrice, n)
#                 sellPrice = max(0, n)
#             if n > sellPrice:
#                 sellPrice = max(sellPrice, n)
#             profit = sellPrice - buyPrice
#             maxiProfit = max(maxiProfit, profit)

#         return maxiProfit

# # 155


# class MinStack:

#     def __init__(self):
#         self.stack = []

#     def push(self, val: int) -> None:
#         self.stack.append(val)

#     def pop(self) -> None:
#         self.stack.pop()

#     def top(self) -> int:
#         return (self.stack[len(self.stack)-1])

#     def getMin(self) -> int:
#         return (min(self.stack))


# # Your MinStack object will be instantiated and called as such:
# # obj = MinStack()
# # obj.push(val)
# # obj.pop()
# # param_3 = obj.top()
# # param_4 = obj.getMin()

# # 169
# class Solution:
#     def majorityElement(self, nums: List[int]) -> int:

#         res = {}

#         for n in nums:
#             if n in res:
#                 res[n] += 1
#             else:
#                 res[n] = 1
#         print(max(res))

#         return max(res, key=res.get)

#         # if res[max(res)] > len(nums)/2:
#         #     return max(res)

# # 170
# # Definition for a binary tree node.
# # class TreeNode:
# #     def __init__(self, val=0, left=None, right=None):
# #         self.val = val
# #         self.left = left
# #         self.right = right


# class Solution:
#     def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:

#         if root is None:
#             return None

#         tmp = root.left
#         root.left = root.right
#         root.right = tmp

#         self.invertTree(root.left)
#         self.invertTree(root.right)

#         return root

# # 234
# # Definition for singly-linked list.
# # class ListNode:
# #     def __init__(self, val=0, next=None):
# #         self.val = val
# #         self.next = next


# class Solution:
#     def isPalindrome(self, head: Optional[ListNode]) -> bool:

#         resList = []

#         cur = head

#         while cur is not None:
#             resList.append(cur.val)
#             cur = cur.next
#         if len(resList) % 2 == 0:
#             midIdx = floor(len(resList)/2)
#             firstArr = resList[:midIdx]
#             secArr = list(reversed(resList[midIdx:]))
#             if firstArr == secArr:
#                 return True
#             else:
#                 return False
#         if len(resList) % 2 == 1:
#             midIdx = floor(len(resList)/2)
#             firstArr = resList[:midIdx]
#             secArr = list(reversed(resList[midIdx+1:]))
#             if firstArr == secArr:
#                 return True
#             else:
#                 return False
#         # print(firstArr)
#         # print(list(reversed(resList[midIdx:])))
#         # print(resList)

# # 283


# class Solution:
#     def moveZeroes(self, nums: List[int]) -> None:
#         """
#         Do not return anything, modify nums in-place instead.
#         """

#         for n in nums:

#             if n == 0:
#                 nums.pop(nums.index(n))
#                 nums.append(0)

#         return nums


# 543
# # Definition for a binary tree node.
# # class TreeNode:
# #     def __init__(self, val=0, left=None, right=None):
# #         self.val = val
# #         self.left = left
# #         self.right = right


# class Solution:
#     def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
#         res = [0]

#         def dfs(node):
#             if node is None:
#                 return -1

#             left = dfs(node.left)
#             right = dfs(node.right)

#             res[0] = max(res[0], 2+left+right)
#             return 1 + max(left, right)

#         dfs(root)
#         return res[0]


# # 26
# class Solution:
#     def removeDuplicates(self, nums: List[int]) -> int:

#         for i, e in enumerate(nums):
#             temp = nums[i+1:]

#             while e in nums[i+1:]:
#                 nums.pop(nums[i+1:].index(e) + i + 1)

#             print(nums)

# # 58


# class Solution:
#     def lengthOfLastWord(self, s: str) -> int:
#         a = s.split()
#         word = a[len(a)-1]
#         return len(word)

# # 27


# class Solution:
#     def removeElement(self, nums: List[int], val: int) -> int:
#         last = 0

#         while val in nums:
#             nums.remove(val)
#         print(nums)

# # 111
# # Definition for a binary tree node.
# # class TreeNode:
# #     def __init__(self, val=0, left=None, right=None):
# #         self.val = val
# #         self.left = left
# #         self.right = right


# class Solution:
#     def minDepth(self, root: Optional[TreeNode]) -> int:
#         height = 0

#         if root is None:
#             return 0
#         if not root.left and not root.right:
#             return 1
#         if not root.left and root.right:
#             return 1 + self.minDepth(root.right)
#         if not root.right and root.left:
#             return 1 + self.minDepth(root.left)

#         return min(self.minDepth(root.left), self.minDepth(root.right)) + 1

#         print(height)

# # 28


# class Solution:
#     def strStr(self, haystack: str, needle: str) -> int:
#         if haystack is '' and needle is '':
#             return 0
#         elif needle in haystack:
#             return haystack.index(needle)
#         else:
#             return -1


# # 66
# class Solution:
#     def plusOne(self, digits: List[int]) -> List[int]:
#         last = len(digits)-1

#         digits[last] += 1
#         print(digits)

#         while last >= 0:
#             if digits[last] == 10:
#                 if last == 0:
#                     digits[last] = 1
#                     digits.append(0)
#                 else:
#                     digits[last] = 0
#                     digits[last-1] += 1
#             last -= 1
#         print(digits)
#         return digits

# # 69


# class Solution:
#     def mySqrt(self, x: int) -> int:
#         start = 0
#         end = x

#         while start + 1 < end:
#             mid = start + floor((end-start)/2)
#             sqrd = mid * mid

#             if sqrd == x:
#                 return mid
#             elif sqrd < x:
#                 start = mid
#             else:
#                 end = mid

#         if end*end == x:
#             return end
#         return start

# # 217


# class Solution:
#     def containsDuplicate(self, nums: List[int]) -> bool:

#         newSet = list(set(nums))

#         if len(newSet) != len(nums):
#             return True
#         else:
#             return False


# # 202


# class Solution:
#     def isHappy(self, n: int) -> bool:

#         visit = set()

#         while n not in visit:
#             print(n)

#             visit.add(n)
#             print(visit)
#             n = self.sqrUp(n)
#             if n == 1:
#                 return True

#         return False

#     def sqrUp(self, num):
#         temp = [int(e)**2 for e in str(num)]
#         res = functools.reduce(lambda a, b: a+b, temp)

#         return res

# # 237
# # Definition for singly-linked list.
# # class ListNode:
# #     def __init__(self, x):
# #         self.val = x
# #         self.next = None


# class Solution:
#     def deleteNode(self, node):
#         """
#         :type node: ListNode
#         :rtype: void Do not return anything, modify node in-place instead.
#         """

#         print(node)
#         node.val = node.next.val
#         node.next = node.next.next
#         print(node)


# # 242
# class Solution:
#     def isAnagram(self, s: str, t: str) -> bool:
#         hashS = {}
#         hashT = {}

#         for e in s:
#             if e in hashS:
#                 hashS[e] += 1
#             else:
#                 hashS[e] = 1

#         for e in t:
#             if e in hashT:
#                 hashT[e] += 1
#             else:
#                 hashT[e] = 1

#         print(hashS)
#         print(hashT)

#         if hashS == hashT:
#             return True
#         else:
#             return False
# class Solution:
#     def isPalindrome(self, x: int) -> bool:

#         if x < 0:
#             return False
#         x = [i for i in str(x)]
#         midIdx = len(x) // 2
#         first = x[:midIdx]
#         second = x[midIdx+1:] if len(x) % 2 == 1 else x[midIdx:]
#         if first == second[::-1]:
#             return True
#         else:
#             return False
