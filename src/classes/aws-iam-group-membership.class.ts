import { AwsIamGroupMembershipIntterface } from '../interfaces';
import { AwsIamGroupMembershipArgs, AwsIamGroupMembershipAttrs } from '.';

export class AwsIamGroupMembership implements AwsIamGroupMembershipIntterface {
  name: string = 'aws_iam_group_membership';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/iam_group_membership.html';
  groupName: string = 'IAM Resources';
  args: AwsIamGroupMembershipArgs;
  attrs: AwsIamGroupMembershipAttrs;

}
