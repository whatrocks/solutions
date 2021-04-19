#include <ctype.h>
#include <stdio.h>
#include <string.h>

#include "isogram.h"

bool is_isogram(const char phrase[]) {
  if (phrase == NULL) {
    return false;
  }

  char seenLetters[26];

  for (size_t i = 0; phrase[i] != '\0'; i++) {
    if (phrase[i] == '-' || phrase[i] == ' ') {
      continue;
    }
    
    unsigned char c = (unsigned char) phrase[i];
    char letter = tolower(c);

    // ascii code for lowercase a is 97
    if (seenLetters[letter - 97] == '1') {
      return false;
    }

    seenLetters[letter - 97] = '1';
  }
  return true;
}
