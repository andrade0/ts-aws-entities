import { AwsDynamodbTableArgsGlobalSecondaryIndexIntterface } from '../interfaces';


export class AwsDynamodbTableArgsGlobalSecondaryIndex implements AwsDynamodbTableArgsGlobalSecondaryIndexIntterface {
  	name: string;
	write_capacity?: string;
	read_capacity?: string;
	hash_key: string;
	range_key?: string;
	projection_type: string;
	non_key_attributes?: string;

}
