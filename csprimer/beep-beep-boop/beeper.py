import sys
import tty
import time
import termios

term_attrs = termios.tcgetattr(0)
tty.setcbreak(0)

def run():
    while True:
        ch = sys.stdin.read(1)
        if '1' <= ch <= '9':
            for _ in range(int(ch)):
                #sys.stdout.buffer.write(b'\x07')
                print('\a')
                time.sleep(0.5)
        #sys.stdout.buffer.flush()

try:
    run()
finally:
    termios.tcsetattr(0, termios.TCSADRAIN, term_attrs)

"""
import tty
import termios
import time
ORIGINAL SOLUTION

def read_one_byte(original_settings):
    try:
        # set terminal to raw mode
        tty.setraw(sys.stdin.fileno())

        # Read one byte at a time
        byte = sys.stdin.buffer.read(1)

    finally:
        termios.tcsetattr(sys.stdin, termios.TCSADRAIN, original_settings)

    return byte

if __name__ == '__main__':
    original_settings = termios.tcgetattr(sys.stdin)
    while True:
        byte = read_one_byte(original_settings)
        if byte == b'\x03':
            break
        if list(byte)[0] in [x for x in range(49, 58)]:
            n = list(byte)[0] - 48
            for i in range(n):
                sys.stdout.buffer.write(b'\x07')
                # print('\a')
                time.sleep(0.25)

"""
"""
listen to stdin
if is a number
stdout number * bel character
"""

"""
#tty.setraw(sys.stdin)
for line in sys.stdin:
    line = line.rstrip()
    if line in [str(n) for n in range(1,10)]:
        sys.stdout.buffer.write(b"0x07")
        sys.stdout.flush()
"""


