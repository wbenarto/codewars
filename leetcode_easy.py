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
