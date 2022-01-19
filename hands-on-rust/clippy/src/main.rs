#![warn(clippy::all, clippy::pedantic)]
fn main() {
    let my_list = [ "One", "Two", "Three" ];
    for num in &my_list {
        println!("{}", num);
    }
}
