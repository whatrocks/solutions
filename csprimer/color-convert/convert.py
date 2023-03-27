
def convert_hex_to_rgb(hexstr):
    """
     each two chars is a byte
     which is 0 to 255
     so just convert them to decimal
     and put in array
    """
    colors = []
    r = int(hexstr[0:2], 16)
    g = int(hexstr[2:4], 16)
    b = int(hexstr[4:6], 16)
    colors = [r,g,b]
    return 'rgb(' + ' '.join([str(x) for x in colors])  + ')'


with open('simple.css') as f:
    lines = f.readlines()
    result = ''
    for line in lines:
        if '#' in line:
            idx = line.index('#')
            line = line[0:idx] + convert_hex_to_rgb(line[idx+1:])+ ';'
        result = result + line + '\n'
    print(result)
