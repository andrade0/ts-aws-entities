import { AwsCloudtrailIntterface } from '../interfaces';
import { AwsCloudtrailArgs,  AwsCloudtrailAttrs } from '.';

export class AwsCloudtrail implements AwsCloudtrailIntterface {
  	name: string = 'aws_cloudtrail';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/cloudtrail.html';
	groupName: string = 'CloudTrail Resources';
	args: AwsCloudtrailArgs;
	attrs: AwsCloudtrailAttrs;

}
