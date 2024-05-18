class ColorPickerTool {
    static get isInline() {
        return true;
    }
 
    constructor() {
        this.button = null;
        this.colorPicker = null;
        this.state = false;
    }
 
    render() {
        this.button = document.createElement('button');
        this.button.type = 'button';
        this.button.textContent = 'C';
        this.button.addEventListener('click', () => {
            this.colorPicker.click();
        });
 
        this.colorPicker = document.createElement('input');
        this.colorPicker.type = 'color';
        this.colorPicker.style.display = 'none';
        this.colorPicker.addEventListener('change', () => {
            document.execCommand('foreColor', false, this.colorPicker.value);
        });
 
        return this.button;
    }
 
    surround(range) {
        const selectedText = range.extractContents();
        const span = document.createElement('span');
        span.style.color = this.colorPicker.value;
        span.appendChild(selectedText);
        range.insertNode(span);
    }
 
    checkState() {
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0) {
            this.state = false;
            return;
        }
 
        const range = selection.getRangeAt(0);
        const ancestor = range.commonAncestorContainer;
        this.state = ancestor instanceof Element && ancestor.style.color !== '';
    }
 }
 
 // Register the block
 window.ColorPickerTool = ColorPickerTool;
 