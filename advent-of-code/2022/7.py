with open("test7.txt") as f:
    lines = [x.rstrip() for x in f.readlines()]
    for line in lines:
        print(line)


"""
[name, size, [children]]
[/,]

"""