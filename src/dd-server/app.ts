// express
import express from 'express';

// init a express app

// {
//   "atUsers": [],
//   "chatbotCorpId": "dinged1a1375ab7930b24ac5d6980864d335",
//   "chatbotUserId": "$:LWCP_v1:$NpiHs2T8NOdiJnrAnM5NXO1f1mAYNtuA",
//   "conversationId": "cidN5Yy7FuQeyBDrSi+AE8mTw==",
//   "conversationTitle": "TAN",
//   "conversationType": "2",
//   "createAt": 1676388198074,
//   "isAdmin": true,
//   "isInAtList": true,
//   "msgId": "msgbF/1IlRoPL+b1WiV0vEMmQ==",
//   "msgtype": "text",
//   "robotCode": "dinggtowx1tq1m6ptq5j",
//   "senderCorpId": "dinged1a1375ab7930b24ac5d6980864d335",
//   "senderId": "$:LWCP_v1:$wD9YFim7LelboJJSyZwt/Q==",
//   "senderNick": "陈修廷",
//   "senderStaffId": "manager6256",
//   "sessionWebhook": "https://oapi.dingtalk.com/robot/sendBySession?session=70370eda2e18929e2417551a87704efe",
//   "sessionWebhookExpiredTime": 1676393598313,
//   "text": {
//       "content": " 123"
//   }
// }
// generate above json to types

export interface DBody {
  atUsers: any[];
  chatbotCorpId: string;
  chatbotUserId: string;
  conversationId: string;
  conversationTitle: string;
  conversationType: string;
  createAt: number;
  isAdmin: boolean;
  isInAtList: boolean;
  msgId: string;
  msgtype: string;
  robotCode: string;
  senderCorpId: string;
  senderId: string;
  senderNick: string;
  senderStaffId: string;
  sessionWebhook: string;
  sessionWebhookExpiredTime: number;
  text?: {
    content: string;
  };
}

export const startServer = (cb: (r: DBody) => void) => {
  const app = express();
  app.use(express.json());
  app.post('/', async function (req, res) {
    res.end();
    cb(req.body);
  });

  app.listen(8081);
};
