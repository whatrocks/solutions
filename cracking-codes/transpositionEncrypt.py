import pyperclip

def main():
    myMessage = 'Common sense is not so common'
    myKey = 8

    cipherText = encryptMessage(myKey, myMessage)

    print(cipherText + '|')

    pyperclip.copy(cipherText)

def encryptMessage(key, message):
    ciphertext = [''] * key
    for column in range(key):
        currentIdx = column
        while currentIdx < len(message):
            ciphertext[column] += message[currentIdx]
            currentIdx += key
    return ''.join(ciphertext)

if __name__ == '__main__':
    main()