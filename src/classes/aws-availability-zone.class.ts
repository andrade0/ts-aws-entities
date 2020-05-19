import { AwsAvailabilityZoneIntterface } from '../interfaces';
import { AwsAvailabilityZoneArgs,  AwsAvailabilityZoneAttrs } from '.';

export class AwsAvailabilityZone implements AwsAvailabilityZoneIntterface {
  	name: string = 'aws_availability_zone';
	type: string = 'data_source';
	url: string = 'https://www.terraform.io/docs/providers/aws/d/availability_zone.html';
	groupName: string = 'Data Sources';
	args: AwsAvailabilityZoneArgs;
	attrs: AwsAvailabilityZoneAttrs;

}
