import { AwsPrefixListIntterface } from '../interfaces';
import { AwsPrefixListArgs,  AwsPrefixListAttrs } from '.';

export class AwsPrefixList implements AwsPrefixListIntterface {
  	name: string = 'aws_prefix_list';
	type: string = 'data_source';
	url: string = 'https://www.terraform.io/docs/providers/aws/d/prefix_list.html';
	groupName: string = 'Data Sources';
	args: AwsPrefixListArgs;
	attrs: AwsPrefixListAttrs;

}
