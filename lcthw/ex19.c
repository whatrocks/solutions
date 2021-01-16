#include "dbg.h"
#include <stdlib.h>
#include <stdio.h>

void test_debug() {
  // notice that you don't need the \n
  debug("I have Brown Hair.");
  // passing arguments like printf
  debug("I am %d years old.\n", 34);
}

void test_log_error() {
  log_err("I believe everything is broken.");
  log_err("There are %d problems in %s", 0, "space");
}

int main(int argc, char* argv[]) {
  test_debug();
  test_log_error();
  return 0;
}
