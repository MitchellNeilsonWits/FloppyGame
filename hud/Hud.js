import './Hud.css'



// const loaded = document.getElementById("hud-loaded-img");
// const holding = document.getElementById("hud-holding-img");
// const load_indicator = document.getElementById("hud-holding-load");
// const drop_indicator = document.getElementById("hud-holding-drop");
// const unload_indicator = document.getElementById("hud-loaded-unload");
// const loaded_header_disk = document.getElementById("hud-loaded-header-disk");
// const holding_header_disk = document.getElementById("hud-holding-header-disk");

class HUD {
    constructor() {
        this.loaded_disk = null;
        this.holding_disk = null;
        this.loaded = null;
        this.holding = null;
        this.load_indicator = null;
        this.drop_indicator = null;
        this.unload_indicator = null;
        this.loaded_header_disk = null;
        this.holding_header_disk = null;
        this.hud_root = null;
    }

    create_hud() {
        // Root div
        const hudRoot = document.createElement('div');
        hudRoot.id = 'hud-root';

        // Top HUD
        const hudTop = document.createElement('div');
        hudTop.className = 'hud-top';

        const hudLevelName = document.createElement('div');
        hudLevelName.className = 'hud-level-name';

        const hudLevelNameHeader = document.createElement('h1');
        hudLevelNameHeader.className = 'hud-level-name-header';
        hudLevelNameHeader.textContent = 'Current Level';

        const hudLevelNameSubheaderContainer = document.createElement('div');
        hudLevelNameSubheaderContainer.className = 'hud-level-name-subheader-container';

        const hudLevelNameBar1 = document.createElement('div');
        hudLevelNameBar1.className = 'hud-level-name-bar';

        const hudLevelNameSubheader = document.createElement('h2');
        hudLevelNameSubheader.className = 'hud-level-name-subheader';
        hudLevelNameSubheader.textContent = 'Tutorial';

        const hudLevelNameBar2 = document.createElement('div');
        hudLevelNameBar2.className = 'hud-level-name-bar';

        // Append elements in the top section
        hudLevelNameSubheaderContainer.append(hudLevelNameBar1, hudLevelNameSubheader, hudLevelNameBar2);
        hudLevelName.append(hudLevelNameHeader, hudLevelNameSubheaderContainer);
        hudTop.append(hudLevelName);

        // Bottom HUD
        const hudBottom = document.createElement('div');
        hudBottom.className = 'hud-bottom';

        // Loaded container
        const hudLoadedContainer = document.createElement('div');
        hudLoadedContainer.className = 'hud-loaded-container';

        const hudLoadedIndicators = document.createElement('div');
        hudLoadedIndicators.className = 'hud-loaded-indicators';

        const hudLoadedUnload = document.createElement('div');
        hudLoadedUnload.id = 'hud-loaded-unload';
        hudLoadedUnload.textContent = 'Press Z to unload';

        const hudLoadedHeader = document.createElement('div');
        hudLoadedHeader.id = 'hud-loaded-header';

        const hudLoadedHeaderHeading = document.createElement('h2');
        hudLoadedHeaderHeading.id = 'hud-loaded-header-heading';
        hudLoadedHeaderHeading.textContent = 'currently loaded';

        const hudLoadedHeaderDisk = document.createElement('h2');
        hudLoadedHeaderDisk.id = 'hud-loaded-header-disk';
        hudLoadedHeaderDisk.textContent = 'none';

        hudLoadedHeader.append(hudLoadedHeaderHeading, hudLoadedHeaderDisk);
        hudLoadedIndicators.append(hudLoadedUnload, hudLoadedHeader);

        const hudLoadedSubcontainer = document.createElement('div');
        hudLoadedSubcontainer.className = 'hud-loaded-subcontainer';

        const hudLoadedImg = document.createElement('img');
        hudLoadedImg.id = 'hud-loaded-img';
        hudLoadedImg.src = 'hud/disk_none.png';

        hudLoadedSubcontainer.append(hudLoadedImg);
        hudLoadedContainer.append(hudLoadedIndicators, hudLoadedSubcontainer);

        // Holding container
        const hudHoldingContainer = document.createElement('div');
        hudHoldingContainer.className = 'hud-holding-container';

        const hudHoldingIndicators = document.createElement('div');
        hudHoldingIndicators.className = 'hud-holding-indicators';

        const hudHoldingLoad = document.createElement('div');
        hudHoldingLoad.id = 'hud-holding-load';
        hudHoldingLoad.textContent = 'Press Q to load disk';

        const hudHoldingDrop = document.createElement('div');
        hudHoldingDrop.id = 'hud-holding-drop';
        hudHoldingDrop.textContent = 'Press F to drop disk';

        const hudHoldingHeader = document.createElement('div');
        hudHoldingHeader.id = 'hud-holding-header';

        const hudHoldingHeaderHeading = document.createElement('h2');
        hudHoldingHeaderHeading.id = 'hud-holding-header-heading';
        hudHoldingHeaderHeading.textContent = 'currently holding';

        const hudHoldingHeaderDisk = document.createElement('h2');
        hudHoldingHeaderDisk.id = 'hud-holding-header-disk';
        hudHoldingHeaderDisk.textContent = 'none';

        hudHoldingHeader.append(hudHoldingHeaderHeading, hudHoldingHeaderDisk);
        hudHoldingIndicators.append(hudHoldingLoad, hudHoldingDrop, hudHoldingHeader);

        const hudHoldingSubcontainer = document.createElement('div');
        hudHoldingSubcontainer.className = 'hud-holding-subcontainer';

        const hudHoldingImg = document.createElement('img');
        hudHoldingImg.id = 'hud-holding-img';
        hudHoldingImg.src = 'hud/disk_none.png';

        hudHoldingSubcontainer.append(hudHoldingImg);
        hudHoldingContainer.append(hudHoldingIndicators, hudHoldingSubcontainer);

        // Append loaded and holding containers to bottom HUD
        hudBottom.append(hudLoadedContainer, hudHoldingContainer);

        // Append top and bottom HUD to the root
        hudRoot.append(hudTop, hudBottom);

        // Append the entire HUD to the document body (or any other container)
        document.body.append(hudRoot);


        this.hud_root = hudRoot;
        this.loaded = hudLoadedImg;
        this.holding = hudHoldingImg;
        this.load_indicator = hudHoldingLoad;
        this.drop_indicator = hudHoldingDrop;
        this.unload_indicator = hudLoadedUnload;
        this.loaded_header_disk = hudLoadedHeaderDisk;
        this.holding_header_disk = hudHoldingHeaderDisk;
    }

