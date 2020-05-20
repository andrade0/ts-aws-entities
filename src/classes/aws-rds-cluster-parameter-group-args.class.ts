import { AwsRdsClusterParameterGroupArgsIntterface } from '../interfaces';
import { AwsRdsClusterParameterGroupArgsParameter } from '.';

export class AwsRdsClusterParameterGroupArgs implements AwsRdsClusterParameterGroupArgsIntterface {
  name: string;
  name_prefix: string;
  family: string;
  description?: string;
  parameter?: AwsRdsClusterParameterGroupArgsParameter;
  tags?: string;

}
