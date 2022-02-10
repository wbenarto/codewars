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
