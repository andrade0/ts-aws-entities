import { AwsGlueCrawlerIntterface } from '../interfaces';
import { AwsGlueCrawlerArgs,  AwsGlueCrawlerAttrs } from '.';

export class AwsGlueCrawler implements AwsGlueCrawlerIntterface {
  	name: string = 'aws_glue_crawler';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/glue_crawler.html';
	groupName: string = 'Glue Resources';
	args: AwsGlueCrawlerArgs;
	attrs: AwsGlueCrawlerAttrs;

}
