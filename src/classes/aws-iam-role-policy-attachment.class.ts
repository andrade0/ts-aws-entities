import { AwsIamRolePolicyAttachmentIntterface } from '../interfaces';
import { AwsIamRolePolicyAttachmentArgs, AwsIamRolePolicyAttachmentAttrs } from '.';

export class AwsIamRolePolicyAttachment implements AwsIamRolePolicyAttachmentIntterface {
  name: string = 'aws_iam_role_policy_attachment';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/iam_role_policy_attachment.html';
  groupName: string = 'IAM Resources';
  args: AwsIamRolePolicyAttachmentArgs;
  attrs: AwsIamRolePolicyAttachmentAttrs;

}
