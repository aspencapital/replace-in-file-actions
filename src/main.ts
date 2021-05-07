import { getInput, setFailed } from '@actions/core';
import replace from 'replace-in-file';

async function run(): Promise<void> {
  try {
    const from: string = getInput('FROM');
    const to: string = getInput('TO');
    const files: string = getInput('FILES');

    // eslint-disable-next-line no-console
    console.log(from, to, files);

    const options = {
      files,
      from,
      to,
    };

    const results = replace.sync(options);

    // eslint-disable-next-line no-console
    console.log(results);
  } catch (error) {
    setFailed(error.message);
  }
}

run();
