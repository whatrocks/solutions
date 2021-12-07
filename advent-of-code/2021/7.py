import statistics
import math


def doubler(distance):
    cost = 0
    for i in range(1, distance +1):
        # print("distance before:", distance, " i: ", i, "cost: ", cost)
        cost = cost + i
        # print("distance after:", distance, " i: ", i, "cost: ", cost)
    return cost

with open('input7.txt') as f:
    lines = [x.rstrip() for x in f.readlines()]
    crabs = [int(x) for x in lines[0].split(',')]

    # part one
    median = statistics.median(crabs)
    moves = 0
    for crab in crabs:
        if crab > median:
            moves += crab - median
        else:
            moves += median - crab
    print(moves)

    # part two
    # wrong answer too high: 99763907
    print("before rounding: ", statistics.mean(crabs), round(statistics.mean(crabs)))
    mean = math.floor(statistics.mean(crabs))

    moves = 0
    for crab in crabs:
        if crab > mean:
            # print(crab, mean, crab- mean, doubler(crab-mean))
            moves += doubler(crab - mean)
        else:
            # print(crab, mean, mean - crab, doubler(mean-crab))
            moves += doubler(mean - crab)
    print(moves)