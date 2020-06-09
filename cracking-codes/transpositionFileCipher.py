import time, os, transpositionEncrypt, transpositionDecrypt

def main():
    inputFileName = 'frankenstein.txt'
    outputFileName = 'frankenstein.encrypted.txt'
    myKey = 10
    myMode = 'encrypt'

    if not os.path.exists(inputFileName):
        print('file does not exit.')
        sys.exit()

    if os.path.exists(outputFileName):
        print('overwrite file? (C)ontinue or (Q)uit?')
        response = input('> ')
        if not response.lower().startswith('c'):
            sys.exit()
    
    fileObj = open(inputFileName)
    content = fileObj.read()
    fileObj.close()

    print(f'{myMode}ing...')

    startTime = time.time()
    if myMode == 'encrypt':
        translated = transpositionEncrypt.encryptMessage(myKey, content)
    else:
        translated = transpositionDecrypt.decryptMessage(myKey, content)
    totalTime = round(time.time() - startTime, 2)
    print(f'{myMode.title()}sion time: {totalTime} seconds')

    # write to file
    outputFileObj = open(outputFileName, 'w')
    outputFileObj.write(translated)
    outputFileObj.close()

    print(f'Done {myMode}ing {inputFileName} ({len(content)} characters.)')
    print(f'{myMode.title()}ed file is {outputFileName}')

if __name__ == '__main__':
    main()