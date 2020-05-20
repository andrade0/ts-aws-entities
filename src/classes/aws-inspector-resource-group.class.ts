import { AwsInspectorResourceGroupIntterface } from '../interfaces';
import { AwsInspectorResourceGroupArgs, AwsInspectorResourceGroupAttrs } from '.';

export class AwsInspectorResourceGroup implements AwsInspectorResourceGroupIntterface {
  name: string = 'aws_inspector_resource_group';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/inspector_resource_group.html';
  groupName: string = 'Inspector Resources';
  args: AwsInspectorResourceGroupArgs;
  attrs: AwsInspectorResourceGroupAttrs;

}
