import { AwsDynamodbTableArgsLocalSecondaryIndexIntterface } from '../interfaces';


export class AwsDynamodbTableArgsLocalSecondaryIndex implements AwsDynamodbTableArgsLocalSecondaryIndexIntterface {
  	name: string;
	range_key: string;
	projection_type: string;
	non_key_attributes?: string;

}
