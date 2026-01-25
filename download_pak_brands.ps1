$ErrorActionPreference = "Stop"

Write-Host "Downloading Sapphire..."
Invoke-WebRequest -Uri "https://i.dawn.com/primary/2021/12/61caa7175be6b.png" -OutFile "src/assets/brands/sapphire.png" -UserAgent "Mozilla/5.0"

Write-Host "Downloading J. Official..."
Invoke-WebRequest -Uri "https://img.joraywala.com/2022/05/J.Official-Logo.webp" -OutFile "src/assets/brands/j_official.webp" -UserAgent "Mozilla/5.0"

Write-Host "Downloading Khaadi..."
Invoke-WebRequest -Uri "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIRZ13qedavEfu3x8qgHOkzMVHEkFN6ko0Zg&s" -OutFile "src/assets/brands/khaadi.jpg" -UserAgent "Mozilla/5.0"

Write-Host "Downloads complete."
