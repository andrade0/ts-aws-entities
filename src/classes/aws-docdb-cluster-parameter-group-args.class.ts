import { AwsDocdbClusterParameterGroupArgsIntterface } from '../interfaces';
import { AwsDocdbClusterParameterGroupArgsParameter } from '.';

export class AwsDocdbClusterParameterGroupArgs implements AwsDocdbClusterParameterGroupArgsIntterface {
  name: string;
  name_prefix: string;
  family: string;
  description: string;
  parameter?: AwsDocdbClusterParameterGroupArgsParameter;
  tags?: string;

}
