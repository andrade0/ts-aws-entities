import { AwsIotPolicyAttachmentArgsIntterface, AwsIotPolicyAttachmentAttrsIntterface } from '.';

export interface AwsIotPolicyAttachmentIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsIotPolicyAttachmentArgsIntterface;
  attrs: AwsIotPolicyAttachmentAttrsIntterface;

}
