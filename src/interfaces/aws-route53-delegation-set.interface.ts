import { AwsRoute53DelegationSetArgsIntterface, AwsRoute53DelegationSetAttrsIntterface } from '.';

export interface AwsRoute53DelegationSetIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsRoute53DelegationSetArgsIntterface;
  attrs: AwsRoute53DelegationSetAttrsIntterface;

}
