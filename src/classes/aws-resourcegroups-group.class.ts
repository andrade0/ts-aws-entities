import { AwsResourcegroupsGroupIntterface } from '../interfaces';
import { AwsResourcegroupsGroupArgs, AwsResourcegroupsGroupAttrs } from '.';

export class AwsResourcegroupsGroup implements AwsResourcegroupsGroupIntterface {
  name: string = 'aws_resourcegroups_group';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html';
  groupName: string = 'Resource Groups Resources';
  args: AwsResourcegroupsGroupArgs;
  attrs: AwsResourcegroupsGroupAttrs;

}
