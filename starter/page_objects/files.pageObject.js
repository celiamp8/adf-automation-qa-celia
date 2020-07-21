export default class Files {
    constructor() {
        this.createFolderIcon = element(by.css('button[data-automation-id="create-new-folder"]'));
        this.folderNameInput = element(by.id('adf-folder-name-input'));
        this.createFolderButton = element(by.id('adf-folder-create-button'));
        this.cancelFolderButton = element(by.id('adf-folder-cancel-button'));
        this.optionsIcon = element(by.css('div>button[title="Content actions"]'));
        this.deleteOptionButton = element(by.css('button[data-automation-id="DOCUMENT_LIST.ACTIONS.FOLDER.DELETE"]'));
        this.duplicateFolderError = element(by.cssContainingText('simple-snack-bar>span', 'There\'s already a folder with this name. Try a different name.'));
    }

    createNewFolder(folderName) {
        this.createFolderIcon.click();
        this.folderNameInput.sendKeys(folderName);
        this.createFolderButton.click();
    }

    cancelFolderCreation() {
        this.cancelFolderButton.click();
    }

    getNewFolderRow(folderName) {
        return $('adf-datatable-row[aria-label="' + folderName + '"]');
    }

    getDuplicateError() {
        return this.duplicateFolderError;
    }

    deleteFolder(folderName) {
        $('adf-datatable-row[aria-label="' + folderName + '"]>div>button[title="Content actions"]').click();
        this.deleteOptionButton.click();
    }

    getDeleteSuccessMessage(folderName) {
        return element(by.cssContainingText('simple-snack-bar>span', folderName + ' deleted'));
    }
}