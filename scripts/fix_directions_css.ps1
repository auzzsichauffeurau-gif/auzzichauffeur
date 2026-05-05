# Replace Tailwind Directions classes with CSS Module classes

$files = Get-ChildItem "d:/au/auzzi/src/app/(locations)/*/page.tsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # 1. Main Container
    $search1 = '<div className="my-16 bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-left">'
    $replace1 = '<div className={styles.directionsSection}>'
    
    # 2. Title
    $search2 = '<h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">'
    $replace2 = '<h3 className={styles.directionsTitle}>'
    
    # 3. Map Icon color
    $search3 = '<Map className="text-[#c5a467]" />'
    $replace3 = '<Map color="#c5a467" />'
     
    # 4. Text paragraph
    $search4 = '<p className="text-gray-700 mb-6">'
    $replace4 = '<p className={styles.directionsText}>'

    if ($content.Contains($search1)) {
        $content = $content.Replace($search1, $replace1)
        $content = $content.Replace($search2, $replace2)
        $content = $content.Replace($search3, $replace3)
        $content = $content.Replace($search4, $replace4)
        
        Set-Content $file.FullName $content -NoNewline
        Write-Host "Updated Directions: $($file.Name)" -ForegroundColor Green
    } else {
        Write-Host "Directions pattern not found in: $($file.Name)" -ForegroundColor Yellow
    }
}
