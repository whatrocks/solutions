FISHES = []

class LanternFish:
    def __init__(self, timer):
        self._timer = timer
    
    @classmethod
    def breedFish(cls):
        return cls(8)

    def printAge(self):
        return str(self._timer)

    def getOlder(self):        
        next_age = self._timer - 1
        if next_age < 0:
            next_age = 6
            FISHES.append(LanternFish.breedFish())
        self._timer = next_age

def printFishAge():
    result = ''
    for fish in FISHES:
        result += fish.printAge() + ','
    return result

# test data
# ages = [int(x) for x in '3,4,3,1,2'.split(',')]
# for age in ages:
#     FISHES.append(LanternFish(age))

# part one data
with open('input6.txt') as f:
    lines = [x.rstrip() for x in f.readlines()]
    ages = [int(x) for x in lines[0].split(',')]
    for age in ages:
        FISHES.append(LanternFish(age))

currentSchoolSize = len(FISHES)
for day in range(256):
    currentSchoolSize = len(FISHES)
    # print(day, len(FISHES), printFishAge())
    for index, fish in enumerate(FISHES):
        if index >= currentSchoolSize:
            break
        fish.getOlder()
        

print(len(FISHES))
