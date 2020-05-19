import { AwsPrefixListArgsIntterface, AwsPrefixListAttrsIntterface } from '.';

export interface AwsPrefixListIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsPrefixListArgsIntterface;
	attrs: AwsPrefixListAttrsIntterface;

}
