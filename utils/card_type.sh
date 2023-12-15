#!/usr/bin/env bash

read -r -d '' PROMPT << EOM
Output only typescript that exports a type that models every unique _type: <type>_ configuration.
Make sure to include the description as JSDoc comments.
Don't use @property JSDoc.
Only define types for non scalars.
There should be no imports, just types.
Only output typescript, no markdown, just code.
Include examples from the doc as @example JSDoc.
Use markdown links within the JSDoc to link to doc urls/images.
Omit "cards" and "type" properties.

For example, a {type: entities} yaml config would be exported as {EntitiesCardConfig}.
EOM
export PROMPT


URL="$1"

CARD=$(echo "${URL}" | sed -E 's/.*\/.*\/([^/]+)\/?/\1/g' | sed 's/\.[^.]*$//')
TS_PATH="src/cards/${CARD}.ts"
ROOT_DIR="$(git rev-parse --show-toplevel)"

if [[ "${URL}" =~ .*mushroom.* ]]; then
    TS_PATH="src/cards/mushroom/${CARD}.ts"
fi

echo "Processing ${URL} -> ${TS_PATH}"

mkdir -p "$(dirname "${TS_PATH}")"

curl -s "${URL}" \
    | strip-tags article \
    | sed "1s/^/Scraped from URL: ${URL}\n\n/" \
    | llm -m 4-turbo -s "${PROMPT}" -o max_tokens 4096 \
    | sed -E 's/^```.*//g' \
    | tee "${ROOT_DIR}/${TS_PATH}"
