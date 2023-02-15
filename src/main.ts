import fetch from 'node-fetch';
import { startServer } from './dd-server/app.js';
(globalThis as any).fetch = fetch;

async function main() {
  const { ChatGPTBot } = await import('./bot.js');
  const chatGPTBot = new ChatGPTBot();

  await chatGPTBot.startGPTBot();

  try {
    startServer(async (msg) => {
      console.debug('dd-server callback', msg);
      if (!chatGPTBot.ready) {
        return;
      }
      try {
        console.log(`Message: ${msg}`);
        await chatGPTBot.onMessage(msg);
      } catch (e) {
        console.error(e);
      }
    });
    // await bot.start();
  } catch (e) {
    console.error(
      `⚠️ Bot start failed, can you log in through wechat on the web?: ${e}`
    );
  }
}
main();
