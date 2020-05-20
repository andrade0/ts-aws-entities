import { AwsSsmPatchGroupIntterface } from '../interfaces';
import { AwsSsmPatchGroupArgs, AwsSsmPatchGroupAttrs } from '.';

export class AwsSsmPatchGroup implements AwsSsmPatchGroupIntterface {
  name: string = 'aws_ssm_patch_group';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/ssm_patch_group.html';
  groupName: string = 'SSM Resources';
  args: AwsSsmPatchGroupArgs;
  attrs: AwsSsmPatchGroupAttrs;

}
