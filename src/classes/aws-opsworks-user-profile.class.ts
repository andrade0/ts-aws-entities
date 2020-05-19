import { AwsOpsworksUserProfileIntterface } from '../interfaces';
import { AwsOpsworksUserProfileArgs,  AwsOpsworksUserProfileAttrs } from '.';

export class AwsOpsworksUserProfile implements AwsOpsworksUserProfileIntterface {
  	name: string = 'aws_opsworks_user_profile';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile.html';
	groupName: string = 'OpsWorks Resources';
	args: AwsOpsworksUserProfileArgs;
	attrs: AwsOpsworksUserProfileAttrs;

}
