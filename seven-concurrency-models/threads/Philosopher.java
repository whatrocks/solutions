import java.util.Random;

class Philosopher extends Thread {
    private Chopstick first, second;
    private Random random;

    public Philosopher(Chopstick left, Chopstick right) {
        if (left.getID() < right.getID()) {
            first = left; second = right;    
        } else {
            first = right; second = left;
        }
        random = new Random();
    }

    public void run() {
        try {
            while(true) {
                Thread.sleep(random.nextInt(1000));
                synchronized(first) {
                    synchronized(second) {
                        Thread.sleep(random.nextInt(1000));
                    }
                }
            }
        } catch(InterruptedException e) {}
    }
}
