import { ChatGPTAPI } from 'chatgpt';

export interface AccountWithUserInfo {
  apiKey: string;
}

export type IAccount = AccountWithUserInfo;

export interface IChatGPTItem {
  chatGpt: ChatGPTAPI;
  account: IAccount;
}
export interface IConversationItem {
  conversation: ChatGPTAPI;
  account: IAccount;
  conversationId?: string;
  messageId?: string;
}

export interface IConfig {
  chatGPTAccountPool: IAccount[];
  chatGptRetryTimes: number;
  openAIProxy?: string;
  clearanceToken: string;
  userAgent: string;
}
