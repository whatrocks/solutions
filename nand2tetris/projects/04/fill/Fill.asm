// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/04/Fill.asm

// Runs an infinite loop that listens to the keyboard input.
// When a key is pressed (any key), the program blackens the screen,
// i.e. writes "black" in every pixel;
// the screen should remain fully black as long as the key is pressed. 
// When no key is pressed, the program clears the screen, i.e. writes
// "white" in every pixel;
// the screen should remain fully clear as long as no key is pressed.

@i
M = 0
(WHITE)
    @KBD
    D = M
    @BLACK
    D; JGT
    // draw white
    @SCREEN
    D = A
    @i
    A = D + M
    M = 0
    // if i is JEQ, goto WHITE
    @i
    D = M
    @WHITE
    D; JEQ
    // else decrement
    @i
    M = M - 1
    // repeat loop
    @WHITE
    0; JMP
(BLACK)
    // check keyboard is pressed, otherwise goto WHITE
    @KBD
    D = M
    @WHITE
    D; JEQ
    // check to make sure we haven't gone past screen memory
    @i
    D = M
    @8191
    D = A - D
    @BLACK
    D; JLT
    // draw next word black
    @SCREEN
    D = A
    @i
    A = D + M
    M = -1
    // increment our counter
    @i
    M = M + 1
    // repeat loop
    @BLACK
    0; JMP