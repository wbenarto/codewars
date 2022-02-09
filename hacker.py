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
