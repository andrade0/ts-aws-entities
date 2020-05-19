import { AwsCloudformationExportArgsIntterface, AwsCloudformationExportAttrsIntterface } from '.';

export interface AwsCloudformationExportIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsCloudformationExportArgsIntterface;
	attrs: AwsCloudformationExportAttrsIntterface;

}
