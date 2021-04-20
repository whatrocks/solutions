#include <string.h>

#include "hamming.h"

int compute(const char *lhs, const char *rhs) {
  int distance = 0;
  if (strlen(lhs) != strlen(rhs)) {
    return -1;
  }
  for (int i = 0; lhs[i] != '\0'; i++) {
    if (lhs[i] != rhs[i]) {
      distance++;
    }
  }
  return distance;
}
