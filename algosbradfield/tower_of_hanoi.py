def move_disk(from_pole, to_pole):
    print('moving disk from {} to {}'.format(from_pole, to_pole))

def move_tower(height, from_pole, to_pole, with_pole):
    # print("height is: {}".format(height))
    if height >= 1:
        move_tower(height - 1, from_pole, with_pole, to_pole)
        move_disk(from_pole, to_pole)
        move_tower(height - 1, with_pole, to_pole, from_pole)
    

move_tower(3, 'A', 'C', 'B')