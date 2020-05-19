import { AwsDatasyncLocationNfsIntterface } from '../interfaces';
import { AwsDatasyncLocationNfsArgs,  AwsDatasyncLocationNfsAttrs } from '.';

export class AwsDatasyncLocationNfs implements AwsDatasyncLocationNfsIntterface {
  	name: string = 'aws_datasync_location_nfs';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html';
	groupName: string = 'DataSync Resources';
	args: AwsDatasyncLocationNfsArgs;
	attrs: AwsDatasyncLocationNfsAttrs;

}
