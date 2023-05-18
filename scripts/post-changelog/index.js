const os = require('os');
const path = require('path');
const { exec, spawn } = require('child_process');
const dotenv = require('dotenv');
dotenv.config();

const FILE_EXTENSIONS = {
    win32: 'ps1',
    linux: 'sh',
    darwin: 'sh',
};

/**
 * 
 * @param {string} ext 
 * @returns string
 */
const getAbsolutePath = (ext) => {
    const WORKING_DIRECTORY = process.cwd();
    const FILE_DIRECTORY = `scripts/post-changelog/script.${ext}`;

    return path.join(WORKING_DIRECTORY, FILE_DIRECTORY);
};

/**
 * 
 * @param {string} path
 * @param {...string} args
 * @returns void
 */
const runScript = (path, args) => {

    let process;

    if (path.endsWith(FILE_EXTENSIONS['win32'])) {

        process = exec(`powershell -File ${path} ${args}`);

    } else {

        process = spawn('bash', [path, args]);
    }

    process.on('close', (code) => {
        console.log(`Script execution completed with code ${code}`);
    });
};

/**
 * 
 */
(function () {

    const platform = os.platform();
    const JIRA_ISSUE_PREFIX = process.env.JIRA_ISSUE_PREFIX;

    if (platform === 'win32') {

        const path = getAbsolutePath(FILE_EXTENSIONS[platform]);
        runScript(path);
    
    } else if (platform === 'linux' || platform === 'darwin') {
        
        const path = getAbsolutePath(FILE_EXTENSIONS[platform]);
        runScript(path, JIRA_ISSUE_PREFIX);
        
    } else {
    
        console.log('Unknown platform');
    }
})();
