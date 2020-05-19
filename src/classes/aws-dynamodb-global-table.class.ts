import { AwsDynamodbGlobalTableIntterface } from '../interfaces';
import { AwsDynamodbGlobalTableArgs,  AwsDynamodbGlobalTableAttrs } from '.';

export class AwsDynamodbGlobalTable implements AwsDynamodbGlobalTableIntterface {
  	name: string = 'aws_dynamodb_global_table';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html';
	groupName: string = 'DynamoDB Resources';
	args: AwsDynamodbGlobalTableArgs;
	attrs: AwsDynamodbGlobalTableAttrs;

}
