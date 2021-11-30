import concurrent.futures
import logging
import threading
import time

def thread_function(name):
    print("Thread %s: starting" % name)
    time.sleep(2)
    print("Thread %s: finishing" % name)

if __name__ == '__main__':
    format = "%(asctime)s: %(message)s"
    logging.basicConfig(format=format, level=logging.INFO,
                        datefmt="%H:%M:%S")

    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
        executor.map(thread_function, range(3))