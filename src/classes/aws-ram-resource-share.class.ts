import { AwsRamResourceShareIntterface } from '../interfaces';
import { AwsRamResourceShareArgs, AwsRamResourceShareAttrs } from '.';

export class AwsRamResourceShare implements AwsRamResourceShareIntterface {
  name: string = 'aws_ram_resource_share';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html';
  groupName: string = 'RAM Resources';
  args: AwsRamResourceShareArgs;
  attrs: AwsRamResourceShareAttrs;

}
