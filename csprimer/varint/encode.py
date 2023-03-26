def encode(unsigned_int):
    print(unsigned_int.to_bytes(8, 'little'))

encode(1)
encode(2)
encode(150)
