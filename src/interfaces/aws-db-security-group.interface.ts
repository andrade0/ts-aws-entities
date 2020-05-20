import { AwsDbSecurityGroupArgsIntterface, AwsDbSecurityGroupAttrsIntterface } from '.';

export interface AwsDbSecurityGroupIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsDbSecurityGroupArgsIntterface;
  attrs: AwsDbSecurityGroupAttrsIntterface;

}
