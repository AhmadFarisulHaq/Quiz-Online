def remainderFunction(data,num):
    return (data%num)

def createHashTable(num):
    temp = []
    for i in range(num):
        temp.append(["none"])
    return temp

def chaining(data,table):
    for i in data:
        slot = remainderFunction(i,len(table))
        if table[slot] == ['none']:
            table[slot] = [i]
        else:
            temp = table[slot]
            temp.append(i)
            table[slot] = temp
    return table

def searchHash(data,table):
    ind = 0
    slot = remainderFunction(data,len(table))
    for i in table[slot]:
        if i == data:
            print(f'data berada di slot ke- {slot} dan indeks ke- {ind}')
        elif ind == len(table[slot]) - 1:
            print(False)
        else:
            ind += 1

slot = remainderFunction(55,10)
print(slot)

hashTable = createHashTable(11)
print(hashTable)

a = [54,26,93,17,77,31,44,55,20]
chaining(a,hashTable)
print(hashTable)

searchHash(100,hashTable)