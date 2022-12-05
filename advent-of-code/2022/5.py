with open("input5.txt") as f:
    lines = [x.rstrip() for x in f.readlines()]
    stack_lines = []
    move_lines = []
    stack_count = 0
    for line in lines:
        if line == "":
            print("next part")
        elif line[0] == "m":
            move_lines.append(line)
        elif line[1] == "1":
            stack_count = int(line[-1])
        else:
            stack_lines.append(line)
    
    # make stacks
    stack_map = {}
    print(stack_count)
    for i in range(1, stack_count+1):
        stack_map[i] = []
    print(stack_map)
    
    # set up original stacks
    idx = len(stack_lines) - 1
    while idx > -1:
        current = stack_lines[idx]
        j = 1
        stack = 1
        while j < len(current):
            if current[j] != "" and current[j] != " ":
                stack_map[stack].append(current[j])
            j = j + 4
            stack = stack + 1
        # index is every 1, 5, 9

        idx = idx - 1
    print(stack_map)
    # go thru moves
    
    for instruction in move_lines:
        number_to_move = int(instruction[5])
        if instruction[6] != " ":
            number_to_move = int(instruction[5] + instruction[6])
        origin = instruction[12]
        if origin == " ":
            origin = int(instruction[13])
        else:
            origin = int(origin)
        destination = int(instruction[-1])
        print(number_to_move, origin, destination)

        stacky = []
        for i in range(0, number_to_move):
            # part 1
            # if len(stack_map[origin]):
            #     piece = stack_map[origin].pop()
            #     stack_map[destination].append(piece)
            

            # part 2
            
            if len(stack_map[origin]):
                piece = stack_map[origin].pop()
                stacky.append(piece)
        print("stacky", stacky)
        for i in range(0, len(stacky)):
            piece = stacky.pop()
            stack_map[destination].append(piece)


    print(stack_map)
    message = ''
    for i in range(1, stack_count + 1):
        if len(stack_map[i]):
            letter = stack_map[i].pop()
            message = message + letter
    print(message)


    # pop off all stacks