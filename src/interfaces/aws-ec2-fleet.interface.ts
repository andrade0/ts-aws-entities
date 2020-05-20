import { AwsEc2FleetArgsIntterface, AwsEc2FleetAttrsIntterface } from '.';

export interface AwsEc2FleetIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsEc2FleetArgsIntterface;
  attrs: AwsEc2FleetAttrsIntterface;

}
