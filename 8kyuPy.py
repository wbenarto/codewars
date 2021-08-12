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

 # 10
 def narcissistic( value ):
    # Code away
    # sum of split nums power to nums.length == value return true
    print(type(value))
    
    num = str(value)
    total = 0
    
    for e in num:
        print(e)
        total += int(e) ** int(len(num))
    
    print(total, value)
    if (total == value):
        return True
    
    return False

# 11
def powers_of_two(n):
    res = []
    for e in range(n+1):
        print(e)
        res.append(2**e)
    
    return res

# 12

def each_cons(lst, n):
    # your solution here

    # 
    return [lst[i:n+i] for i in range(len(lst)-n + 1)]
#     print(lst, n)
#     temp = []
#     res = 0
#     num=0
#     print("hehheheh" , lst[0:n])
#     for e in lst:
#         print(e)
        
#         temp.append(lst[:n])
#         print(temp)
#         if (len(temp)<2):
#             temp.append(e)
     
#     while num<len(lst):
#         temp.append(lst[num:num+n])
#         print(temp)
#         num = num + 1   
#         print(temp[len(temp)-1], lst[len(lst)-1])
#         print(temp[len(temp)-1])
#         if(temp[len(temp)-1] == lst[len(lst)-1]):
#             return
#     return temp


# 13
def human_years_cat_years_dog_years(human_years):
    # Your code here
    cat_years = [15, 24, 28, 32]
    dog_years = [15, 24, 29, 34]
    if (human_years == 1):
        cat_year = 15
        dog_year = 15
    elif (human_years == 2):
        cat_year = 24
        dog_year = 24
    elif (human_years>2):
        cat_year = ((human_years-2)*4) + 24
        dog_year = ((human_years-2)*5) + 24
    
    return [human_years, cat_year, dog_year]
    return [x, 24+(x-2)*4 if (x != 1) else 15, 24+(x-2)*5 if (x != 1) else 15]

# 14
def temple_strings(obj, feature): 
    # your code here
    print(obj, feature)
    
    return obj + ' are ' + feature
    return f"{obj} are {feature}"

# 15
a = "code"
b = "wa.rs"
name = a+b


# 16
def partition(arr, classifier_method):
    # Write your solution
    res = []
    print(arr, classifier_method(arr[0]))
    for x in arr:
        if classifier_method(x):
            res.append(x)
    return res

# 17
import math
def logs(x, a, b):
    # Your code here
    print(x ,a, b)
    res = math.log(a, x) + math.log(b, x)
    
    return res

# 18
def isDigit(string):
    # 11ELF
    try:
        float(string)
        return True
    except:
        return False

# 19
def chromosome_check(sperm):
    # Your code here
    if sperm == "XX":
        return "Congratulations! You're going to have a daughter."
    elif sperm == "XY":
        return "Congratulations! You're going to have a son."
    
# 20
import math
def circle_circumference(circle):
    # your solution here
    # 2pieR
    print(circle.radius)
    return 2 * math.pi* circle.radius

# 21
def God():
    # code
    return[Man(), Woman()]
    
   
# code
class Human():
    pass
class Man(Human):
    pass
class Woman(Human):
    pass

# 22 
class Sleigh(object):
    def authenticate(self, name, password):
        self.name = name
        self.password = password
        
        if self.name == 'Santa Claus' and self.password == 'Ho Ho Ho!':
            return True
        else:
            return False
        
# 23
def sum_mul(n, m):
    print(n,m)
    if n<=0 or m<=0:
        return 'INVALID'
    if n == 0 or m<=n:
        return 0
    list = []
    total = 0
    for i in range(n, m, n):
        total+= n
        list.append(total)
        print(total, list)
        print(sum(list))
        
    
        
        
#     for i in range(m):
#         total+= n
#         print(total)
    return sum(list)

# 24
# Write your code here
word = input()
z = [z for z in word if z == 'z']
o = [o for o in word if o == 'o']

if (len(z)*2) == (len(o)):
    print('Yes')
else:
    print('No')

# 25

N = int(input())
data = int(''.join([x[len(x)-1] for x in input().split()]))


# Write your code here
# ans = 
if (data%10==0):
    print("Yes")
else:
    print('No')

# 26
websites = ['codewars'] * 1000

# 27
def check_the_bucket(bucket):
    # code here
    if 'gold' in bucket:
        return True
    else:
        return (False)
    
# 28 
def define_suit(card):
    # Good luck
    suit = list(card)[len(card)-1]
    print(suit)
    suits = { 'C' : 'clubs', 'S' : 'spades', 'D': 'diamonds', 'H': 'hearts'}
    
    return suits[suit]

# 29
def cookie(x):
    # Good Luck
    res = ''
    if type(x) == str:
        res = 'Zach!'
    elif type(x) == float or type(x) == int:
        res = 'Monica!'
    else:
        res = 'the dog!'
        
    return f'Who ate the last cookie? It was {res}'


# 30
def name_shuffler(str_):
    # your code here
    print(str_)
    name =  str_.split(' ')
    return name[1] + ' ' + name[0]


# 31 
def close_compare(a, b, margin=0):
    diff = abs(a - b)
    if diff <= margin: 
        return 0
    if a < b:
        return -1
    elif a > b: 
        return 1
    
# 32 
def fillable(stock, merch, n):
    # Your code goes here.
    if merch in stock and stock[merch] >= n:
        return True
    else: 
        return False

# 33
import math
def circle_area(circle):
    # your solution here
    return round(math.pi * circle.radius * circle.radius,  6 )

# 34
def add(a,b):
    # Your Code Here
    return a+b
# Make more functions. Refer to the description for function names.
# The code will NOT WORK IF YOU USE names other than the ones
# from the description

def multiply(a,b):
    return a*b
    
def divide(a,b):
    return a/b

def mod(a,b) :
    return a%b
def exponent(a,b) :
    return a**b
def subt(a,b):
    return a-b

# 35
def greet(name):

    if name == "Johnny":
        return "Hello, my love!"
    return "Hello, {name}!".format(name=name)
