#!/bin/sh

# Define variables
CHANGELOG_FILE="CHANGELOG.md"
CHANGELOG_PATH="$PWD/$CHANGELOG_FILE"

# Print the path of the changelog file
echo "$CHANGELOG_PATH"

# Replace issue numbers with links to the corresponding Jira issue
sed -i.bak 's#\(VIVADOT-[0-9]\{1,\}\)#\[&\](https://gruposti.atlassian.net/browse/\1)#g' "$CHANGELOG_PATH"

# Remove backup file created by sed
rm "$CHANGELOG_PATH.bak"
