import { AwsResourcegroupsGroupArgsIntterface } from '../interfaces';
import { AwsResourcegroupsGroupArgsResourceQuery } from '.';

export class AwsResourcegroupsGroupArgs implements AwsResourcegroupsGroupArgsIntterface {
  name: string;
  description?: string;
  resource_query: AwsResourcegroupsGroupArgsResourceQuery;

}
