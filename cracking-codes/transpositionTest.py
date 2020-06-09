import random, sys, transpositionEncrypt, transpositionDecrypt

def main():
    random.seed(42)

    for i in range(20):
        message = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' * random.randint(4, 40)
        message = list(message)
        random.shuffle(message)
        message = ''.join(message)
        print(f'Test {i + 1}: {message}')

        # check all possible keys for each message
        for key in range(1, int(len(message)/2)):
            encrypted = transpositionEncrypt.encryptMessage(key, message)
            decrypted = transpositionDecrypt.decryptMessage(key, encrypted)

            if message != decrypted:
                print(f'Mismatch with key {key} and message {message}')
                print(f'Decrypted as {decrypted}')
                sys.exit()
            
        print('Transposition cipher test passed')

if __name__ == '__main__':
    main()