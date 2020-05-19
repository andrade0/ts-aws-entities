import { AwsPinpointAppArgsIntterface } from '../interfaces';
import { AwsPinpointAppArgsCampaignHook,  AwsPinpointAppArgsLimits,  AwsPinpointAppArgsQuietTime } from '.';

export class AwsPinpointAppArgs implements AwsPinpointAppArgsIntterface {
  	name?: string;
	name_prefix?: string;
	campaign_hook?: AwsPinpointAppArgsCampaignHook;
	limits?: AwsPinpointAppArgsLimits;
	quiet_time?: AwsPinpointAppArgsQuietTime;

}
