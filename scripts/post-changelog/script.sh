#!/bin/sh

# Define variables
CHANGELOG_FILE="CHANGELOG.md"
CHANGELOG_PATH="$PWD/$CHANGELOG_FILE"
PREFIX="$1-"

# Replace issue numbers with links to the corresponding Jira issue
sed -E -i '' "s/\*\*([0-9]+):/**[$PREFIX\1](https:\/\/gruposti.atlassian.net\/browse\/$PREFIX\1):/" "$CHANGELOG_PATH"
