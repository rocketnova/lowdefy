#!/usr/bin/env node

/*
  Copyright 2020-2021 Lowdefy, Inc

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import getServer from '@lowdefy/server';
import { shellDirectory } from '@lowdefy/shell';
import { createGetSecretsFromEnv } from '@lowdefy/node-utils';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv)).argv;

const buildDirectory =
  argv.buildDirectory || process.env.LOWDEFY_SERVER_BUILD_DIRECTORY || './.lowdefy/build';
const publicDirectory =
  argv.publicDirectory || process.env.LOWDEFY_SERVER_PUBLIC_DIRECTORY || './public';
const port = argv.port || parseInt(process.env.LOWDEFY_SERVER_PORT) || 3000;

const serverBasePath = process.env.LOWDEFY_SERVER_BASE_PATH;

const server = getServer({
  buildDirectory,
  development: false,
  getSecrets: createGetSecretsFromEnv(),
  logger: console,
  publicDirectory,
  serverBasePath,
  shellDirectory,
});

server.listen({ port }, () => console.log(`Server started at port ${port}`));
