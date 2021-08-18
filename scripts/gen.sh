#!/bin/bash
# New a Vue component.

usage() {
  echo "Usage:"
  echo "  gen.sh [-n NAME] [-d DIR]"
  echo ""
  echo "Description:"
  echo "  New a Vue component."
  echo "  -n the name of component."
  echo "  -d the dirname of component."
  exit 2
}

while getopts 'n::d:' OPT; do
  case $OPT in
    n) NAME="$OPTARG";;
    d) DIRNAME="$OPTARG";;
    ?) usage;;
  esac
done

if [[ "$DIRNAME" =~ [[:space]]+ ]] || [ "$DIRNAME" == "" ]; then
  DIRNAME="$( cd "$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/../src/components" && pwd )/${NAME}"
else
  DIRNAME="$DIRNAME/$NAME"
fi

if [ -d "$DIRNAME" ]; then
  echo "Directory \"$DIRNAME\" already exists."
  exit 1
fi

mkdir -p "$DIRNAME"

cat > $DIRNAME/index.vue <<EOF
<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Kg${NAME}',
  setup(props) {
    // doing something
  },
})
</script>

<style lang="scss" scoped>
// adding your custom css styles here
</style>
EOF