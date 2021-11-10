def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n-2)

print(fib(30))

def dyn_fib(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = a + b, a
    return a

print(dyn_fib(30))
