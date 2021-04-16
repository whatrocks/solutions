#include "stdint.h"

#include "resistor_color.h"

int color_code(resistor_band_t color) {
  return color;
}

int* colors() {
  static int codes[WHITE-BLACK+1];
  for (int i = BLACK; i <= WHITE; i++) {
    codes[i] = i;
  }
  return codes;
}

