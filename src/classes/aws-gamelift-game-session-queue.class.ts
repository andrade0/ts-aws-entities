import { AwsGameliftGameSessionQueueIntterface } from '../interfaces';
import { AwsGameliftGameSessionQueueArgs,  AwsGameliftGameSessionQueueAttrs } from '.';

export class AwsGameliftGameSessionQueue implements AwsGameliftGameSessionQueueIntterface {
  	name: string = 'aws_gamelift_game_session_queue';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html';
	groupName: string = 'Gamelift Resources';
	args: AwsGameliftGameSessionQueueArgs;
	attrs: AwsGameliftGameSessionQueueAttrs;

}
