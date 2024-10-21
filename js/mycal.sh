#!/bin/bash

echo 'calendar of next month'

for i in 1 2 3 4 5 6 7 8 9 10 11 12;
do
  cal ${i} 2024
  echo '--------------------'
done
