with open('input2.txt') as f:

    depth = 0
    horiz = 0

    commands = [x.rstrip() for x in f.readlines()]
    for command in commands:
        [motion, amount] = command.split(' ')
        n = int(amount)
        if motion == "forward":
            horiz += n
        if motion == "down":
            depth += n
        if motion == "up":
            depth -= n
        
    print("part one: ", depth * horiz)

# part two

with open('input2.txt') as f:
    depth = 0
    horiz = 0
    aim = 0

    commands = [x.rstrip() for x in f.readlines()]
    for command in commands:
        [motion, amount] = command.split(' ')
        n = int(amount)
        if motion == "forward":
            horiz += n
            if aim != 0:
                depth += n * aim
        if motion == "down":
            aim += n
        if motion == "up":
            aim -= n
    
    print("part two: ", depth * horiz)