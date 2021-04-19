#include <ctype.h>
#include <stdio.h>

#include "isogram.h"

bool is_isogram(const char phrase[]) {
  if (phrase == NULL) {
    return false;
  }

  bool seenLetters[26] = {false};

  for (size_t i = 0; phrase[i] != '\0'; i++) {
    if (phrase[i] == '-' || phrase[i] == ' ') {
      continue;
    }
    
    unsigned char c = (unsigned char) phrase[i];
    char letter = tolower(c);

    if (seenLetters[letter - 'a']) {
      return false;
    }

    seenLetters[letter - 'a'] = true;
  }
  return true;
}
