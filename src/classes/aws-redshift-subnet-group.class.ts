import { AwsRedshiftSubnetGroupIntterface } from '../interfaces';
import { AwsRedshiftSubnetGroupArgs,  AwsRedshiftSubnetGroupAttrs } from '.';

export class AwsRedshiftSubnetGroup implements AwsRedshiftSubnetGroupIntterface {
  	name: string = 'aws_redshift_subnet_group';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/redshift_subnet_group.html';
	groupName: string = 'Redshift Resources';
	args: AwsRedshiftSubnetGroupArgs;
	attrs: AwsRedshiftSubnetGroupAttrs;

}
