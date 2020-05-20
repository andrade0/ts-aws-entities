import { AwsIamGroupMembershipArgsIntterface, AwsIamGroupMembershipAttrsIntterface } from '.';

export interface AwsIamGroupMembershipIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsIamGroupMembershipArgsIntterface;
  attrs: AwsIamGroupMembershipAttrsIntterface;

}
