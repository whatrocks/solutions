with open("test5.txt") as f:
    lines = [x.rstrip() for x in f.readlines()]
    lines.append(" ")
    
    seeds = []

    maps = []
    
    current_map = {'entries': [],'conversion_map': {}}
    
    # gather stuff
    for idx, line in enumerate(lines):
        if idx == 0:
            seeds = [int(x) for x in line.split("seeds: ")[1].split()]
        if idx == 1:
            continue

        if not len(line) or idx == len(lines) - 1:
            # we are done with map
            maps.append(current_map)
            current_map = {"entries": [],"conversion_map": {}}
            # add to maps and clear current_map
        
        elif line[0].isalpha():
            continue
        else:
            pieces = [int(x) for x in line.split()]
            print(pieces)
            current_map["entries"].append(pieces[1])
            current_map["conversion_map"][pieces[1]] = pieces[0]

    for mapper in maps:
        mapper["entries"].sort()
        print(mapper)

    lowest_loc = 0
    for seed in seeds:
        loc = seed
        for mapper in maps:
            idx = 0
            entry = 0
            while idx < len(mapper['entries']):
                entrypoint = mapper['entries'][idx]
                if loc < entrypoint:
                    break
                else:
                    entry = entrypoint
                idx += 1
            distance = loc - entry
            print("entry: ", entry, " distance:", distance)
            if entry:
                loc = mapper['conversion_map'][entry] + distance
            else:
                loc = distance
            print("loc: ", loc)
        print("seed location is: ", loc)



print("ok")
