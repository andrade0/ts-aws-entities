import { AwsGlueCrawlerArgsIntterface, AwsGlueCrawlerAttrsIntterface } from '.';

export interface AwsGlueCrawlerIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsGlueCrawlerArgsIntterface;
	attrs: AwsGlueCrawlerAttrsIntterface;

}
