import './LoadingScreen.css'

class LoadingScreen {
    constructor() {
        this.progress = 0;
        this.text = "";

        this.loading_screen_root = document.createElement('div');
        this.loading_screen_root.id = 'loading_screen_root';

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

        this.loading_screen_root.appendChild(this.loading_screen_text);
        this.loading_screen_root.appendChild(this.loading_screen_progress);
        this.loading_screen_root.appendChild(loading_bar_container);

        this.bar_width = 500;//loading_bar_container.style.width;
        console.log(this.bar_width);

        
    }

    initialize() {
        this.progress = 0;
        this.text = "";
    }

    show_screen() {
        document.getElementsByTagName('body')[0].appendChild(this.loading_screen_root);
    }

    hide_screen() {
        const el = document.getElementById('loading_screen_root');
        if (el) {
            document.getElementsByTagName('body')[0].removeChild(el);
        }
    }

    set_progress(new_progress) {
        const prev_progress = this.progress;
        this.loading_bar.style.width = `${new_progress/100 * this.bar_width}px`
        // console.log(new_progress/100 * this.bar_width);
        for (let i = prev_progress; i <= new_progress; i++) {
            this.loading_screen_progress.innerHTML = i;
        }
        this.progress = new_progress;
    }
    
    set_text(new_text) {
        this.text = new_text;
        this.loading_screen_text.innerHTML = this.text;
    }
}

export default LoadingScreen;