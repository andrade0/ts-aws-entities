import { AwsIamUserGroupMembershipIntterface } from '../interfaces';
import { AwsIamUserGroupMembershipArgs, AwsIamUserGroupMembershipAttrs } from '.';

export class AwsIamUserGroupMembership implements AwsIamUserGroupMembershipIntterface {
  name: string = 'aws_iam_user_group_membership';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/iam_user_group_membership.html';
  groupName: string = 'IAM Resources';
  args: AwsIamUserGroupMembershipArgs;
  attrs: AwsIamUserGroupMembershipAttrs;

}
