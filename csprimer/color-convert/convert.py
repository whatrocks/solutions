import re
import sys

def convert(hexy):
    code = hexy.group(0)[1:]
    colors = []
    idx = 0
    while idx < len(code):
        current_color_code = code[idx:idx+2]
        rgb_value = int(current_color_code, 16)
        colors.append(str(rgb_value))
        idx += 2
    return 'rgb(' + ' '.join(colors) + ')'

sys.stdout.write(re.sub(r'\#[0-9a-fA-F]+', convert, sys.stdin.read()))
