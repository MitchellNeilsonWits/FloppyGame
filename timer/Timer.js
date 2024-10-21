import './Timer.css'

class Timer {
    constructor() {

        // Root div
        const pmlDisplayRoot = document.createElement('div');
        pmlDisplayRoot.id = 'pml-display-root';

        // Blank div
        const blankDiv = document.createElement('div');
        blankDiv.className = 'blank-div';
        
        // Timer root
        const timerRoot = document.createElement('div');
        timerRoot.id = 'timer-root';

        // Timer top section
        const timerTop = document.createElement('div');
        timerTop.className = 'timer-top';

        const timerTimeLeftHeader = document.createElement('h2');
        timerTimeLeftHeader.className = 'timer-time-left-header';
        timerTimeLeftHeader.textContent = 'Time left:';

        const timerTimeLeft = document.createElement('h2');
        timerTimeLeft.id = 'timer-time-left';
        timerTimeLeft.textContent = '10:00';

        // Append timer header and time left to top section
        timerTop.append(timerTimeLeftHeader, timerTimeLeft);

        // Timer bottom section
        const timerBottom = document.createElement('div');
        timerBottom.className = 'timer-bottom';

        const timerIconContainer = document.createElement('div');
        timerIconContainer.className = 'timer-icon-container';

        const timerIcon = document.createElement('img');
        timerIcon.className = 'timer-icon';
        timerIcon.src = 'timer/timer.svg';

        // Append icon to icon container
        timerIconContainer.append(timerIcon);

        const timerBarContainer = document.createElement('div');
        timerBarContainer.className = 'timer-bar-container';

        const timerBar = document.createElement('div');
        timerBar.id = 'timer-bar';

        // Append timer bar to the bar container
        timerBarContainer.append(timerBar);

        // Append icon container and bar container to bottom section
        timerBottom.append(timerIconContainer, timerBarContainer);

        // Append top and bottom sections to timer root
        timerRoot.append(timerTop, timerBottom);

        // PML active root
        const pmlActiveRoot = document.createElement('div');
        pmlActiveRoot.className = 'pml-active-root';

        const pmlActiveHeader = document.createElement('h2');
        pmlActiveHeader.className = 'pml-active-header';
        pmlActiveHeader.textContent = 'Active Platform';

        const pmlActivePlatform = document.createElement('h3');
        pmlActivePlatform.className = 'pml-active-platform';
        pmlActivePlatform.textContent = 'Shrink';

        const pmlActiveNext = document.createElement('div');
        pmlActiveNext.className = 'pml-active-next';

        const pmlActiveNextHeader = document.createElement('h4');
        pmlActiveNextHeader.className = 'pml-active-next-header';
        pmlActiveNextHeader.textContent = 'Up next:';

        const pmlActiveNextPlatform = document.createElement('h4');
        pmlActiveNextPlatform.className = 'pml-active-next-platform';
        pmlActiveNextPlatform.textContent = 'Flight';

        // Append next platform elements
        pmlActiveNext.append(pmlActiveNextHeader, pmlActiveNextPlatform);

        // Append header, platform, and next section to active root
        pmlActiveRoot.append(pmlActiveHeader, pmlActivePlatform, pmlActiveNext);

        // Append all sections to the root
        pmlDisplayRoot.append(blankDiv, timerRoot, pmlActiveRoot);


        this.root = pmlDisplayRoot;
        this.time = timerTimeLeft;
        this.bar = timerBar;
        this.active = pmlActivePlatform;
        this.next = pmlActiveNextPlatform;


        this.max_time = 20;
        this.max_width = 300;
    }

    show_timer() {
        if (!document.getElementById('timer-root')) {
            document.body.appendChild(this.root);
        }
    }

    hide_timer() {
        if (document.getElementById('timer-root')) {
            document.body.removeChild(this.root);
        }
    }

    update_time(time_left) {
        this.time.innerText = time_left;
        this.bar.style.width = `${((time_left)/this.max_time)*this.max_width}px`
    }

    change_active_platform(new_platform, next_platform) {
        this.next.innerHTML = next_platform;
        
        console.log("CHANGE TO ",new_platform, next_platform);

        if (new_platform === "strength") {
            this.active.innerHTML = "Strength";
            this.active.style.color = "rgb(255,30,86)";
        } else if (new_platform === "flight") {
            this.active.innerHTML = "Flight";
            this.active.style.color = "rgb(50,211,139)";
        } else if (new_platform === "shrink") {
            this.active.innerHTML = "Shrink";
            this.active.style.color = "rgb(229,0,255)";
        }

        if (next_platform === "strength") {
            this.next.innerHTML = "Strength";
            this.next.style.color = "rgb(255,30,86)";
        } else if (next_platform === "flight") {
            this.next.innerHTML = "Flight";
            this.next.style.color = "rgb(50,211,139)";
        } else if (next_platform === "shrink") {
            this.next.innerHTML = "Shrink";
            this.next.style.color = "rgb(229,0,255)";
        } else if (next_platform === "none") {
            this.next.innerHTML = "None";
            this.next.style.color = "#808080";
        }
    }

}

const timer = new Timer();

export default timer;