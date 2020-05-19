import { AwsPartitionArgsIntterface, AwsPartitionAttrsIntterface } from '.';

export interface AwsPartitionIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsPartitionArgsIntterface;
	attrs: AwsPartitionAttrsIntterface;

}
