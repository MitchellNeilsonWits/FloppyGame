import './Credits.css'

class Credits {
    constructor() {
        // Root div
        const creditsRoot = document.createElement('div');
        creditsRoot.id = 'credits-root';

        // Credits header
        const creditsHeader = document.createElement('h2');
        creditsHeader.className = 'credits-header';
        creditsHeader.textContent = 'FLOPPY';

        // Group Members section
        const creditsMembers = document.createElement('ul');
        creditsMembers.className = 'credits-members';

        const creditsMembersHeader = document.createElement('li');
        creditsMembersHeader.className = 'credits-members-header';
        creditsMembersHeader.textContent = 'Group Members';

        // Group members list items
        const members = [
            'Mitchell Neilson (2585497)',
            'Anand Patel (2561034)',
            'Luke Renton (2540440)',
            'Martin Shilenge (2557606)'
        ];

        members.forEach(member => {
            const memberItem = document.createElement('li');
            memberItem.className = 'credits-members-item';
            memberItem.textContent = member;
            creditsMembers.append(memberItem);
        });

        // Append header to members section
        creditsMembers.insertBefore(creditsMembersHeader, creditsMembers.firstChild);

        // CC and Attributions section
        const creditsCC = document.createElement('ul');
        creditsCC.className = 'credits-cc';

        const creditsCCHeader = document.createElement('li');
        creditsCCHeader.className = 'credits-cc-header';
        creditsCCHeader.textContent = 'CC and Attributions';

        const ccItems = [
            'Models: Sketchfab (various creators)',
            'Icons: SVGRepo'
        ];

        ccItems.forEach(ccItem => {
            const ccListItem = document.createElement('li');
            ccListItem.className = 'credits-cc-item';
            ccListItem.textContent = ccItem;
            creditsCC.append(ccListItem);
        });

        // Append header to CC section
        creditsCC.insertBefore(creditsCCHeader, creditsCC.firstChild);

        // Append all sections to the root
        creditsRoot.append(creditsHeader, creditsMembers, creditsCC);

        this.root = creditsRoot;

        // Append the root element to the body
        // document.body.append(pmlDisplayRoot);
    }

    show_credits() {
        if (!document.getElementById('pml-display-root')) {
            document.body.appendChild(this.root);
        }
    }

    hide_credits() {
        if (document.getElementById('pml-display-root')) {
            document.body.removeChild(this.root);
        }
    }

    
}

const credits = new Credits();
export default credits;