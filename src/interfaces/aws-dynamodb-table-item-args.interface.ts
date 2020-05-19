

export interface AwsDynamodbTableItemArgsIntterface {
  	table_name: string;
	hash_key: string;
	range_key?: string;
	item: string;

}
