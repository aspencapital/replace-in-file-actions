import { getInput, setFailed } from '@actions/core';
import replace from 'replace-in-file';

async function run(): Promise<void> {
  try {
    const from: string = getInput('FROM');
    const to: string = getInput('TO');
    const files: string = getInput('FILES');

    // eslint-disable-next-line no-console
    console.log(process.env);
    // eslint-disable-next-line no-console
    console.log(process.cwd());
    // eslint-disable-next-line no-console
    console.log(__dirname);

    const options = {
      files,
      from,
      to,
    };

    replace.sync(options);
  } catch (error) {
    setFailed(error.message);
  }
}

run();
