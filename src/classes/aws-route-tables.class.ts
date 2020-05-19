import { AwsRouteTablesIntterface } from '../interfaces';
import { AwsRouteTablesArgs,  AwsRouteTablesAttrs } from '.';

export class AwsRouteTables implements AwsRouteTablesIntterface {
  	name: string = 'aws_route_tables';
	type: string = 'data_source';
	url: string = 'https://www.terraform.io/docs/providers/aws/d/route_tables.html';
	groupName: string = 'Data Sources';
	args: AwsRouteTablesArgs;
	attrs: AwsRouteTablesAttrs;

}
