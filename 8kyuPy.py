import math
*** first python codee yawww ** *

# 1


def twice_as_old(dad_years_old, son_years_old):
    diff = dad_years_old - son_years_old

    return abs(dad_years_old - 2*diff)


# 2
def merge_arrays(arr1, arr2):
    print(arr1, arr2)
    res = []
    p1 = 0
    p2 = 0

    return sorted(set(arr1+arr2))
    pass

# 3 initiating a class


class Ball(object):
    # your code goes here
    def __init__(self, type='regular'):
        self.ball_type = type

# 4


def lovefunc(flower1, flower2):
    # ...
    if (flower1+flower2) % 2 == 1:
        return True

    return False


# 5 else if
def people_with_age_drink(age):

    if age < 14:
        return "drink toddy"
    elif age < 18:
        return "drink coke"
    elif age < 21:
        return "drink beer"
    elif age > 21:
        return "drink whisky"
    else:
        return "drink whisky"


# 6 Point object, consisting x and y. accessing with dot notaion a.x a.y


def distance_between_points(a, b):
    # your code here

    dist_a = abs(a.x - b.x)
    dist_b = abs(a.y - b.y)

    return math.sqrt(dist_a**2 + dist_b**2)


# 7 round to 2 decimals
def converter(mpg):
    # your code here
    #     m/g to km/l // 1.609344/4.5609
    conv = 1.609344/4.54609188
    return round(mpg*conv, 2)

# 8 if statement


def ensure_question(s):
    # Code here
    # check last index if it contains ?
    # if statement
    if len(s) == 0:
        return '?'

    last = s[len(s)-1]
    if last == "?":
        return s
    return s + '?'

# 9


def add_five(num):
    total = num + 5
    return total


def mango(quantity, price):
    free = 0
    paid = 0
    res = 0
    print("quantity and price : " + str(quantity) + "   " + str(price))
    modulo = quantity % 3
    while quantity > 0:
        paid = paid + 2
        free = free + 1
        res = res + price
#         print("quantity : " + str(quantity))
#         print("free : "  + str(free))
#         print('res : ' + str(res))
        quantity = quantity - 3
    print(modulo)
    if (quantity % 3 == 0):
        return paid*price
    elif (quantity % 3 == 1):
        return (paid*price)-price
    elif(quantity % 3 == 2):
        return paid*price

#     print("paid : " + str(paid*price))
#     return paid*price
