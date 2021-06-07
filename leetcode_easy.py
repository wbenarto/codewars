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
