from decimal import Decimal, ROUND_HALF_UP, ROUND_HALF_DOWN

def rounder(n, d):
    # return round(n)
    if d == "d":
        return Decimal(n).to_integral_value(rounding=ROUND_HALF_DOWN)
    return Decimal(n).to_integral_value(rounding=ROUND_HALF_UP)

def seat_number(row, col):
    return row * 8 + col

def next_section(min, max, direction, switch):
    # print(min, max, direction)
    if direction == switch:
        return (min, rounder((min + max) / 2, "d"))
    else:
        return (rounder((min + max) / 2, "u"), max)

def get_row(rows):
    min = 0
    max = 127
    for r in rows:
        min, max = next_section(min, max, r, "F")
    # print(min, max)
    return min

def get_col(cols):
    min = 0 
    max = 7
    for c in cols:
        min, max = next_section(min, max, c, "L")
    # print(min, max)
    return min

with open("day5.txt") as f:
    lines = f.readlines()
    biggest = 0
    seats = []
    for line in lines:
        # print(line)
        row = get_row(line[0:7])
        col = get_col(line[7:])
        seat = seat_number(row, col)
        seats.append(seat)
        print(row, col, seat)
        if seat > biggest:
            biggest = seat
    # print("big: ", biggest) 
    current = 1
    # seats.sort()
    seats = sorted(set(seats))
    print(len(seats))
    while current < len(seats) - 1:
        current_seat = seats[current]
        # print(current_seat)
        previous_seat = seats[current - 1]
        next_seat = seats[current + 1]
        # print(previous_seat, current_seat, next_seat, current_seat - previous_seat, next_seat - current_seat)
        if current_seat - previous_seat + next_seat - current_seat > 2:
            print("found")
            print(previous_seat, current_seat, next_seat)
        current += 1      
    # print(current)
