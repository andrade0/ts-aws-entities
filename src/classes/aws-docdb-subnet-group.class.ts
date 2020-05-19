import { AwsDocdbSubnetGroupIntterface } from '../interfaces';
import { AwsDocdbSubnetGroupArgs,  AwsDocdbSubnetGroupAttrs } from '.';

export class AwsDocdbSubnetGroup implements AwsDocdbSubnetGroupIntterface {
  	name: string = 'aws_docdb_subnet_group';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/docdb_subnet_group.html';
	groupName: string = 'DocumentDB Resources';
	args: AwsDocdbSubnetGroupArgs;
	attrs: AwsDocdbSubnetGroupAttrs;

}
