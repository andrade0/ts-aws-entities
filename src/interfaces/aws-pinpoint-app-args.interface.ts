import {
  AwsPinpointAppArgsCampaignHookIntterface,
  AwsPinpointAppArgsLimitsIntterface,
  AwsPinpointAppArgsQuietTimeIntterface,
} from '.';

export interface AwsPinpointAppArgsIntterface {
  name?: string;
  name_prefix?: string;
  campaign_hook?: AwsPinpointAppArgsCampaignHookIntterface;
  limits?: AwsPinpointAppArgsLimitsIntterface;
  quiet_time?: AwsPinpointAppArgsQuietTimeIntterface;

}
