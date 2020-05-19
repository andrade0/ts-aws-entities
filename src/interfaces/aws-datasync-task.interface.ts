import { AwsDatasyncTaskArgsIntterface, AwsDatasyncTaskAttrsIntterface } from '.';

export interface AwsDatasyncTaskIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsDatasyncTaskArgsIntterface;
	attrs: AwsDatasyncTaskAttrsIntterface;

}
