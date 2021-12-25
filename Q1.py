## This code will simulate the Queue which has the FIFO and it is based on the ListOfKeys array.
## If the array includes the ISBN it means we can get the book info from the dic in allCurrentBooks and if it does not exist
## it means that we have to remove the oldest ISBN from ListOfkeys and it's values from the allCurrentBooks and add the
## new ISBN and the new Info about it
allCurrentBooks = {}
listOfKeys = []


def get_book_info(isbn):
    if isbn in listOfKeys:
        return allCurrentBooks.get(isbn)
    else:
        print("we are getting the book from the database")
        return None


def workingWithMemory(isbn, n=3):  ## chosen small n for testing reasons
    if isbn in listOfKeys:
        return get_book_info(isbn)
    else:
        if len(listOfKeys) >= n:
            lastElement = listOfKeys.pop()
            allCurrentBooks.pop(lastElement)
        listOfKeys.insert(0, isbn)
        allCurrentBooks[isbn] = "some value about this ISBN {} which could be any type of data".format(isbn)
        return allCurrentBooks[isbn]


test = ["123", "321321", "321321", "123", "443145", "6665544221312", "3215d", "213eqas"]

for i in range(len(test)):
    workingWithMemory(test[i])
    print(allCurrentBooks)
    print(listOfKeys)

chosenBook = workingWithMemory("213eqas")
if chosenBook is not None:
    print(chosenBook)
print(allCurrentBooks)
print(listOfKeys)
