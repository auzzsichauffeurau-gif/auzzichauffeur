# Replace Tailwind classes with CSS Module class for WeatherWidget

$files = Get-ChildItem "d:/au/auzzi/src/app/(locations)/*/page.tsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # EXACT match string from previous fix
    $search = '<div className="hidden md:block absolute bottom-5 right-5 z-10">'
    $replace = '<div className={styles.weatherWidgetWrapper}>'
    
    if ($content.Contains($search)) {
        $content = $content.Replace($search, $replace)
        Set-Content $file.FullName $content -NoNewline
        Write-Host "Updated: $($file.FullName)" -ForegroundColor Green
    } else {
        Write-Host "Skipped (Pattern not found): $($file.FullName)" -ForegroundColor Yellow
    }
}
