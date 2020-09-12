#include <stdio.h>

int main(int argc, char *argv[]) {
  
  //create two arrays we care abotu
  int ages[] = { 23, 43, 12, 89, 2 };
  char *names[] = {
    "Alan", "Frank",
    "Mary", "John", "Lisa"
  };

  // safely get the size of ages
  int count = sizeof(ages) / sizeof(int);
  int i = 0;

  // first way using indexing
  for (i = 0; i < count; i++) {
    printf("%s has %d years alive.\n", names[i], ages[i]);
  }

  printf("---\n");


  // setup pointers to start at the front of the arrays
  int *cur_age = ages;
  char **cur_name = names;

  // seond way using pointers
  for (i = 0; i < count; i++) {
   printf("%s has %d years alive.\n",
       *(cur_name + i), *(cur_age + i));
  }

  printf("---\n");

  // third way, pointers are just arrays
  for (i = 0; i < count; i++) {
    printf("%s has %d years alive.\n", cur_name[i], cur_age[i]);
  }

  printf("---\n");

  // fourth way with pointers in a stupid complex way
  for (cur_name = names, cur_age = ages;
        (cur_age - ages) < count;
        cur_name++, cur_age++) {
    printf("%s lived %d years so far.\n", *cur_name, *cur_age);
  } 

  return 0;
}
