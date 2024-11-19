const axios = require('axios');
const express = require('express');
const server = express();
const PORT = process.env.PORT || 3300;

server.use(express.static('public'));

server.get('/', (_req, res) => {
  res.send('Hello Expkldfasgdfdhdfasgguhklmkjkjkhjnlkgvhkglhujlmress!');
});
const envVariables = {
  EnvVarAppName: "_APP_NAME",
  EnvVarEnvName: "_ENV_NAME",
  EnvVarEnvID: "_ENV_ID",
  EnvVarBuildID: "_BUILD_ID",
  EnvVarSource: "_SOURCE",
  EnvVarRepository: "_REPOSITORY",
  EnvVarCommitSha: "_COMMIT_SHA",
  EnvVarEnvBranch: "_ENV_BRANCH",
  EnvVarPreviewEnv: "_PREVIEW_ENV",
  EnvVarRuntime: ""
};

// Funkcja odczytująca i wypisująca zmienne środowiskowe
function printEnvVariables(prefix, variables) {
  console.log(`\n### Zmienne środowiskowe z prefiksem ${prefix} ###\n`);
  for (const [key, envVar] of Object.entries(variables)) {
    console.log(`${prefix + envVar}: ${process.env[prefix + envVar] || 'Nie ustawiona'}`);
  }
}


server.listen(PORT, () => {
  console.log(`Application is listening at port ${PORT}`);
  
  printEnvVariables('HEADLESS_METADATA',envVariables);
  printEnvVariables('ATLAS_METADATA',envVariables);
});
