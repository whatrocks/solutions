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

def xx_to_range(xx):
    """
    get decimal value of 0 - 255
    0 is 0.00000
    255 = 1.00000
    
    dive by 255, round to 5 places
    
    """
    return round(xx_to_dec(xx) / 255, 5)

def xx_to_dec(xx):
    return (d[xx[0].lower()] << 4) + d[xx[1].lower()]

def hex_to_rgb(r):
    hx = r.group(1)

    if len(hx) == 3:
        hx = hx[0] + hx[0] + hx[1] + hx[1] + hx[2] + hx[2]
    if len(hx) == 6:
        dec = [xx_to_dec(hx[i: i + 2]) for i in (0, 2, 4)]
        return 'rgb(' + ' '.join([str(x) for x in dec]) + ')'
    if len(hx) == 4:
        hx = ''.join([hx[i] + hx[i] for i in range(len(hx))])
    if len(hx) == 8:
        dec = [xx_to_dec(hx[i: i + 2]) for i in (0, 2, 4)]
        alpha = xx_to_range(hx[6:])
        return f'rgba({" ".join(str(x) for x in dec)} / {str(alpha)})'
    return 'fooo'


sys.stdout.write(re.sub(r'\#([0-9a-fA-F]+)', hex_to_rgb, sys.stdin.read()))

