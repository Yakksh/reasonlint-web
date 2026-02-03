#!/bin/bash
# ReasonLint Installer for macOS and Linux
# Usage: curl -fsSL https://reasonlint.com/install.sh | bash

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

BASE_URL="https://reasonlint.com/releases"
INSTALL_DIR="/usr/local/bin"
BINARY_NAME="reasonlint"

echo ""
echo -e "${BLUE}📦 ReasonLint Installer${NC}"
echo -e "${BLUE}========================${NC}"
echo ""

# Get latest version
echo -e "   Fetching latest version..."
VERSION=$(curl -fsSL "${BASE_URL}/latest.json" 2>/dev/null | grep -o '"version": *"[^"]*"' | cut -d'"' -f4)

if [ -z "$VERSION" ]; then
    echo -e "${RED}❌ Failed to fetch latest version${NC}"
    echo "   Please check your internet connection or try again later."
    exit 1
fi

echo -e "   Version: ${GREEN}${VERSION}${NC}"

# Detect OS
OS=$(uname -s | tr '[:upper:]' '[:lower:]')
case "$OS" in
    darwin)
        OS="darwin"
        OS_NAME="macOS"
        ;;
    linux)
        OS="linux"
        OS_NAME="Linux"
        ;;
    mingw*|msys*|cygwin*)
        echo -e "${RED}❌ Windows detected${NC}"
        echo "   Please use the PowerShell installer instead:"
        echo ""
        echo -e "   ${BLUE}irm https://reasonlint.com/install.ps1 | iex${NC}"
        echo ""
        exit 1
        ;;
    *)
        echo -e "${RED}❌ Unsupported operating system: $OS${NC}"
        exit 1
        ;;
esac

# Detect architecture
ARCH=$(uname -m)
case "$ARCH" in
    x86_64|amd64)
        ARCH="amd64"
        ARCH_NAME="Intel/AMD 64-bit"
        ;;
    aarch64|arm64)
        ARCH="arm64"
        ARCH_NAME="ARM 64-bit"
        ;;
    *)
        echo -e "${RED}❌ Unsupported architecture: $ARCH${NC}"
        exit 1
        ;;
esac

echo -e "   Platform: ${GREEN}${OS_NAME} (${ARCH_NAME})${NC}"

# Download URL
BINARY_FILE="${BINARY_NAME}-${OS}-${ARCH}"
DOWNLOAD_URL="${BASE_URL}/${VERSION}/${BINARY_FILE}"

echo -e "   Downloading: ${BLUE}${DOWNLOAD_URL}${NC}"

# Create temp file
TMP_FILE=$(mktemp)
trap "rm -f $TMP_FILE" EXIT

# Download binary
if ! curl -fsSL "$DOWNLOAD_URL" -o "$TMP_FILE"; then
    echo -e "${RED}❌ Download failed${NC}"
    echo "   Please check if the release exists at:"
    echo "   ${DOWNLOAD_URL}"
    exit 1
fi

# Make executable
chmod +x "$TMP_FILE"

# Install binary
echo ""
if [ -w "$INSTALL_DIR" ]; then
    mv "$TMP_FILE" "${INSTALL_DIR}/${BINARY_NAME}"
else
    echo -e "   ${YELLOW}Installing to ${INSTALL_DIR} (requires sudo)${NC}"
    sudo mv "$TMP_FILE" "${INSTALL_DIR}/${BINARY_NAME}"
    sudo chmod +x "${INSTALL_DIR}/${BINARY_NAME}"
fi

# Verify installation
echo ""
if command -v $BINARY_NAME &> /dev/null; then
    echo -e "${GREEN}✅ ReasonLint installed successfully!${NC}"
    echo ""
    echo -e "   Location: ${BLUE}${INSTALL_DIR}/${BINARY_NAME}${NC}"
    echo ""

    # Show version
    echo "   Version info:"
    $BINARY_NAME --version 2>/dev/null || echo "   (version command not available)"
    echo ""

    echo -e "   Get started: ${BLUE}reasonlint --help${NC}"
    echo ""
else
    echo -e "${YELLOW}⚠️  Installation completed, but 'reasonlint' not found in PATH${NC}"
    echo ""
    echo "   You may need to add ${INSTALL_DIR} to your PATH:"
    echo ""
    echo -e "   ${BLUE}export PATH=\"\$PATH:${INSTALL_DIR}\"${NC}"
    echo ""
fi
