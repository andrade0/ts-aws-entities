import { AwsAlbListenerArgsIntterface, AwsAlbListenerAttrsIntterface } from '.';

export interface AwsAlbListenerIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsAlbListenerArgsIntterface;
	attrs: AwsAlbListenerAttrsIntterface;

}
