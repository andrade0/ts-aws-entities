import { AwsRedshiftSecurityGroupArgsIntterface, AwsRedshiftSecurityGroupAttrsIntterface } from '.';

export interface AwsRedshiftSecurityGroupIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsRedshiftSecurityGroupArgsIntterface;
  attrs: AwsRedshiftSecurityGroupAttrsIntterface;

}
