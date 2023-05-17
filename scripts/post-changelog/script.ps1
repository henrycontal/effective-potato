# Define variables
$CHANGELOG_FILE = "CHANGELOG.md"
$CHANGELOG_PATH = Join-Path $PWD $CHANGELOG_FILE

# Print the path of the changelog file
Write-Output $CHANGELOG_PATH

# Replace issue numbers with links to the corresponding Jira issue
(Get-Content $CHANGELOG_PATH) | ForEach-Object {
    $_ -replace '\*\*VIVADOT-([0-9]+):', '**[VIVADOT-$1](https://gruposti.atlassian.net/browse/VIVADOT-$1):'
} | Set-Content $CHANGELOG_PATH
