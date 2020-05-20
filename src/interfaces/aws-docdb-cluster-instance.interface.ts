import { AwsDocdbClusterInstanceArgsIntterface, AwsDocdbClusterInstanceAttrsIntterface } from '.';

export interface AwsDocdbClusterInstanceIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsDocdbClusterInstanceArgsIntterface;
  attrs: AwsDocdbClusterInstanceAttrsIntterface;

}
