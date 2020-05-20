import { AwsNeptuneParameterGroupArgsIntterface } from '../interfaces';
import { AwsNeptuneParameterGroupArgsParameter } from '.';

export class AwsNeptuneParameterGroupArgs implements AwsNeptuneParameterGroupArgsIntterface {
  name: string;
  family: string;
  description?: string;
  parameter?: AwsNeptuneParameterGroupArgsParameter;
  tags?: string;

}
