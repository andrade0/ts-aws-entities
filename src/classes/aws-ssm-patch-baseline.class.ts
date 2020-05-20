import { AwsSsmPatchBaselineIntterface } from '../interfaces';
import { AwsSsmPatchBaselineArgs, AwsSsmPatchBaselineAttrs } from '.';

export class AwsSsmPatchBaseline implements AwsSsmPatchBaselineIntterface {
  name: string = 'aws_ssm_patch_baseline';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html';
  groupName: string = 'SSM Resources';
  args: AwsSsmPatchBaselineArgs;
  attrs: AwsSsmPatchBaselineAttrs;

}
