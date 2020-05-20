import { AwsPinpointEmailChannelArgsIntterface } from '../interfaces';


export class AwsPinpointEmailChannelArgs implements AwsPinpointEmailChannelArgsIntterface {
  application_id: string;
  enabled?: string;
  from_address: string;
  identity: string;
  role_arn: string;

}
