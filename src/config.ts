import * as dotenv from 'dotenv';
dotenv.config();
import { IConfig, IAccount } from './interface';
import configFile from './config.json';

const configParsed = configFile as any;
dotenv.config();

export const config: IConfig = {
  chatGPTAccountPool: configParsed.chatGPTAccountPool as Array<IAccount>,
  chatGptRetryTimes: configParsed.chatGptRetryTimes || 3,
  // Support openai-js use this proxy
  openAIProxy: configParsed.openAIProxy,
  clearanceToken: configParsed.clearanceToken,
  userAgent: configParsed.userAgent,
};
