print('hello world')


def raise_to_power(base_num, pow_num):
    return pow(base_num, pow_num)


print(raise_to_power(4, 2))

# 2D List or arrays
number_grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]
]
print(number_grid[0][1])

# nested loop
for e in number_grid:
    for j in e:
        print(j)

# translator


def draft_translator(word):
    translation = ''
    for e in word:
        if e in 'aeiou':
            print('yus')
            translation += 'g'
        else:
            translation = translation + e
    return translation


print(draft_translator('bakayarooo'))


# List
