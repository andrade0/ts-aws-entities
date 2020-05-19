import { AwsSfnActivityIntterface } from '../interfaces';
import { AwsSfnActivityArgs,  AwsSfnActivityAttrs } from '.';

export class AwsSfnActivity implements AwsSfnActivityIntterface {
  	name: string = 'aws_sfn_activity';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/sfn_activity.html';
	groupName: string = 'Step Function Resources';
	args: AwsSfnActivityArgs;
	attrs: AwsSfnActivityAttrs;

}
