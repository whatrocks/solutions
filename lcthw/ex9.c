#include <stdio.h>

int main(int argc, char *argv[])
{

  int i = 0;
  while (i < 25) {
    printf("%d\n", i);
    i++;
  }

  printf("Now let's print the arguments...\n");
  int j = 0;
  while (j < argc) {
    printf("%s\n", argv[j]);
    j++;
  }  

  return 0;
}
