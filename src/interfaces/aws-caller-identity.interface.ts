import { AwsCallerIdentityArgsIntterface, AwsCallerIdentityAttrsIntterface } from '.';

export interface AwsCallerIdentityIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsCallerIdentityArgsIntterface;
  attrs: AwsCallerIdentityAttrsIntterface;

}
