#include "grains.h"

uint64_t square(uint8_t index) {
  if (index < 1 || index > 64) {
    return 0;
  }
  return 1L << (index - 1);
}

uint64_t total(void) {
  return 0 - 1;
}

