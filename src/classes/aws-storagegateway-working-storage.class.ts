import { AwsStoragegatewayWorkingStorageIntterface } from '../interfaces';
import { AwsStoragegatewayWorkingStorageArgs,  AwsStoragegatewayWorkingStorageAttrs } from '.';

export class AwsStoragegatewayWorkingStorage implements AwsStoragegatewayWorkingStorageIntterface {
  	name: string = 'aws_storagegateway_working_storage';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/storagegateway_working_storage.html';
	groupName: string = 'Storage Gateway Resources';
	args: AwsStoragegatewayWorkingStorageArgs;
	attrs: AwsStoragegatewayWorkingStorageAttrs;

}
