#include <ctype.h>
#include <stdio.h>
#include <string.h>

#include "isogram.h"

bool is_isogram(const char phrase[]) {
  if (phrase == NULL) {
    return false;
  }

  // outerLoop, innerLoop
  int i = 0, j = 0;
  char outerLetter = tolower(phrase[i]);

  // how to do a hash table instead of this?
  char seenLetters[strlen(phrase) + 1]; 
  seenLetters[0] = '\0';

  while (outerLetter != '\0') {
    outerLetter = tolower(phrase[i]);
    char innerLetter = seenLetters[j];
    while (innerLetter != '\0') {
      if (outerLetter != '-' && outerLetter != ' ' & i > 0 && innerLetter == outerLetter) {
        return false;
      }
      j++;
      innerLetter = seenLetters[j];
    }
    
    // add to our "seen letters" string
    // I had to do this part because I couldn't do 'strncat'
    // when the string was empty...
    if (seenLetters[0] == '\0') {
      seenLetters[0] = outerLetter;
      seenLetters[1] = '\0';
    } else {
      strncat(seenLetters, &outerLetter, 1);
    }
 
    i++;
    j = 0;
  }
  return true;
}