    update_holding_disk(new_disk) {
        this.holding_disk = new_disk;
        this.update()
    }

    update_loaded_disk(new_disk) {
        this.loaded_disk = new_disk;
        this.update();
    }

    update() {
        console.log(this);
        if (!this.loaded_disk) {
            this.loaded.src = 'hud/disk_none.png'
            this.loaded.style.opacity = 0.2;
            this.loaded_header_disk.innerHTML = "none";
            this.unload_indicator.style.transform = "translateX(-140px)";
            this.loaded_header_disk.style.color = "lightgray";
        } else {
            this.loaded.style.opacity = 1
            this.unload_indicator.style.transform = "translateX(0)";
            if (this.loaded_disk === "strength") {
                this.loaded.src = 'hud/disk_strength.png'
                this.loaded_header_disk.innerHTML = "strength";
                this.loaded_header_disk.style.color = "rgb(255,30,86)";
            } else if (this.loaded_disk === "flight") {
                this.loaded.src = 'hud/disk_flight.png'
                this.loaded_header_disk.innerHTML = "flight";
                this.loaded_header_disk.style.color = "rgb(50,211,139)";
            } else if (this.loaded_disk === "shrink") {
                this.loaded.src = 'hud/disk_shrink.png';
                this.loaded_header_disk.innerHTML = "shrink";
                this.loaded_header_disk.style.color = "rgb(229,0,255)";
            }
        }

        if (!this.holding_disk) {
            this.holding.src = 'hud/disk_none.png'
            this.holding.style.opacity = 0.2
            this.holding_header_disk.innerHTML = "none";
            this.load_indicator.style.transform = "translateX(140px)";
            this.drop_indicator.style.transform = "translateX(140px)";
            this.holding_header_disk.style.color = "gray";

        } else {
            this.holding.style.opacity = 1;
            this.load_indicator.style.transform = "translateX(0)";
            this.drop_indicator.style.transform = "translateX(0)";


            if (this.holding_disk === "strength") {
                this.holding.src = 'hud/disk_strength.png';
                this.holding_header_disk.innerHTML = "strength";
                this.holding_header_disk.style.color = "rgb(255,30,86)";
                
            } else if (this.holding_disk === "flight") {
                this.holding.src = 'hud/disk_flight.png';
                this.holding_header_disk.innerHTML = "flight";
                this.holding_header_disk.style.color = "rgb(50,211,139)";

            } else if (this.holding_disk === "shrink") {
                this.holding.src = 'hud/disk_shrink.png';
                this.holding_header_disk.innerHTML = "shrink";
                this.holding_header_disk.style.color = "rgb(229,0,255)";

            }

        }
    }

    remove_hud() {
        if (document.getElementById('hud-root')) {
            document.body.removeChild(this.hud_root);
        }
    }

    add_hud() {
        if (!document.getElementById('hud-root')) {
            document.body.appendChild(this.hud_root);
        }
    }

    reset_hud() {
        if (document.getElementById('hud-root')) {
            document.body.removeChild(this.hud_root);
        }
        document.body.appendChild(this.hud_root);
    }
}

const hud = new HUD();

export default hud;

