// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/04/Mult.asm

// Multiplies R0 and R1 and stores the result in R2.
// (R0, R1, R2 refer to RAM[0], RAM[1], and RAM[2], respectively.)

// Usage: put a value>0 in RAM[0] and RAM[1]

    // n = R1
    @R1
    D = M
    @n
    M = D
    // initialize R2 to 0
    @R2
    M = 0
(LOOP)
    // if (n == 0) goto END
    @n
    D = M
    @END
    D;JEQ
    // R2 = R2 + R0
    @R0
    D = M
    @R2
    M = M + D
    // n--
    @n
    M = M - 1
    // goto LOOP
    @LOOP
    0;JMP
(END)
    @END
    0;JMP
