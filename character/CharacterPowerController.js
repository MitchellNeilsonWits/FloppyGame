class CharacterPowerController {
    constructor() {
        this.loaded_disk = null;
        this.power = "none";
    }

    set_loaded_disk(disk) {
        this.loaded_disk = disk;
        this.power = disk.power;
    }

    get_loaded_disk() {
        return this.loaded_disk;
    }

    clear_loaded_disk() {
        this.loaded_disk = null;
        this.power = "none";
    }
}

export default CharacterPowerController;