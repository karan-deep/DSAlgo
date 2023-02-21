#!/bin/bash

input=$1

# replaces whitespace with underscore and creates js file with dash-case naming convention
# Ex - Find Pivot Index : find-pivot-index.js
touch $(echo $(echo $input | tr ' ' '-' | tr '[:upper:]' '[:lower:]').js)
