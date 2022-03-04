fn main() {
    let sum = 5 + 10;

    let diff = 95.5 - 4.3;

    let product =  4 * 30;

    let quotient = 56.7 / 32.2;
    let floored = 2 / 3; // results in 0
    let remainder = 43 % 5;


    // Compound types
    let tup: (i32, f64, u8) = (500, 6.4, 1);
    let (x, y ,z) = tup;
    println!("The value of y is {}", y);
}
