---
section: install
title: "Install in one line."
subtitle: "Linux, x86_64 or arm64."
methods:
  - id: script
    label: "Script"
    command: "curl -fsSL https://raw.githubusercontent.com/Ibnu-Afdel/dbWiz/main/install.sh | sh"
    note: "Picks the binary for your CPU, checks its SHA-256, and installs to `~/.local/bin` without sudo."
    link: { label: "Read the script", href: "https://github.com/Ibnu-Afdel/dbWiz/blob/main/install.sh" }
  - id: omarchy
    label: "Omarchy"
    command: "omarchy pkg aur add dbwiz-bin"
    note: "From the AUR, with shell completions."
  - id: aur
    label: "Arch"
    command: "yay -S dbwiz-bin"
    note: "Any AUR helper works. Includes bash, zsh, and fish completions."
    link: { label: "AUR page", href: "https://aur.archlinux.org/packages/dbwiz-bin" }
  - id: go
    label: "Go"
    command: "go install github.com/Ibnu-Afdel/dbwiz@latest"
    note: "Builds from source with Go 1.25 or newer."
  - id: binary
    label: "Binary"
    command: ""
    note: "Download `dbwiz-linux-amd64` or `dbwiz-linux-arm64` from the latest release, make it executable, and put it on your `PATH`."
    link: { label: "Latest release", href: "https://github.com/Ibnu-Afdel/dbWiz/releases/latest" }
requirements: "Container databases need the `docker` CLI. SQLite files and host/port connections need nothing else."
---
