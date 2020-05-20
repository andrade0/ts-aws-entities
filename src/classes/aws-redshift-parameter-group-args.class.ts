import { AwsRedshiftParameterGroupArgsIntterface } from '../interfaces';
import { AwsRedshiftParameterGroupArgsParameter } from '.';

export class AwsRedshiftParameterGroupArgs implements AwsRedshiftParameterGroupArgsIntterface {
  name: string;
  family: string;
  description?: string;
  parameter?: AwsRedshiftParameterGroupArgsParameter;

}
