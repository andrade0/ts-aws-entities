import { AwsSsmResourceDataSyncArgsIntterface, AwsSsmResourceDataSyncAttrsIntterface } from '.';

export interface AwsSsmResourceDataSyncIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsSsmResourceDataSyncArgsIntterface;
	attrs: AwsSsmResourceDataSyncAttrsIntterface;

}
