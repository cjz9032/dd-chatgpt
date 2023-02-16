import * as dotenv from 'dotenv';
import { IConfig, IAccount } from './interface';
import fs from 'fs';
import process from 'process';
import path from 'path';

dotenv.config();

let configFile;
const cfgFile = path.join(process.cwd(), './config.json');

if (fs.existsSync(cfgFile)) {
  const file = fs.readFileSync(cfgFile, 'utf8');
  configFile = JSON.parse(file);
} else {
  configFile = {
    chatGPTAccountPool: [
      {
        apiKey: process.env.OPENAI_API_KEY,
      },
    ],
  };
}

export const config: IConfig = {
  chatGPTAccountPool: configFile.chatGPTAccountPool as Array<IAccount>,
  chatGptRetryTimes: configFile.chatGptRetryTimes || 3,
  // Support openai-js use this proxy
  openAIProxy: configFile.openAIProxy,
};
