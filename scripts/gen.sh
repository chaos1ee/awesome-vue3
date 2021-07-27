#! /bin/bash
# Generate a Vue Component.

TYPE=$1;

NAME=$2;

if [ "$TYPE" != "c" ] && [ "$TYPE" != "v" ]; then 
  echo 'Type must be "c" or "v".'
  exit 1
fi

if [[ "$NAME" =~ [[:space]]+ ]] || [ "$NAME" == "" ]; then
  echo "Name should not be empty."
  exit 1
fi

DIRNAME=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd );

TARGET_DIR=$([ "$TYPE" == "c" ] && echo "components" || echo "views")

TARGET="$( cd "${DIRNAME}/../src/${TARGET_DIR}" && pwd )/${NAME}"

if [ -d "$TARGET" ]; then
  echo "Component '${NAME}' already exists, please change the name and try again."
  exit 1
fi

mkdir -p "$TARGET"

cat > $TARGET/index.vue <<EOF
<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Kg${NAME}',
  setup(props) {
    // do something
  },
})
</script>

<style lang="scss" scoped>
// add your custom css styles here
</style>
EOF