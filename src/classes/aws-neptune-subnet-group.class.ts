import { AwsNeptuneSubnetGroupIntterface } from '../interfaces';
import { AwsNeptuneSubnetGroupArgs,  AwsNeptuneSubnetGroupAttrs } from '.';

export class AwsNeptuneSubnetGroup implements AwsNeptuneSubnetGroupIntterface {
  	name: string = 'aws_neptune_subnet_group';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/neptune_subnet_group.html';
	groupName: string = 'Neptune Resources';
	args: AwsNeptuneSubnetGroupArgs;
	attrs: AwsNeptuneSubnetGroupAttrs;

}
