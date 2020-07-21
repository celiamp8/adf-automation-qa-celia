
import Settings from '../page_objects/settings.pageObject';
import Login from '../page_objects/login.pageObject';
import Files from '../page_objects/files.pageObject';

describe('ADF Demo App', () => {
  const settings = new Settings();
  const login = new Login();
  const files = new Files();

  const FOLDER_NAME = 'celiamp8';

  beforeAll(() => {
    // Prerequisite: Change Provider to ECM
    browser.get('http://qaexercise.envalfresco.com/settings');
    settings.selectProvider('ECM');

    // Prerequisite: Log in as guest user
    expect(browser.getCurrentUrl()).toEqual('http://qaexercise.envalfresco.com/login');
    login.loginAsUser('guest@example.com', 'Password');
    expect(browser.getCurrentUrl()).toEqual('http://qaexercise.envalfresco.com/home');

    // Prerequisite: Navigate to the files page once logged in
    browser.get('http://qaexercise.envalfresco.com/files');
  });

  it('creates a new folder with name "celiamp8"', () => {
    files.createNewFolder(FOLDER_NAME);
    expect(files.getNewFolderRow(FOLDER_NAME).isPresent()).toBe(true);
  });

  it('fails when creating a folder with a duplicate name', () => {
    files.createNewFolder(FOLDER_NAME);
    expect(files.getDuplicateError().isPresent()).toBe(true);
    files.cancelFolderCreation();
    expect(files.getNewFolderRow(FOLDER_NAME).isPresent()).toBe(true);
  });

  it('deletes the folder with name "celiamp8"', async () => {
    files.deleteFolder(FOLDER_NAME);
    await expect(files.getDeleteSuccessMessage(FOLDER_NAME).isPresent()).toBe(true);
    expect(files.getNewFolderRow(FOLDER_NAME).isPresent()).toBe(false);
  });

});