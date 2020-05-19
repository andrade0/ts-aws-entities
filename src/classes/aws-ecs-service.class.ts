import { AwsEcsServiceIntterface } from '../interfaces';
import { AwsEcsServiceArgs,  AwsEcsServiceAttrs } from '.';

export class AwsEcsService implements AwsEcsServiceIntterface {
  	name: string = 'aws_ecs_service';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/ecs_service.html';
	groupName: string = 'ECS Resources';
	args: AwsEcsServiceArgs;
	attrs: AwsEcsServiceAttrs;

}
