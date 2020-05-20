import { AwsRdsClusterParameterGroupArgsParameterIntterface } from '.';

export interface AwsRdsClusterParameterGroupArgsIntterface {
  name: string;
  name_prefix: string;
  family: string;
  description?: string;
  parameter?: AwsRdsClusterParameterGroupArgsParameterIntterface;
  tags?: string;

}
