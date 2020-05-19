import { AwsIotThingTypeIntterface } from '../interfaces';
import { AwsIotThingTypeArgs,  AwsIotThingTypeAttrs } from '.';

export class AwsIotThingType implements AwsIotThingTypeIntterface {
  	name: string = 'aws_iot_thing_type';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html';
	groupName: string = 'IoT Resources';
	args: AwsIotThingTypeArgs;
	attrs: AwsIotThingTypeAttrs;

}
