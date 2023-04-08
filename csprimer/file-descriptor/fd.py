files = {}
for i in range(300):
    f = open("foo.txt")
    files[i] = f
    print(f.fileno())
print("Done!")
