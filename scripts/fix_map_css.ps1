# Replace Tailwind map container with CSS Module class

$files = Get-ChildItem "d:/au/auzzi/src/app/(locations)/*/page.tsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Exact Tailwind string from previous steps
    $search = '<div className="w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden relative">'
    $replace = '<div className={styles.mapContainer}>'
    
    if ($content.Contains($search)) {
        $content = $content.Replace($search, $replace)
        Set-Content $file.FullName $content -NoNewline
        Write-Host "Updated Map: $($file.Name)" -ForegroundColor Green
    } else {
        Write-Host "Map pattern not found in: $($file.Name)" -ForegroundColor Yellow
    }
}
