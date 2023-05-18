# Define variables
$CHANGELOG_FILE = "CHANGELOG.md"
$CHANGELOG_PATH = Join-Path $PWD $CHANGELOG_FILE
$PREFIX = "$args[0]-"

# Replace issue numbers with links to the corresponding Jira issue
(Get-Content $CHANGELOG_PATH) | ForEach-Object {
    $_ -replace '\*\*([0-9]+):', "**[$PREFIX`$1](https://gruposti.atlassian.net/browse/$PREFIX`$1):"
} | Set-Content $CHANGELOG_PATH
