#include <math.h>
#include "armstrong_numbers.h"

bool is_armstrong_number(int candidate) {
  if (candidate < 0) {
    return false;
  }
  int length = candidate <= 0 ? 0 : log10(candidate) + 1;
  int sum = 0;
  for (int n = candidate; n > 0; n /= 10) {
    sum += pow(n % 10, length);
  }
  return sum == candidate;
}
