import { AwsDynamodbTableIntterface } from '../interfaces';
import { AwsDynamodbTableArgs,  AwsDynamodbTableAttrs } from '.';

export class AwsDynamodbTable implements AwsDynamodbTableIntterface {
  	name: string = 'aws_dynamodb_table';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html';
	groupName: string = 'DynamoDB Resources';
	args: AwsDynamodbTableArgs;
	attrs: AwsDynamodbTableAttrs;

}
