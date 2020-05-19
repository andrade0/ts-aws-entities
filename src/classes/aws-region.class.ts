import { AwsRegionIntterface } from '../interfaces';
import { AwsRegionArgs,  AwsRegionAttrs } from '.';

export class AwsRegion implements AwsRegionIntterface {
  	name: string = 'aws_region';
	type: string = 'data_source';
	url: string = 'https://www.terraform.io/docs/providers/aws/d/region.html';
	groupName: string = 'Data Sources';
	args: AwsRegionArgs;
	attrs: AwsRegionAttrs;

}
