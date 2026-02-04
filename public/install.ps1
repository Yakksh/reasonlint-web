# ReasonLint Installer for Windows
# Usage: irm <BASE_URL>/install.ps1 | iex

$ErrorActionPreference = "Stop"

# Base URL - can be overridden with REASONLINT_BASE_URL environment variable
$BaseUrl = if ($env:REASONLINT_BASE_URL) { "$env:REASONLINT_BASE_URL/releases" } else { "https://yakksh.github.io/reasonlint-web/releases" }
$InstallDir = "$env:LOCALAPPDATA\Programs\reasonlint"
$BinaryName = "reasonlint"

Write-Host ""
Write-Host "📦 ReasonLint Installer" -ForegroundColor Blue
Write-Host "========================" -ForegroundColor Blue
Write-Host ""

# Get latest version
Write-Host "   Fetching latest version..."
try {
    $LatestJson = Invoke-RestMethod -Uri "$BaseUrl/latest.json" -UseBasicParsing
    $Version = $LatestJson.version
    Write-Host "   Version: $Version" -ForegroundColor Green
} catch {
    Write-Host "❌ Failed to fetch latest version" -ForegroundColor Red
    Write-Host "   Please check your internet connection or try again later."
    exit 1
}

# Detect architecture
if (-not [Environment]::Is64BitOperatingSystem) {
    Write-Host "❌ 32-bit Windows is not supported" -ForegroundColor Red
    exit 1
}

$Arch = if ($env:PROCESSOR_ARCHITECTURE -eq "ARM64") {
    "arm64"
} else {
    "amd64"
}

$ArchName = if ($Arch -eq "arm64") { "ARM 64-bit" } else { "Intel/AMD 64-bit" }
Write-Host "   Platform: Windows ($ArchName)" -ForegroundColor Green

# Download URL
$BinaryFile = "$BinaryName-windows-$Arch.exe"
$DownloadUrl = "$BaseUrl/$Version/$BinaryFile"
$DestPath = "$InstallDir\$BinaryName.exe"

Write-Host "   Downloading: $DownloadUrl" -ForegroundColor Blue

# Create install directory
if (-not (Test-Path $InstallDir)) {
    New-Item -ItemType Directory -Force -Path $InstallDir | Out-Null
}

# Download binary
try {
    $ProgressPreference = 'SilentlyContinue'  # Speed up download
    Invoke-WebRequest -Uri $DownloadUrl -OutFile $DestPath -UseBasicParsing
    $ProgressPreference = 'Continue'
} catch {
    Write-Host "❌ Download failed: $_" -ForegroundColor Red
    Write-Host "   Please check if the release exists at:"
    Write-Host "   $DownloadUrl"
    exit 1
}

Write-Host ""

# Add to PATH if not already present
$UserPath = [Environment]::GetEnvironmentVariable("PATH", "User")
if ($UserPath -notlike "*$InstallDir*") {
    Write-Host "   Adding to PATH..." -ForegroundColor Yellow
    [Environment]::SetEnvironmentVariable("PATH", "$UserPath;$InstallDir", "User")
    # Also update current session
    $env:PATH = "$env:PATH;$InstallDir"
}

Write-Host ""
Write-Host "✅ ReasonLint installed successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "   Location: $DestPath" -ForegroundColor Gray
Write-Host ""

# Try to show version
try {
    Write-Host "   Version info:"
    & $DestPath --version 2>$null
    Write-Host ""
} catch {
    # Ignore if version command fails
}

Write-Host "   ⚠️  Please restart your terminal for PATH changes to take effect." -ForegroundColor Yellow
Write-Host ""
Write-Host "   Get started: reasonlint --help" -ForegroundColor Blue
Write-Host ""
