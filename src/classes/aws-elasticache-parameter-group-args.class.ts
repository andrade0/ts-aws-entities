import { AwsElasticacheParameterGroupArgsIntterface } from '../interfaces';
import { AwsElasticacheParameterGroupArgsParameter } from '.';

export class AwsElasticacheParameterGroupArgs implements AwsElasticacheParameterGroupArgsIntterface {
  name: string;
  family: string;
  description?: string;
  parameter?: AwsElasticacheParameterGroupArgsParameter;

}
