import { AwsRdsClusterParameterGroupArgsIntterface, AwsRdsClusterParameterGroupAttrsIntterface } from '.';

export interface AwsRdsClusterParameterGroupIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsRdsClusterParameterGroupArgsIntterface;
  attrs: AwsRdsClusterParameterGroupAttrsIntterface;

}
