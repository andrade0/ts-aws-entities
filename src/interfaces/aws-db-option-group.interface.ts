import { AwsDbOptionGroupArgsIntterface, AwsDbOptionGroupAttrsIntterface } from '.';

export interface AwsDbOptionGroupIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsDbOptionGroupArgsIntterface;
  attrs: AwsDbOptionGroupAttrsIntterface;

}
