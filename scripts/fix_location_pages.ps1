# Fix all location pages container layout

$cities = @(
    "sydney",
    "melbourne", 
    "brisbane",
    "gold-coast",
    "hobart",
    "cairns-port-douglas"
)

foreach ($city in $cities) {
    $file = "d:/au/auzzi/src/app/(locations)/$city/page.tsx"
    
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        
        # Fix 1: Add padding to section
        $content = $content -replace `
            "className=\{styles\.contentSection\} style=\{\{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto' \}\}", `
            "className={styles.contentSection} style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}"
        
        # Fix 2: Close section and add wrapper div before Neighborhoods
        $content = $content -replace `
            "(\s+)\}\)\)\}\s+</div>\s+<Neighborhoods", `
            "`$1})}`n            </div>`n            </section>`n`n            <div className=`"max-w-7xl mx-auto px-4`">`n                <Neighborhoods"
        
        # Fix 3: Close wrapper div before Footer
        $content = $content -replace `
            "(\s+)</div>\s+</section>\s+<Footer", `
            "`$1</div>`n            </div>`n`n            <Footer"
        
        Set-Content $file $content -NoNewline
        Write-Host "Fixed: $city" -ForegroundColor Green
    }
}

Write-Host "`nAll location pages fixed!" -ForegroundColor Cyan
