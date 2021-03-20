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
