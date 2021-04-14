#include <stdio.h>
#include <stdint.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "armstrong_numbers.h"

bool is_armstrong_number(int32_t candidate) {
  char str[32];
  int length = sprintf(str, "%d", candidate);
 
  int sum = 0, is_negative_number = 0;
  for (int i = 0; i < length; i++) {
    /* This assumes all characters are ascii. Basically,
       subtracting the ascii value of '0' (which is 48)
       from a 'char' letter will give a numerical
       representation of that digit. For example,
      '2' - '0' is 50 - 48, which is 2.
    */
    if (str[i] == '-') {
      is_negative_number++;
      continue;
    }
    int digit = str[i] - '0';
    sum += pow(digit, length - is_negative_number);
  }
  return sum == abs(candidate);
}
