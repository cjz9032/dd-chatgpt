import { ChatGPTPool } from './chatgpt.js';
import { config } from './config.js';
import { DBody } from './dd-server/app.js';
import axios from 'axios';

export const $http = axios.create();


const replyTalk = async (sessionWebhook: string, msg: string) => {
  const res = await $http.post(sessionWebhook, {
    msgtype: 'text',
    text: { content: msg },
  });
  if (res.status === 200) {
    return true;
  } else {
    console.debug(`error reply`, res.data);
    return false;
  }
};

const SINGLE_MESSAGE_MAX_SIZE = 500;
export class ChatGPTBot {
  // Record talkid with conversation id
  chatGPTPool = new ChatGPTPool();
  botName: string = '';
  ready = false;
  setBotName(botName: string) {
    this.botName = botName;
  }
  get chatGroupTiggerKeyword(): string {
    return `@${this.botName}`;
  }
  async startGPTBot() {
    console.debug(`Start GPT Bot Config is:${JSON.stringify(config)}`);
    await this.chatGPTPool.startPools();
    console.debug(`🤖️ Start GPT Bot Success, ready to handle message!`);
    this.ready = true;
  }
  // TODO: Add reset conversation id and ping pong
  async command(): Promise<void> {}
  // remove more times conversation and mention
  async getGPTMessage(text: string, talkerId: string): Promise<string> {
    return await this.chatGPTPool.sendMessage(text, talkerId);
  }
  // The message is segmented according to its size
  async trySay(sessionWebhook: string, mesasge: string): Promise<void> {
    const messages: Array<string> = [];
    let message = mesasge;
    while (message.length > SINGLE_MESSAGE_MAX_SIZE) {
      messages.push(message.slice(0, SINGLE_MESSAGE_MAX_SIZE));
      message = message.slice(SINGLE_MESSAGE_MAX_SIZE);
    }
    messages.push(message);
    for (const msg of messages) {
      await replyTalk(sessionWebhook, msg);
    }
  }
  
  isNonsense(text?: string): boolean {
    return !text;
  }

  // async onPrivateMessage(talker: ContactInterface, text: string) {
  //   const talkerId = talker.id;
  //   const gptMessage = await this.getGPTMessage(text, talkerId);
  //   await this.trySay(talker, gptMessage);
  // }

  async onGroupMessage(
    talker: string,
    text: string,
    room: string,
    sessionWebhook: string
  ) {
    const talkerId = room + talker;
    const gptMessage = await this.getGPTMessage(text, talkerId);
    const result = `${text}\n ------\n ${gptMessage}`;
    await this.trySay(sessionWebhook, result);
  }
  async onMessage(message: DBody) {
    const senderId = message.senderId;
    const rawText = message.text?.content.trim() || '';
    const room = message.conversationId;
    const sessionWebhook = message.sessionWebhook;
    // const messageType = message.msgtype
    const privateChat = !room;
    if (this.isNonsense(rawText)) {
      return;
    }
    if (privateChat) {
      return;
    } else {
      return await this.onGroupMessage(senderId, rawText, room, sessionWebhook);
    }
  }
}
