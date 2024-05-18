class VerticalTextTool {
    constructor({ data, api }) {
        this.api = api;
        this.data = data;
        this.CSS = {
            wrapper: 'vertical-text',
            text: 'vertical-text__text',
        };
    }

    static get toolbox() {
        return {
            title: 'Vertical Text',
            icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M0 0h24v24H0V0zm2 2v20h20V2H2zm10 4c-1.104 0-2 .896-2 2v10c0 1.104.896 2 2 2s2-.896 2-2V8c0-1.104-.896-2-2-2z"/></svg>',
        };
    }

    render() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add(this.CSS.wrapper);
        this.text = document.createElement('div');
        this.text.classList.add(this.CSS.text);
        this.text.contentEditable = true;
        this.text.textContent = this.data.text || '';

        this.wrapper.appendChild(this.text);

        return this.wrapper;
    }

    save(blockContent) {
        return {
            text: blockContent.querySelector(`.${this.CSS.text}`).textContent,
        };
    }

    validate(savedData) {
        if (!savedData.text.trim()) {
            return false;
        }

        return true;
    }
}

