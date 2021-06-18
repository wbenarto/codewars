# 1
class Solution:
    def isSumEqual(self, firstWord: str, secondWord: str, targetWord: str) -> bool:

        letters = {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9, 'k': 10, 'l': 11,
                   'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18, 't': 19, 'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25}
        print(letters['z'])

        first = []
        second = []
        target = []
        for i in firstWord:
            first.append(str(letters[i]))
        for i in secondWord:
            second.append(str(letters[i]))
        for i in targetWord:
            target.append(str(letters[i]))
        a = int(''.join(first))
        b = int(''.join(second))
        c = int(''.join(target))

        return c == a+b


class Solution:
    def isSumEqual(self, firstWord: str, secondWord: str, targetWord: str) -> bool:
        c_offset = ord('a')
        fw_n = int(''.join([str(ord(c) - c_offset) for c in firstWord]))
        sw_n = int(''.join([str(ord(c) - c_offset) for c in secondWord]))
        tw_n = int(''.join([str(ord(c) - c_offset) for c in targetWord]))
        return fw_n + sw_n == tw_n


def isSumEqual(self, firstWord: str, secondWord: str, targetWord: str) -> bool:
    def val_word(word): return int(
        "".join(map(str, [abs(ord(c) - 97) for c in word])))
    return val_word(firstWord) + val_word(secondWord) == val_word(targetWord)

# 2


class Solution:

    def maximumWealth(self, accounts: List[List[int]]) -> int:
        def sumPart(arr):
            return sum(arr)
        result = []
        for i in accounts:
            result.append(sumPart(i))

        return sorted(result)[int(len(accounts))-1]


class Solution:

    def maximumWealth(self, accounts: List[List[int]]) -> int:
        def sumPart(arr):
            return sum(arr)
        result = [sumPart(i) for i in accounts]

        return max(result)

# 3


class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        result = [0]
        for index, val in enumerate(nums):
            result.append(result[index] + val)
        return result[1:]

# 4


class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        maxNum = max(candies)
        result = [i+extraCandies >= maxNum for i in candies]
        return result

# 5


class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        result = 0
        for i, v in enumerate(nums):
            for j, v in enumerate(nums):
                if nums[i] == nums[j] and i < j:
                    result += 1
        return result


class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        result = 0
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                if nums[i] == nums[j] and i < j:
                    result += 1
        return result

# 6


class ParkingSystem:

    def __init__(self, big: int, medium: int, small: int):
        self.empty = {1: big, 2: medium, 3: small}

    def addCar(self, carType: int) -> bool:

        if self.empty[carType] > 0:
            self.empty[carType] -= 1
            return True
        else:
            return False


# 7
class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        sorted_arr = sorted(nums)
        res = []
        for i, v in enumerate(nums):
            a = sorted_arr.index(nums[i])
            res.append(a)

        return res

# 8


class Solution:

    def find_product(self, n):
        split = [i for i in str(n)]
        a = 1
        for i in split:
            a *= int(i)
        return a

    def find_sum(self, n):
        split = [i for i in str(n)]
        a = 0
        for i in split:
            a += int(i)
        return a

    def subtractProductAndSum(self, n: int) -> int:
        a = self.find_product(n)
        b = self.find_sum(n)

        return a - b

# 9 771


class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        res = 0

        for i in stones:
            if i in jewels:
                res += 1

        return res

# 10 1528


class Solution:
    def restoreString(self, s: str, indices: List[int]) -> str:

        my_dict = {}

        for i in range(len(s)):
            my_dict[indices[i]] = s[i]

        sorted_dict = sorted(my_dict)
        res = []
        for i in sorted_dict:
            print(i)
            res.append(my_dict[i])

        return ''.join(res)

# 11 1342


class Solution:
    def numberOfSteps(self, num: int) -> int:
        temp = num
        steps = 0
        while temp > 0:
            print(temp)
            if temp % 2 == 0:
                temp = temp/2
                steps += 1
            if temp % 2 == 1:
                temp = temp - 1
                steps += 1

        return steps

        # even / 2
        # odd - 1
