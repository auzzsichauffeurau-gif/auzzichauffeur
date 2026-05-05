# Fix WeatherWidget visibility on mobile for all location pages

$files = Get-ChildItem "d:/au/auzzi/src/app/(locations)/*/page.tsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Replace the inline style div with tailwind class div
    if ($content -match "style=\{\{ position: 'absolute', bottom: '20px', right: '20px', zIndex: 10 \}\}") {
        $content = $content -replace `
            "<div style=\{\{ position: 'absolute', bottom: '20px', right: '20px', zIndex: 10 \}\}>", `
            "<div className=`"hidden md:block absolute bottom-5 right-5 z-10`">"
            
        Set-Content $file.FullName $content -NoNewline
        Write-Host "Fixed: $($file.Name)" -ForegroundColor Green
    }
}
