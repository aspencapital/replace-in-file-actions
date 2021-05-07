import { getInput, setFailed } from '@actions/core';
import replace from 'replace-in-file';
async function run() {
    try {
        const from = getInput('FROM');
        const to = getInput('TO');
        const files = getInput('FILES');
        const options = {
            files,
            from,
            to,
        };
        replace.sync(options);
    }
    catch (error) {
        setFailed(error.message);
    }
}
run();
//# sourceMappingURL=main.js.map