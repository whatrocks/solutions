with open("test4.txt") as f:
    lines = [x.rstrip() for x in f.readlines()]
    result = 0
    for line in lines:
        nums = line.split(": ")[1]
        sides = nums.split(" | ")
        winning_nums = set(sides[0].split())
        ticket_nums = set(sides[1].split())
        wins = winning_nums.intersection(ticket_nums)
        val = 0
        for match in wins:
            if val == 0:
                val = 1
            else:
                val *= 2
        result += val
    print(f"result {result}")
    # part two
    count = len(lines)
    copies = {}
    for i in range(1, count+1):
        copies[i] = 1
    for idx, line in enumerate(lines):
        game_idx = idx + 1
        sides = line.split(": ")[1].split(" | ")
        winning_nums = set(sides[0].split())
        ticket_nums = set(sides[1].split())
        tix_count = copies[game_idx]
        count += tix_count - 1
        win_count =  len(winning_nums.intersection(ticket_nums))
        print(f"game {game_idx}, tix {tix_count}, wins {win_count}")

        for n in range(1, win_count + 1):
            # get multiplier
            copy_idx = game_idx + n
            print("extra card: ", copy_idx, "adding: ", tix_count)
            if copy_idx > len(lines):
                break
            print(copy_idx)
            copies[copy_idx] += 1 * tix_count

    print(copies)            

    print(f"count {count}")
    
    c = 0
    for key in copies:
        c += copies[key]
    print(c)

