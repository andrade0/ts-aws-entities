import { AwsDbSnapshotIntterface } from '../interfaces';
import { AwsDbSnapshotArgs,  AwsDbSnapshotAttrs } from '.';

export class AwsDbSnapshot implements AwsDbSnapshotIntterface {
  	name: string = 'aws_db_snapshot';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/db_snapshot.html';
	groupName: string = 'RDS Resources';
	args: AwsDbSnapshotArgs;
	attrs: AwsDbSnapshotAttrs;

}
