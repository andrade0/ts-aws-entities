import { AwsDatasyncTaskIntterface } from '../interfaces';
import { AwsDatasyncTaskArgs,  AwsDatasyncTaskAttrs } from '.';

export class AwsDatasyncTask implements AwsDatasyncTaskIntterface {
  	name: string = 'aws_datasync_task';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/datasync_task.html';
	groupName: string = 'DataSync Resources';
	args: AwsDatasyncTaskArgs;
	attrs: AwsDatasyncTaskAttrs;

}
