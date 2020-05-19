import { AwsDatasyncLocationEfsIntterface } from '../interfaces';
import { AwsDatasyncLocationEfsArgs,  AwsDatasyncLocationEfsAttrs } from '.';

export class AwsDatasyncLocationEfs implements AwsDatasyncLocationEfsIntterface {
  	name: string = 'aws_datasync_location_efs';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html';
	groupName: string = 'DataSync Resources';
	args: AwsDatasyncLocationEfsArgs;
	attrs: AwsDatasyncLocationEfsAttrs;

}
