import struct

def encode(n):
    out = []
    while n > 0:
        part = n & 0x7f #128
        n >>= 7
        if n > 0:
            part |= 0x80 # 0b10000000 or 128 
        out.append(part)
    return bytes(out)

def decode(varn):
    n = 0
    for b in reversed(varn):
        n << 7 # now the bottom 7 bits are just 0000's
        n |= (b & 0x7f) # remove MSB
    return n


def my_original_decode(varn):
    out = 0
    for b in varn:
        b %= 128
        if out > 0:
            b <<= 7
        out += b
    return out

if __name__ == '__main__':
    cases = (
        ('1.uint64', b'\x01'),
        ('150.uint64', b'\x96\x01'),
        ('maxint.uint64', b'\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01')
    )
    for fname, expectation in cases:
        with open(fname, 'rb') as f:
            n = struct.unpack('>Q', f.read())[0]
            print("n is : ", n)
            assert encode(n) ==  expectation
            assert decode(encode(n)), n
    print("ok")


