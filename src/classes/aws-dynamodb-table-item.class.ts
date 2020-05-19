import { AwsDynamodbTableItemIntterface } from '../interfaces';
import { AwsDynamodbTableItemArgs,  AwsDynamodbTableItemAttrs } from '.';

export class AwsDynamodbTableItem implements AwsDynamodbTableItemIntterface {
  	name: string = 'aws_dynamodb_table_item';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item.html';
	groupName: string = 'DynamoDB Resources';
	args: AwsDynamodbTableItemArgs;
	attrs: AwsDynamodbTableItemAttrs;

}
