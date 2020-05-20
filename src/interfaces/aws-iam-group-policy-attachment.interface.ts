import { AwsIamGroupPolicyAttachmentArgsIntterface, AwsIamGroupPolicyAttachmentAttrsIntterface } from '.';

export interface AwsIamGroupPolicyAttachmentIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsIamGroupPolicyAttachmentArgsIntterface;
  attrs: AwsIamGroupPolicyAttachmentAttrsIntterface;

}
