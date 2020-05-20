import { AwsIamUserPolicyAttachmentIntterface } from '../interfaces';
import { AwsIamUserPolicyAttachmentArgs, AwsIamUserPolicyAttachmentAttrs } from '.';

export class AwsIamUserPolicyAttachment implements AwsIamUserPolicyAttachmentIntterface {
  name: string = 'aws_iam_user_policy_attachment';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/iam_user_policy_attachment.html';
  groupName: string = 'IAM Resources';
  args: AwsIamUserPolicyAttachmentArgs;
  attrs: AwsIamUserPolicyAttachmentAttrs;

}
