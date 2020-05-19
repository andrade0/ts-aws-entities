import { AwsKinesisStreamArgsIntterface, AwsKinesisStreamAttrsIntterface } from '.';

export interface AwsKinesisStreamIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsKinesisStreamArgsIntterface;
	attrs: AwsKinesisStreamAttrsIntterface;

}
