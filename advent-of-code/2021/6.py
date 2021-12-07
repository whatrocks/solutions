class LanternFish:
    def __init__(self, timer):
        self._timer = timer
    
    @classmethod
    def breedFish(cls):
        return cls(8)

    def printAge(self):
        return str(self._timer)

    def getOlder(self):
        new_fish = None        
        next_age = self._timer - 1
        if next_age < 0:
            next_age = 6
            new_fish = LanternFish.breedFish()
        self._timer = next_age
        return new_fish

FISHES = []
FISH_COUNT = 0
DAYS_TO_AGE = 256

def compute_fish(fishes):
    original_school_size = len(fishes)
    currentSchoolSize = len(fishes)
    for day in range(DAYS_TO_AGE):
        currentSchoolSize = len(fishes)
        for index, fish in enumerate(fishes):
            if index >= currentSchoolSize:
                break
            new_fish = fish.getOlder()
            if new_fish != None:
                fishes.append(new_fish)
    return currentSchoolSize, currentSchoolSize - original_school_size


DAY_CACHE = {}

with open('input6.txt') as f:
    lines = [x.rstrip() for x in f.readlines()]
    ages = [int(x) for x in lines[0].split(',')]
    # ages = [int(x) for x in '3,4,3,1,2'.split(',')]
    # ages = [int(x) for x in '3,4'.split(',')]

    # DAY_CACHE[0] = len(ages)

    # first fish
    for age in ages:
        
        breed_day = age + 1
        print("age: ", age, "Breed day :" ,breed_day)
        if breed_day in DAY_CACHE:
            DAY_CACHE[breed_day] += 1
        else:
            DAY_CACHE[breed_day] = 1
        breed_day += 7
        while breed_day <= DAYS_TO_AGE:
            print("age: ", age, "Breed day :" ,breed_day)
            if breed_day in DAY_CACHE:
                DAY_CACHE[breed_day] += 1
            else:
                DAY_CACHE[breed_day] = 1
            breed_day += 7

    print("_____")
    print(DAY_CACHE)
    counter = len(ages)

    while len(DAY_CACHE.keys()):

        for day in DAY_CACHE.keys():
            fishes = DAY_CACHE[day]
            counter += fishes
            breed_day = day + 9
            print("DAY: " ,day, "FISHES: ", fishes, "breed day: ", breed_day, "REST: ", DAY_CACHE)
            while breed_day <= DAYS_TO_AGE:
                print("breed day: ", breed_day)
                if breed_day in DAY_CACHE:
                    DAY_CACHE[breed_day] += fishes
                else:
                    DAY_CACHE[breed_day] = fishes
                breed_day += 7
            del DAY_CACHE[day]
    
    print(counter)
    # later fish

sum = 0
for fishCount in DAY_CACHE.values():
    sum += fishCount
print("sum: ", sum)

    # works but slow
    # fishes = []
    # for age in ages:
    #     fishes.append(LanternFish(age))
    #     total, new_fish = compute_fish(fishes)
    #     print(total, new_fish)
    #     FISH_COUNT += total
    #     fishes = []
    # if len(fishes):
    #     FISH_COUNT += compute_fish(fishes)

# print(FISH_COUNT)