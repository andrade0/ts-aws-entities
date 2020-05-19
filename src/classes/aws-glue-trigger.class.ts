import { AwsGlueTriggerIntterface } from '../interfaces';
import { AwsGlueTriggerArgs,  AwsGlueTriggerAttrs } from '.';

export class AwsGlueTrigger implements AwsGlueTriggerIntterface {
  	name: string = 'aws_glue_trigger';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/glue_trigger.html';
	groupName: string = 'Glue Resources';
	args: AwsGlueTriggerArgs;
	attrs: AwsGlueTriggerAttrs;

}
