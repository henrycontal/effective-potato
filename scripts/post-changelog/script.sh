#!/bin/sh

# Define variables
CHANGELOG_FILE="CHANGELOG.md"
CHANGELOG_PATH="$PWD/$CHANGELOG_FILE"

# Print the path of the changelog file
echo "$CHANGELOG_PATH"

# Replace issue numbers with links to the corresponding Jira issue
sed -E -i '' 's/\*\*VIVADOT-([0-9]+):/**[VIVADOT-\1](https:\/\/gruposti.atlassian.net\/browse\/VIVADOT-\1):/' "$CHANGELOG_PATH"
