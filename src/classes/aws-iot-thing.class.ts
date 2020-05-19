import { AwsIotThingIntterface } from '../interfaces';
import { AwsIotThingArgs,  AwsIotThingAttrs } from '.';

export class AwsIotThing implements AwsIotThingIntterface {
  	name: string = 'aws_iot_thing';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/iot_thing.html';
	groupName: string = 'IoT Resources';
	args: AwsIotThingArgs;
	attrs: AwsIotThingAttrs;

}
