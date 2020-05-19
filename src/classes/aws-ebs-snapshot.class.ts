import { AwsEbsSnapshotIntterface } from '../interfaces';
import { AwsEbsSnapshotArgs,  AwsEbsSnapshotAttrs } from '.';

export class AwsEbsSnapshot implements AwsEbsSnapshotIntterface {
  	name: string = 'aws_ebs_snapshot';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html';
	groupName: string = 'EC2 Resources';
	args: AwsEbsSnapshotArgs;
	attrs: AwsEbsSnapshotAttrs;

}
