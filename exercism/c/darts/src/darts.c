#include <math.h>

#include "darts.h"

uint8_t score(coordinate_t pos) {
  float distance = sqrt(pow(pos[0], 2) + pow(pos[1], 2));
  if (distance <= 1) {
    return 10; 
  }
  if (distance <= 5) {
    return 5;
  }
  if (distance <= 10) {
    return 1;
  }
  return 0;
}
