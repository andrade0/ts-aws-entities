import { AwsGameliftAliasIntterface } from '../interfaces';
import { AwsGameliftAliasArgs,  AwsGameliftAliasAttrs } from '.';

export class AwsGameliftAlias implements AwsGameliftAliasIntterface {
  	name: string = 'aws_gamelift_alias';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html';
	groupName: string = 'Gamelift Resources';
	args: AwsGameliftAliasArgs;
	attrs: AwsGameliftAliasAttrs;

}
