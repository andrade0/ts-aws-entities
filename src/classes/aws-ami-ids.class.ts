import { AwsAmiIdsIntterface } from '../interfaces';
import { AwsAmiIdsArgs,  AwsAmiIdsAttrs } from '.';

export class AwsAmiIds implements AwsAmiIdsIntterface {
  	name: string = 'aws_ami_ids';
	type: string = 'data_source';
	url: string = 'https://www.terraform.io/docs/providers/aws/d/ami_ids.html';
	groupName: string = 'Data Sources';
	args: AwsAmiIdsArgs;
	attrs: AwsAmiIdsAttrs;

}
