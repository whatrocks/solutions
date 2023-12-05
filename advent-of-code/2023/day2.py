COLORS = {
        "red": 12,
        "green": 13,
        "blue": 14
        }

with open("day2.txt") as f:
    lines = [x.rstrip() for x in f.readlines()]
    total = 0
    for line in lines:
        game_detail = line.split(": ")
        game_number = int(game_detail[0].split(" ")[1])
        matches = game_detail[1].split("; ")
        is_violation = False
        for match in matches:
            colors = match.split(", ")
            for color in colors:
                details = color.split(" ")
                color_count = int(details[0])
                color_name = details[1]
                if (color_count > COLORS[color_name]):
                    is_violation = True
                    break
            if is_violation:
                break
        if not is_violation:
            total += game_number

    print(f"total {total}")
    
    sum_product = 0
    for line in lines:
        game_detail = line.split(": ")
        game_number = int(game_detail[0].split(" ")[1])
        matches = game_detail[1].split("; ")
        
        max_red = 0
        max_green = 0
        max_blue = 0
        for match in matches:
            colors = match.split(", ")
            for color in colors:
                details = color.split(" ")
                color_count = int(details[0])
                color_name = details[1]
                if color_name == "red" and color_count > max_red:
                    max_red = color_count
                if color_name == "green" and color_count > max_green:
                    max_green = color_count
                if color_name == "blue" and color_count > max_blue:
                    max_blue = color_count
        sum_product += max_red * max_green * max_blue

    print(f"sum product {sum_product}")
