Add-Type -AssemblyName System.Drawing

function Create-PlaceholderImage {
    param(
        [string]$Path,
        [int]$Width,
        [int]$Height,
        [string]$Title,
        [string]$Subtitle
    )
    
    $bmp = New-Object System.Drawing.Bitmap($Width, $Height)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias
    
    # Gradient background: deep maroon to near black
    $rect = New-Object System.Drawing.Rectangle(0, 0, $Width, $Height)
    $cTop = [System.Drawing.Color]::FromArgb(90, 15, 20)      # #5a0f14
    $cBottom = [System.Drawing.Color]::FromArgb(28, 11, 10)   # #1c0b0a
    $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $cTop, $cBottom, 45.0)
    $g.FillRectangle($brush, $rect)
    $brush.Dispose()
    
    # Outer gold border
    $goldColor = [System.Drawing.Color]::FromArgb(200, 147, 43) # #c8932b
    $pen = New-Object System.Drawing.Pen($goldColor, 2)
    $g.DrawRectangle($pen, 15, 15, $Width - 30, $Height - 30)
    
    # Inner subtle dashed gold line
    $innerPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(80, 200, 147, 43), 1)
    $innerPen.DashStyle = [System.Drawing.Drawing2D.DashStyle]::Dash
    $g.DrawRectangle($innerPen, 25, 25, $Width - 50, $Height - 50)
    $innerPen.Dispose()
    $pen.Dispose()
    
    # Draw Traditional Drum / Chenda Motif in Center
    $cx = [float]($Width / 2)
    $cy = [float]($Height / 2) - 30
    $motifPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(90, 200, 147, 43), 2)
    $g.DrawEllipse($motifPen, $cx - 40, $cy - 50, 80, 20)
    $g.DrawEllipse($motifPen, $cx - 40, $cy + 30, 80, 20)
    $g.DrawLine($motifPen, $cx - 40, $cy - 40, $cx - 40, $cy + 40)
    $g.DrawLine($motifPen, $cx + 40, $cy - 40, $cx + 40, $cy + 40)
    # Drum ropes
    $g.DrawLine($motifPen, $cx - 40, $cy - 40, $cx, $cy + 40)
    $g.DrawLine($motifPen, $cx, $cy - 40, $cx + 40, $cy + 40)
    $g.DrawLine($motifPen, $cx, $cy + 40, $cx + 40, $cy - 40)
    $g.DrawLine($motifPen, $cx - 40, $cy + 40, $cx, $cy - 40)
    $motifPen.Dispose()
    
    # Draw Title (Placeholder filename)
    $fontFamily = [System.Drawing.FontFamily]::GenericSansSerif
    $titleFont = New-Object System.Drawing.Font($fontFamily, 13, [System.Drawing.FontStyle]::Bold)
    $subFont = New-Object System.Drawing.Font($fontFamily, 10, [System.Drawing.FontStyle]::Regular)
    
    $creamBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(246, 236, 217)) # #f6ecd9
    $faintGoldBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(180, 200, 147, 43))
    
    $sf = New-Object System.Drawing.StringFormat
    $sf.Alignment = [System.Drawing.StringAlignment]::Center
    $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
    
    # Title badge
    $badgeRect = New-Object System.Drawing.RectangleF($cx - 180, $cy + 75, 360, 34)
    $badgeBg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(170, 28, 11, 10))
    $g.FillRectangle($badgeBg, $badgeRect)
    $badgeBg.Dispose()
    
    $badgePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(120, 200, 147, 43), 1)
    $g.DrawRectangle($badgePen, [int]$badgeRect.X, [int]$badgeRect.Y, [int]$badgeRect.Width, [int]$badgeRect.Height)
    $badgePen.Dispose()
    
    $g.DrawString($Title, $titleFont, $creamBrush, [float]$cx, [float]($cy + 92), $sf)
    $g.DrawString($Subtitle, $subFont, $faintGoldBrush, [float]$cx, [float]($cy + 130), $sf)
    
    $titleFont.Dispose()
    $subFont.Dispose()
    $creamBrush.Dispose()
    $faintGoldBrush.Dispose()
    $sf.Dispose()
    $g.Dispose()
    
    $fullPath = Join-Path $PSScriptRoot $Path
    $dir = Split-Path $fullPath
    if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
    
    $bmp.Save($fullPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bmp.Dispose()
    Write-Host "Created $Path"
}

# Generate images
Create-PlaceholderImage -Path "images/hero1.jpg" -Width 1600 -Height 900 -Title "REPLACE: images/hero1.jpg" -Subtitle "AK Chendamelam - Grand Wedding Performance"
Create-PlaceholderImage -Path "images/hero2.jpg" -Width 1600 -Height 900 -Title "REPLACE: images/hero2.jpg" -Subtitle "AK Chendamelam - Temple Festival Celebration"
Create-PlaceholderImage -Path "images/hero3.jpg" -Width 1600 -Height 900 -Title "REPLACE: images/hero3.jpg" -Subtitle "AK Chendamelam - Grand Procession / Ooravalam"

Create-PlaceholderImage -Path "images/wedding.jpg" -Width 800 -Height 600 -Title "REPLACE: images/wedding.jpg" -Subtitle "Wedding Chendamelam & Naadaswaram"
Create-PlaceholderImage -Path "images/temple.jpg" -Width 800 -Height 600 -Title "REPLACE: images/temple.jpg" -Subtitle "Temple Festival & Thiruvizha Rhythms"
Create-PlaceholderImage -Path "images/procession.jpg" -Width 800 -Height 600 -Title "REPLACE: images/procession.jpg" -Subtitle "Procession / Ooravalam Troupe"
Create-PlaceholderImage -Path "images/welcome.jpg" -Width 800 -Height 600 -Title "REPLACE: images/welcome.jpg" -Subtitle "VIP Welcome & Corporate Inauguration"
Create-PlaceholderImage -Path "images/event_mgmt.jpg" -Width 800 -Height 600 -Title "REPLACE: images/event_mgmt.jpg" -Subtitle "Complete Traditional Event Management"

1..12 | ForEach-Object {
    $num = $_
    $cat = if ($num -le 4) { "Weddings" } elseif ($num -le 8) { "Temple Festivals" } else { "Processions & Welcome" }
    Create-PlaceholderImage -Path "images/gallery$num.jpg" -Width 800 -Height 600 -Title "REPLACE: images/gallery$num.jpg" -Subtitle "AK Chendamelam - $cat"
}

Create-PlaceholderImage -Path "videos/sample1_poster.jpg" -Width 800 -Height 600 -Title "REPLACE: videos/sample1_poster.jpg" -Subtitle "Video 1 Poster - Temple Festival Chendamelam"
Create-PlaceholderImage -Path "videos/sample2_poster.jpg" -Width 800 -Height 600 -Title "REPLACE: videos/sample2_poster.jpg" -Subtitle "Video 2 Poster - Wedding Grand Entry"
