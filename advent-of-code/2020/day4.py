"""
byr (Birth Year) - four digits; at least 1920 and at most 2002.
iyr (Issue Year) - four digits; at least 2010 and at most 2020.
eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
hgt (Height) - a number followed by either cm or in:
    If cm, the number must be at least 150 and at most 193.
    If in, the number must be at least 59 and at most 76.
hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
pid (Passport ID) - a nine-digit number, including leading zeroes.
cid (Country ID) - ignored, missing or not.
"""

import re

def byr(val):
    if len(val) != 4:
        return False
    ival = int(val)
    if ival < 1920 or ival > 2002:
        return False
    return True

def iyr(val):
    if len(val) != 4:
        return False
    ival = int(val)
    if ival < 2010 or ival > 2020:
        return False
    return True

def eyr(val):
    if len(val) != 4:
        return False
    ival = int(val)
    if ival < 2020 or ival > 2030:
        return False
    return True

def hgt(val):
    last_two = val[-2:]
    if last_two != "cm" and last_two != "in":
        return False
    if last_two == "cm":
        ival = int(val[:-2])
        if ival < 150 or ival > 193:
            return False
    if last_two == "in":
        ival = int(val[:-2])
        if ival < 59 or ival > 76:
            return False
    return True

def hcl(val):
    if val[0] != "#" or len(val) != 7:
        return False
    pattern = '^[a-f0-9]*$'
    if not re.search(pattern, val[1:]):
        return False
    return True

def ecl(val):
    if len(val) != 3:
        return False
    if val not in ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]:
        return False
    print("val: ", val)
    return True

def pid(val):
    if len(val) != 9:
        return False
    pattern = '^[0-9]*$'
    if not re.search(pattern, val):
        return False
    return True
    

REQUIRED = {"byr": byr, "iyr": iyr, "eyr": eyr, "hgt": hgt, "hcl":hcl, "ecl":ecl, "pid":pid}

def validate(curr):
    violated = False
    for field in REQUIRED:
        if field not in curr:
            violated = True
            break
        if not REQUIRED[field](curr[field]):
            violated = True
            break
    if not violated:
        return 1
    return 0


with open("day4.txt") as f:
    lines = f.readlines()
    valid = 0
    current = {}
    for line in lines:
        if len(line) == 1:
            valid += validate(current)
            current = {}
        else:
            pieces = line.split()
            for piece in pieces:
                sides = piece.split(":")
                current[sides[0]] = sides[1]
    if len(current):
        valid += validate(current)

    print(f"valid passports: {valid}")

