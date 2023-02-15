import * as dotenv from "dotenv";
dotenv.config();
import { parse } from "yaml";
import fs from "fs";
import { IConfig, IAccount } from "./interface";
// If config file exist read config file. else read config from environment variables.
let configFile: any = {};
if (fs.existsSync("./config.yaml")) {
  const file = fs.readFileSync("./config.yaml", "utf8");
  configFile = parse(file);
}
dotenv.config();

export const config: IConfig = {
  chatGPTAccountPool: configFile.chatGPTAccountPool as Array<IAccount>,
  chatGptRetryTimes: configFile.chatGptRetryTimes || 3,
  // Support openai-js use this proxy
  openAIProxy: configFile.openAIProxy,
  clearanceToken: configFile.clearanceToken,
  userAgent: configFile.userAgent,
};
