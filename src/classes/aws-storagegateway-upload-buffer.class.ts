import { AwsStoragegatewayUploadBufferIntterface } from '../interfaces';
import { AwsStoragegatewayUploadBufferArgs,  AwsStoragegatewayUploadBufferAttrs } from '.';

export class AwsStoragegatewayUploadBuffer implements AwsStoragegatewayUploadBufferIntterface {
  	name: string = 'aws_storagegateway_upload_buffer';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer.html';
	groupName: string = 'Storage Gateway Resources';
	args: AwsStoragegatewayUploadBufferArgs;
	attrs: AwsStoragegatewayUploadBufferAttrs;

}
