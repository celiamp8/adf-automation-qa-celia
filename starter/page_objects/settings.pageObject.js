export default class Settings {
    constructor() {
        this.providerSelector = element(by.id('adf-provider-selector'));
        this.applyButton = element(by.css('button[type="submit"'));
    }

    selectProvider(provider) {
        this.providerSelector.click();
        element.all(by.cssContainingText('span.mat-option-text', provider)).click();
        this.applyButton.click();
    }
}