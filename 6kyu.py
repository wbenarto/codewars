# Hue hue hue hue hue
def is_valid_walk(walk):
    # determine if walk is valid
    location = [0, 0]

    print(walk)

    for block in walk:
        if block == 'n':
            location[1] += 1
        if block == 's':
            location[1] -= 1
        if block == 'w':
            location[0] -= 1
        if block == 'e':
            location[0] += 1

    print(location, len(walk))

    if location == [0, 0] and len(walk) == 10:
        return True
    else:
        return False


# 2
def find_outlier(integers):
    first = sum(integers[0:3])
    print(first, integers)
#     if len(integers)
    if (first % 2 == 0):
        # odd outlier
        for i in integers:
            if (i % 2 == 1):
                return i
    elif (first % 2 == 1):
        # even outlier
        for i in integers:
            if (i % 2 == 0):
                return i


def find_outlier(int):
    odds = [x for x in int if x % 2 != 0]
    evens = [x for x in int if x % 2 == 0]
    return odds[0] if len(odds) < len(evens) else evens[0]

# 3


def iq_test(numbers):
    # your code here
    arr = numbers.split(' ')
    print(arr, numbers)
    even = [i for i in arr if int(i) % 2 == 0]
    odd = [i for i in arr if int(i) % 2 == 1]

    print(even, odd)
    num = odd[0] if len(even) > len(odd) else even[0]
    print(arr.index(num))

    return arr.index(num) + 1

# 4


def create_phone_number(n):
    # your code here
    #     print(f"({''.join(n[:3])}) {''.join(n[3:7])}-{''.join(n[6:])}")
    strlist = [str(i) for i in n]
    print(strlist)
    a = ''.join(strlist[0:3])
    b = ''.join(strlist[3:6])
    c = ''.join(strlist[6:])
    print(a)
    return f'({a}) {b}-{c}'


def create_phone_number(n):
    return "({}{}{}) {}{}{}-{}{}{}{}".format(*n)
