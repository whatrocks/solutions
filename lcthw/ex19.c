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

void test_log_warn() {
  log_warn("You can safely ignore this.");
  log_warn("Maybe consider looking at: %s.", "/etc/passwd");
}

void test_log_info() {
  log_info("Well I did something mundane.");
  log_info("It happened %f times today!", 1.3f);
}

int main(int argc, char* argv[]) {
  test_debug();
  test_log_error();
  test_log_warn();
  test_log_info();

  return 0;
}
