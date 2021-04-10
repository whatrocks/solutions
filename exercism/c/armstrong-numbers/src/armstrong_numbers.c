#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "armstrong_numbers.h"

bool is_armstrong_number(int candidate) {
  // convert to string
  char str[12];
  sprintf(str, "%d", candidate);
  int length = strlen(str);
 
  // check armstrong rules
  int sum = 0;
  for (int i = 0; i < length; i++) {
    // this seems like dark magic is this really the best way to do this?
    int digit = str[i] - '0';
    sum += pow(digit, length);
  }
  return sum == candidate;
}
