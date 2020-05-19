import { AwsPinpointApnsChannelArgsIntterface } from '../interfaces';


export class AwsPinpointApnsChannelArgs implements AwsPinpointApnsChannelArgsIntterface {
  	application_id: string;
	enabled?: string;
	default_authentication_method?: string;
	certificate: string;
	private_key: string;
	bundle_id: string;
	team_id: string;
	token_key: string;
	token_key_id: string;

}
