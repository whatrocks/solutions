#include <stdio.h>

#include "resistor_color_duo.h"

uint16_t color_code(resistor_band_t* colors) {
  return colors[0] * 10 + colors[1];
}
