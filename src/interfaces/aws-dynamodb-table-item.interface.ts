import { AwsDynamodbTableItemArgsIntterface, AwsDynamodbTableItemAttrsIntterface } from '.';

export interface AwsDynamodbTableItemIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsDynamodbTableItemArgsIntterface;
	attrs: AwsDynamodbTableItemAttrsIntterface;

}
