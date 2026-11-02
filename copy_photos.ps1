$imgDir = 'c:\Users\ASUS\Desktop\AK CHENDAMELAM\images'
$vidDir = 'c:\Users\ASUS\Desktop\AK CHENDAMELAM\videos'

$h1 = 'C:\Users\ASUS\.gemini\antigravity-ide\brain\4586a38b-a7a7-4606-9342-eb0ed7761c53\hero_chendamelam_1793385731110.jpg'
$h2 = 'C:\Users\ASUS\.gemini\antigravity-ide\brain\4586a38b-a7a7-4606-9342-eb0ed7761c53\hero_wedding_percussion_1793385748700.jpg'
$h3 = 'C:\Users\ASUS\.gemini\antigravity-ide\brain\4586a38b-a7a7-4606-9342-eb0ed7761c53\hero_procession_1793385768570.jpg'
$w1 = 'C:\Users\ASUS\.gemini\antigravity-ide\brain\4586a38b-a7a7-4606-9342-eb0ed7761c53\welcome_chendamelam_1793385801465.jpg'
$e1 = 'C:\Users\ASUS\.gemini\antigravity-ide\brain\4586a38b-a7a7-4606-9342-eb0ed7761c53\event_mgmt_mandapam_1793385823215.jpg'

Copy-Item -Force $h1 (Join-Path $imgDir 'hero1.jpg')
Copy-Item -Force $h2 (Join-Path $imgDir 'hero2.jpg')
Copy-Item -Force $h3 (Join-Path $imgDir 'hero3.jpg')

Copy-Item -Force $h2 (Join-Path $imgDir 'wedding.jpg')
Copy-Item -Force $h1 (Join-Path $imgDir 'temple.jpg')
Copy-Item -Force $h3 (Join-Path $imgDir 'procession.jpg')
Copy-Item -Force $w1 (Join-Path $imgDir 'welcome.jpg')
Copy-Item -Force $e1 (Join-Path $imgDir 'event_mgmt.jpg')

Copy-Item -Force $h2 (Join-Path $imgDir 'gallery1.jpg')
Copy-Item -Force $h1 (Join-Path $imgDir 'gallery2.jpg')
Copy-Item -Force $h3 (Join-Path $imgDir 'gallery3.jpg')
Copy-Item -Force $w1 (Join-Path $imgDir 'gallery4.jpg')
Copy-Item -Force $e1 (Join-Path $imgDir 'gallery5.jpg')
Copy-Item -Force $h2 (Join-Path $imgDir 'gallery6.jpg')
Copy-Item -Force $h1 (Join-Path $imgDir 'gallery7.jpg')
Copy-Item -Force $h3 (Join-Path $imgDir 'gallery8.jpg')
Copy-Item -Force $w1 (Join-Path $imgDir 'gallery9.jpg')
Copy-Item -Force $e1 (Join-Path $imgDir 'gallery10.jpg')
Copy-Item -Force $h1 (Join-Path $imgDir 'gallery11.jpg')
Copy-Item -Force $h2 (Join-Path $imgDir 'gallery12.jpg')

Copy-Item -Force $w1 (Join-Path $vidDir 'sample1_poster.jpg')
Copy-Item -Force $e1 (Join-Path $vidDir 'sample2_poster.jpg')

Write-Host "Real photography copied successfully!"
