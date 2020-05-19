import { AwsDbEventCategoriesIntterface } from '../interfaces';
import { AwsDbEventCategoriesArgs,  AwsDbEventCategoriesAttrs } from '.';

export class AwsDbEventCategories implements AwsDbEventCategoriesIntterface {
  	name: string = 'aws_db_event_categories';
	type: string = 'data_source';
	url: string = 'https://www.terraform.io/docs/providers/aws/d/db_event_categories.html';
	groupName: string = 'Data Sources';
	args: AwsDbEventCategoriesArgs;
	attrs: AwsDbEventCategoriesAttrs;

}
