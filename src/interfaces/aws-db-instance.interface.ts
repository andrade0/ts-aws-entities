import { AwsDbInstanceArgsIntterface, AwsDbInstanceAttrsIntterface } from '.';

export interface AwsDbInstanceIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsDbInstanceArgsIntterface;
  attrs: AwsDbInstanceAttrsIntterface;

}
