import { AwsOpsworksStackIntterface } from '../interfaces';
import { AwsOpsworksStackArgs, AwsOpsworksStackAttrs } from '.';

export class AwsOpsworksStack implements AwsOpsworksStackIntterface {
  name: string = 'aws_opsworks_stack';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html';
  groupName: string = 'OpsWorks Resources';
  args: AwsOpsworksStackArgs;
  attrs: AwsOpsworksStackAttrs;

}
