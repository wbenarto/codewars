# Warm Up EZ
def compareTriplets(a, b):
    # Write your code here
    i = 0
    alice = 0
    bob = 0
    for i in range(len(a)):
        if a[i] > b[i]:
            alice += 1
        elif b[i] > a[i]:
            bob += 1
        else:
            continue
        i += 1
    return [alice, bob]


def staircase(n):
    # Write your code here

    for i in range(1, n+1):
        print(' '*(n-i) + '#'*i)


def diagonalDifference(arr):
    # Write your code here
    print(arr)
    first = 0
    end = len(arr)-1

    left = 0
    right = 0
    for i in arr:
        left += i[first]
        right += i[end]

        first += 1
        end -= 1

    return abs(left - right)


def plusMinus(arr):
    # Write your code here
    pos = len([i for i in arr if i > 0]) / len(arr)
    zero = len([i for i in arr if i == 0]) / len(arr)
    neg = len([i for i in arr if i < 0]) / len(arr)

    print(format(pos, ".6f"))
    print(format(neg, '.6f'))
    print(format(zero, ".6f"))


def birthdayCakeCandles(candles):
    # Write your code here
    maxVal = candles.count(max(candles))
    return(maxVal)


def timeConversion(s):
    # Write your code here
    time = s[:-2]
    nightDay = s[-2:]
    print(time)
    print(nightDay)

    hour = int(time[:2]) % 12 + 12 if nightDay == 'PM' else int(time[:2]) % 12
    minSec = time[2:]
    return f'{hour:02}{minSec}'


def countApplesAndOranges(s, t, a, b, apples, oranges):
    # Write your code here

    # convert apples and oranges into location
    # add each dist to location
    # if apples and oranges betweeen 7 and 10 print amount

    locApples = [i + a for i in apples]
    locOranges = [i + b for i in oranges]

    numApples = len([i for i in locApples if i >= s and i <= t])
    numOranges = len([i for i in locOranges if i >= s and i <= t])

    print(numApples)
    print(numOranges)


def birthday(s, d, m):
    # Write your code here

    tp = len(s)-m + 1
    return len([1 for i in range(tp) if sum(s[i:i+m]) == d])


def sockMerchant(n, ar):
    # Write your code here
    pairs = 0

    for e in set(ar):
        pairs += int(ar.count(e) / 2)

    return pairs


def countingValleys(steps, path):
    # Write your code here
    # sea level
    # at sea and D, valley += 1

    seaLevel = 0
    valley = 0

    for e in path:
        if e == 'D' and seaLevel == 0:
            valley += 1
            seaLevel -= 1
        elif e == 'U':
            seaLevel += 1
        elif e == 'D' and seaLevel != 0:
            seaLevel -= 1

    return (valley)


def timeInWords(h, m):
    # Write your code here
    # check with m divisible by 15 'qrts, half', less than 30 "past", over 30 "to" and h +=1 , == 00 'oclock'
    dict = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty'
    }

    if m == 0:
        return (f"{dict[h]} o' clock")
    elif m == 30:
        return (f"half past {dict[h]}")
    elif m == 15:
        return (f"quarter past {dict[h]}")
    elif m == 45:
        if h == 12:
            return f"quarter to one"
        else:
            return (f"quarter to {dict[h+1]}")
    elif m < 30 and m > 9:
        new = minParse(m)
        return (f"{new} minutes past {dict[h]}")
    elif m < 10:
        return (f"{minParse(m)} minute past {dict[h]}")
    elif m > 30:
        new = minParse(60-m)
        if h == 12:
            return f"{new} minutes to one"
        else:
            return (f"{new} minutes to {dict[h+1]}")


def minParse(num):
    print(str(num)[0])
    numDict = {
        '2': 'twenty',
        '3': 'thirty',
        '4': 'forty',
        '5': 'fifty',
    }

    secNumDict = {
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty'
    }

    if num > 20:
        newNum = f"{numDict[str(num)[0]]} {secNumDict[str(num)[1]]}"
    else:
        newNum = f"{secNumDict[str(num)]}"

    return newNum


def marsExploration(s):
    # Write your code here
    count = 0
    for i in range(0, len(s), 3):
        if s[i] != 'S':
            count += 1
        print(i)

    for i in range(1, len(s), 3):
        if s[i] != 'O':
            count += 1
        print(i)

    for i in range(2, len(s), 3):
        if s[i] != 'S':
            count += 1
        print(i)
    return count


def weightedUniformStrings(s, queries):
    # Write your code here
    # z -- 26
    # a -- 1
    charList = []
    idx = 0
    temp = 0
    for idx in range(len(s)):
        # first e append in charList
        # next letter after e is the uniform
        # new letter append
        if idx == len(s)-1:
            temp += ord(s[idx])-96
            charList.append(temp)
            idx += 1
        elif s[idx] != s[idx + 1]:
            temp += ord(s[idx])-96
            charList.append(temp)
            temp = 0
            idx += 1
        elif s[idx] == s[idx + 1]:
            temp += ord(s[idx])-96
            charList.append(temp)
            idx += 1
    resArr = ['Yes' if i in charList else 'No' for i in queries]

    return resArr

# sorted array input one unknown pivot
# lowest element

# [5, 7, 1, 3, 4] -> 1
# [1, 3] -> 1
# [3, 4, 5, 6, 7, 8 , 1, 2] mid= 4
# [1, 2, 3, 4, 5] mid = 2

# mid, check with first left subarr, check with last right subarr
# if first left is smaller, go to left, if not go to right
# return mid


def minEl(arr):

    midIdx = len(arr)//2
    midEl = arr[midIdx]
    leftArr = arr[:midIdx]
    rightArr = arr[midIdx+1:]

    if midEl < leftArr[0]:
        if midEl < rightArr[len(rightArr) - 1]:
            print(midEl)

    minVal = arr[0]
    for e in arr:
        if e < minVal:
            minVal = e

    print(minVal)


minEl([5, 7, 1, 3, 4])
minEl([3, 4, 5, 6, 7, 8, 1, 2])
minEl([1, 3])
