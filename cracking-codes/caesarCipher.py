# Caesar Cipher

import pyperclip

message = input('Enter message: ')

key = 13

mode = 'encrypt' # set to encrypt or decrypt

SYMBOLS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 !?.'

translated = ''

for symbol in message:
    if symbol not in SYMBOLS:
        translated += symbol
        continue
    if mode == 'encrypt':
        nextIdx = SYMBOLS.index(symbol) + key
    else:
        nextIdx = SYMBOLS.index(symbol) - key
    
    if nextIdx > len(SYMBOLS):
        nextIdx -= len(SYMBOLS)
    elif nextIdx < 0:
        nextIdx += len(SYMBOLS)
    
    translated += SYMBOLS[nextIdx]

print(translated)
pyperclip.copy(translated)