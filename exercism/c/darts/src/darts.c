#include <math.h>
#include <stdbool.h>

#include "darts.h"

bool is_inside_circle(coordinate_t pos, int radius) {
  return sqrt(pow(pos[0], 2) + pow(pos[1], 2)) <= radius;
}

uint8_t score(coordinate_t pos) {
  if (is_inside_circle(pos, 1)) {
    return 10; 
  }
  if (is_inside_circle(pos, 5)) {
    return 5;
  }
  if (is_inside_circle(pos, 10)) {
    return 1;
  }
  return 0;
}
