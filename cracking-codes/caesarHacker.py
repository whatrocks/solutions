# Caesar Hacker

message = 'guv6Jv6Jz!J6rp5r7Jzr66ntrM'
SYMBOLS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 !?.'

# loop thru all possible keys
for key in range(len(SYMBOLS)):
    translated = ''
    for symbol in message:
        if symbol in SYMBOLS:
            symbolIdx = SYMBOLS.find(symbol)
            translatedIdx = symbolIdx - key

            if translatedIdx < 0:
                translatedIdx += len(SYMBOLS)

            translated += SYMBOLS[translatedIdx]
        else:
            translated += symbol
    print("Key #%s: %s" % (key, translated))

