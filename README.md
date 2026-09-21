# Studio Startup Project

An Adobe After Effects startup script that automatically creates a new blank After Effects project with a clean, standardized studio folder structure.

Designed for motion designers, editors, and studios that want every new After Effects project to start organized and ready for production.

**Created by Dane.**

---

## Features

* Automatically creates a new blank After Effects project
* Builds the standard studio folder structure on startup
* Keeps project organization consistent across jobs
* Creates folders only when needed
* Uses a simple, lightweight JSX script
* No manual setup required

---

## Folder Structure

The script creates the following structure:

```text
01_ASSETS
├── Images
├── Video
├── Audio
├── SVG
├── AI
└── 3D_RENDERS

02_COMPS
├── MAIN
├── PRECOMPS
└── FINAL COMPS

03_SOLIDS
```

---

## How It Works

When After Effects launches, the startup script automatically:

1. Creates a new blank After Effects project.
2. Creates the main studio folders.
3. Creates the required asset subfolders.
4. Creates the standard comp folders.
5. Leaves the project ready for production.

The script uses folder checking to prevent duplicate folders from being created.

---

## Installation

### Windows

Copy the `.jsx` file into your After Effects Startup Scripts folder:

```text
C:\Program Files\Adobe\Adobe After Effects <Version>\Support Files\Scripts\Startup\
```

For example:

```text
C:\Program Files\Adobe\Adobe After Effects 2026\Support Files\Scripts\Startup\
```

### macOS

Copy the `.jsx` file into:

```text
/Applications/Adobe After Effects <Version>/Scripts/Startup/
```

For example:

```text
/Applications/Adobe After Effects 2026/Scripts/Startup/
```

Restart After Effects after installing the script.

---

## Usage

Once installed, simply launch After Effects.

The script will automatically create a new blank project with the standard folder structure.

No buttons or panels are required.

---

## Important

This script is designed specifically as a **startup script**.

Because it runs when After Effects launches, it will create a **new blank project each time After Effects starts**.

If you already have an existing project open, the script does not organize or modify that project. It creates a new blank project instead.

---

## Folder Breakdown

### `01_ASSETS`

Contains imported project assets.

```text
Images
Video
Audio
SVG
AI
3D_RENDERS
```

### `02_COMPS`

Contains the project's compositions.

```text
MAIN
PRECOMPS
FINAL COMPS
```

### `03_SOLIDS`

Used for After Effects solid layers.

---

## Requirements

* Adobe After Effects
* JSX scripting support
* Permission to place scripts in the After Effects installation directory

---

## Script

```text
Studio-Startup-Project-v2.jsx
```

---

## Related Script

This startup script is based on the folder structure used by the **File Structure** cleanup/organization script.

The two scripts are designed to use the same studio organization system:

* **Studio Startup Project** — creates the structure for a new project.
* **File Structure** — cleans and organizes an existing/messy project into the standardized structure.

---

## Author

**Created by Dane**

---

## License

Use, modify, and adapt this script for your own After Effects workflow.

If you distribute modified versions, please retain the original author credit.
