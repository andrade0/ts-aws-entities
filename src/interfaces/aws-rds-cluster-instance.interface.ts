import { AwsRdsClusterInstanceArgsIntterface, AwsRdsClusterInstanceAttrsIntterface } from '.';

export interface AwsRdsClusterInstanceIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsRdsClusterInstanceArgsIntterface;
  attrs: AwsRdsClusterInstanceAttrsIntterface;

}
