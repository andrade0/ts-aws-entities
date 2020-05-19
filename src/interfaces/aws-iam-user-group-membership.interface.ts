import { AwsIamUserGroupMembershipArgsIntterface, AwsIamUserGroupMembershipAttrsIntterface } from '.';

export interface AwsIamUserGroupMembershipIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsIamUserGroupMembershipArgsIntterface;
	attrs: AwsIamUserGroupMembershipAttrsIntterface;

}
