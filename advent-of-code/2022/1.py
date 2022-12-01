with open("input1.txt") as f:
    lines = [x.rstrip() for x in f.readlines()]
    max_cals = 0
    fat_elf = 0
    elf_count = 1
    current = 0
    elves = []
    for idx, val in enumerate(lines):
        if val == "":
            if current > max_cals:
                max_cals = current
                fat_elf = elf_count
            print(f"current: {current}, max_cals: {max_cals}, elf_count: {elf_count}, fat_elf: {fat_elf}")
            elves.append(current)
            current = 0
            elf_count = elf_count + 1
        else:
            cals = int(val)
            current = current + cals
    print(f"current: {current}, max_cals: {max_cals}, elf_count: {elf_count}, fat_elf: {fat_elf}")
    if current > 0 and current > max_cals:
        fat_elf = elf_count + 1

    print(max_cals)
    sorted = elves.sort(reverse=True)
    sum = elves[0] + elves[1]+ elves[2]
    print(sum)