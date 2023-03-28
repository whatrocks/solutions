import re
import sys

def convert(hexy):
    code = hexy.group(0)
    print(code)
    colors = []
    idx = 0
    while idx < len(code):
        current_color_code = code[idx:idx+2]
        rgb_value = int(current_color_code, 16)
        colors.append(str(rgb_value))
        idx += 2
    return 'rgb(' + ' '.join(colors) + ')'

d = dict(zip('0123456789abcdef', range(16)))

def xx_to_dec(xx):
    return (d[xx[0].lower()] << 4) + d[xx[1].lower()]

def hex_to_rgb(r):
    hx = r.group(1)
    # normalize to non-abbreviated form
    if len(hx) in {3, 4}:
        hx = ''.join(x + x for x in hx)
    # compute decimal form of R, G, and B
    dec = [xx_to_dec(hx[i: i + 2]) for i in (0, 2, 4)]
    # deal with Alpha channel
    label = 'rgb'
    alpha = ''
    if len(hx) == 8:
        a = round(xx_to_dec(hx[6:]) / 255, 5)
        alpha = f' / {str(a)}'
        label = 'rgba'
    return f'{label}({" ".join(str(x) for x in dec)}{alpha})'


sys.stdout.write(re.sub(r'\#([0-9a-fA-F]+)', hex_to_rgb, sys.stdin.read()))

