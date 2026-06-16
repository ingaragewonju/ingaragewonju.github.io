$content = [System.IO.File]::ReadAllText('calculator-mobile\app.js', [System.Text.Encoding]::UTF8)

$startTag = "ko: {"
$endTag = "    en: {"
$startIndex = $content.IndexOf($startTag)
$endIndex = $content.IndexOf($endTag)

if ($startIndex -ge 0 -and $endIndex -ge 0) {
    $newKo = [System.IO.File]::ReadAllText('good_ko.txt', [System.Text.Encoding]::UTF8)
    $newContent = $content.Substring(0, $startIndex) + $newKo + $content.Substring($endIndex)
    [System.IO.File]::WriteAllText('calculator-mobile\app.js', $newContent, [System.Text.Encoding]::UTF8)
    Write-Host "SUCCESS: Replaced KO block"
} else {
    Write-Host "FAILED to find indices. Start: $startIndex, End: $endIndex"
}
