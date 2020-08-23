import * as core from "@actions/core";
import { GenConfigCommandHandler } from "@ced/cli";

const run = async function () {
  try {
    const cliToken = core.getInput("cli-token") || process.env["CED_CLI_TOKEN"];
    const environment =
      core.getInput("environment") || process.env["CED_ENVIRONMENT"];
    const path = core.getInput("path") || process.env["CED_PROJECT_PATH"];
    const extraConfig = core.getInput("extra");

    if (!cliToken) {
      throw new Error(
        `Missing CED CLI token. Provide a CLI token by "cli-token" input parameter or define a variable "CED_CLI_TOKEN".`
      );
    }

    if (environment) {
      console.log(`Using environment: ${environment}`);
    }

    if (path) {
      process.chdir(path);
      console.log(`Using ${path} as working directory`);
    }

    const command = new GenConfigCommandHandler(cliToken);
    await command.run(environment, extraConfig);
  } catch (error) {
    console.log(error);
    core.setFailed(error.message);
  }
};

run();
