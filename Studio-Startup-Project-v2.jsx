// ======================
// Studio Startup Project
// ======================
// Creates a new blank After Effects project
// with the standard Studio Basic folder structure.
//
// Based on FileStructure v1.10.1

(function () {

    // Make sure we are running inside After Effects.
    if (typeof app === "undefined") {
        return;
    }

    // Create a completely new blank project.
    app.newProject();

    var proj = app.project;

    if (!proj) {
        alert("Could not create a new After Effects project.");
        return;
    }

    app.beginUndoGroup("Create Studio Project Structure");

    // ======================
    // FOLDER HELPERS
    // ======================

    function findFolder(name, parent) {
        for (var i = 1; i <= proj.numItems; i++) {
            var item = proj.item(i);

            if (
                item instanceof FolderItem &&
                item.name === name
            ) {
                if (
                    (parent && item.parentFolder === parent) ||
                    (!parent && item.parentFolder === proj.rootFolder)
                ) {
                    return item;
                }
            }
        }

        return null;
    }

    function getOrCreateFolder(name, parent) {
        var folder = findFolder(name, parent);

        if (!folder) {
            folder = proj.items.addFolder(name);

            if (parent) {
                folder.parentFolder = parent;
            }
        }

        return folder;
    }

    // ======================
    // STANDARD FOLDER STRUCTURE
    // ======================

    var assets = getOrCreateFolder("01_ASSETS");
    var comps = getOrCreateFolder("02_COMPS");
    getOrCreateFolder("03_SOLIDS");

    // Assets
    getOrCreateFolder("Images", assets);
    getOrCreateFolder("Video", assets);
    getOrCreateFolder("Audio", assets);
    getOrCreateFolder("SVG", assets);
    getOrCreateFolder("AI", assets);
    getOrCreateFolder("3D_RENDERS", assets);

    // Comps
    getOrCreateFolder("MAIN", comps);
    getOrCreateFolder("PRECOMPS", comps);
    getOrCreateFolder("FINAL COMPS", comps);

    app.endUndoGroup();

})();
