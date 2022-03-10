fn main() {
    let mut count = 0;
    'counting_up: loop {
        println!("count = {}", count);
        let mut remaining = 10;

        loop {
            println!("remaining = {}", remaining);
            if remaining == 9 {
                break;
            }
            if count == 2 {
                break 'counting_up;
            }
            remaining -= 1;
        }
        count += 1;
    }
    println!("End count = {}", count);

    let mut counter = 0;

    let result = loop {
        counter += 1;

        if counter == 10 {
            break counter * 2;
        }
    };

    println!("Result is {}", result);

    let mut number = 3;

    while number != 0 {
        println!("{}!", number);
        number -= 1;
    }
    println!("LIFTOFF!!!!");

    let a = [10, 20, 30, 40, 50];
    let mut index = 0;
    while index < 5 {
        println!("val: {}", a[index]);
        index += 1;
    }
    for element in a {
        println!("value is {}", element);
    }

    for number in (1..4).rev() {
        println!("{}...", number);
    }
    println!("LIFTOFF AGAIN!");

    let fah = 32.0;
    let cel = convert_temp(fah, 'f');
    println!("cel is {} ", cel);
    println!("fah is {}", convert_temp(0.0, 'c'));

    for n in 0..10 {
        println!("fibo {}", fibo(n));
    }
}

fn convert_temp(temp: f32, current_unit: char) -> f32 {
    if current_unit == 'c' {
        temp * 1.8 + 32.0
    } else {
        (temp - 32.0) * 5.0 / 9.0
    }
}

fn fibo(target: i32) -> i32 {
    if target <= 1 {
        return target
    }
    fibo(target - 1) + fibo(target - 2)
}
