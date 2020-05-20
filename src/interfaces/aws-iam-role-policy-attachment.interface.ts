import { AwsIamRolePolicyAttachmentArgsIntterface, AwsIamRolePolicyAttachmentAttrsIntterface } from '.';

export interface AwsIamRolePolicyAttachmentIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsIamRolePolicyAttachmentArgsIntterface;
  attrs: AwsIamRolePolicyAttachmentAttrsIntterface;

}
