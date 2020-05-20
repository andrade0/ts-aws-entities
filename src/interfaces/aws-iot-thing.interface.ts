import { AwsIotThingArgsIntterface, AwsIotThingAttrsIntterface } from '.';

export interface AwsIotThingIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsIotThingArgsIntterface;
  attrs: AwsIotThingAttrsIntterface;

}
