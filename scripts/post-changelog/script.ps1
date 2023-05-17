# Define variables
$CHANGELOG_FILE="CHANGELOG.md"
$CHANGELOG_PATH="$PWD/$CHANGELOG_FILE"

# Print the path of the changelog file
Write-Output $CHANGELOG_PATH

# Replace issue numbers with links to the corresponding Jira issue
(Get-Content $CHANGELOG_PATH) | ForEach-Object {$_ -replace 'VIVADOT-[0-9]+', '[&](https://gruposti.atlassian.net/browse/$&)'} | Set-Content $CHANGELOG_PATH

# Remove backup file created by sed
Remove-Item "$CHANGELOG_PATH.bak"
