import { AwsStoragegatewaySmbFileShareIntterface } from '../interfaces';
import { AwsStoragegatewaySmbFileShareArgs,  AwsStoragegatewaySmbFileShareAttrs } from '.';

export class AwsStoragegatewaySmbFileShare implements AwsStoragegatewaySmbFileShareIntterface {
  	name: string = 'aws_storagegateway_smb_file_share';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html';
	groupName: string = 'Storage Gateway Resources';
	args: AwsStoragegatewaySmbFileShareArgs;
	attrs: AwsStoragegatewaySmbFileShareAttrs;

}
