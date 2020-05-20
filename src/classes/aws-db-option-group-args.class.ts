import { AwsDbOptionGroupArgsIntterface } from '../interfaces';
import { AwsDbOptionGroupArgsOption } from '.';

export class AwsDbOptionGroupArgs implements AwsDbOptionGroupArgsIntterface {
  name: string;
  name_prefix: string;
  option_group_description?: string;
  engine_name: string;
  major_engine_version: string;
  option?: AwsDbOptionGroupArgsOption;
  tags?: string;

}
