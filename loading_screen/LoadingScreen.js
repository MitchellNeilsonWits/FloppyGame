/**
 * File: LoadingScreen.js
 * 
 * Description:
 *  Handles showing of loading screen
 */

import './LoadingScreen.css'

class LoadingScreen {
    constructor() {
        this.progress = 0;
        this.text = "";

        this.loading_screen_root = document.createElement('div');
        this.loading_screen_root.id = 'loading_screen_root';

        var floppy_img = document.createElement('img');
        floppy_img.className = 'loading_screen_img';
        floppy_img.src = 'loading_screen/floppy_image.png';

        this.loading_screen_root.appendChild(floppy_img);

        this.loading_screen_text = document.createElement('h1');
        this.loading_screen_text.className = 'loading_screen_text';
        this.loading_screen_text.innerHTML = this.text;

        var loading_bar_container = document.createElement('div');
        loading_bar_container.className = 'loading_bar_container';
        
        this.loading_bar = document.createElement('div');
        this.loading_bar.id = 'loading_bar';
        this.loading_bar.style.width = 0;
        loading_bar_container.appendChild(this.loading_bar);
        
        this.loading_screen_progress = document.createElement('h2');
        this.loading_screen_progress.className = 'loading_screen_progress';
        this.loading_screen_progress.innerHTML = this.progress;
        
        var sub_text = document.createElement('h2');
        sub_text.className = 'loading_screen_sub_text';
        sub_text.innerHTML = "(Please note, this may take a while - our models are complex)";

        this.loading_screen_root.appendChild(this.loading_screen_text);
        this.loading_screen_root.appendChild(this.loading_screen_progress);
        this.loading_screen_root.appendChild(loading_bar_container);
        this.loading_screen_root.appendChild(sub_text);

        this.bar_width = 500;//loading_bar_container.style.width;
        // console.log(this.bar_width);

        this.is_shown = false;

        
    }

    // Function to setup base variables
    initialize() {
        this.progress = 0;
        this.text = "";
    }

    // Function to show the loading screen
    show_screen() {
        this.is_shown = true;
        document.getElementsByTagName('body')[0].appendChild(this.loading_screen_root);
    }

    // Function to hide the loading screen
    hide_screen() {
        this.is_shown = false;
        const el = document.getElementById('loading_screen_root');
        if (el) {
            document.getElementsByTagName('body')[0].removeChild(el);
        }
    }

    // Function to manually set the progress
    set_progress(new_progress) {
        const prev_progress = this.progress;
        this.loading_bar.style.width = `${new_progress/100 * this.bar_width}px`
        for (let i = prev_progress; i <= new_progress; i++) {
            this.loading_screen_progress.innerHTML = i;
        }
        this.progress = new_progress;
    }
    
    // Function to manually set the text of the loading screen
    set_text(new_text) {
        this.text = new_text;
        this.loading_screen_text.innerHTML = this.text;
    }
}
const loading_screen = new LoadingScreen();

export default loading_screen;