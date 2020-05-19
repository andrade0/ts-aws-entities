import { AwsGameliftBuildIntterface } from '../interfaces';
import { AwsGameliftBuildArgs,  AwsGameliftBuildAttrs } from '.';

export class AwsGameliftBuild implements AwsGameliftBuildIntterface {
  	name: string = 'aws_gamelift_build';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/gamelift_build.html';
	groupName: string = 'Gamelift Resources';
	args: AwsGameliftBuildArgs;
	attrs: AwsGameliftBuildAttrs;

}
