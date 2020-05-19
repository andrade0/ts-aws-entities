import { AwsMediaStoreContainerPolicyIntterface } from '../interfaces';
import { AwsMediaStoreContainerPolicyArgs,  AwsMediaStoreContainerPolicyAttrs } from '.';

export class AwsMediaStoreContainerPolicy implements AwsMediaStoreContainerPolicyIntterface {
  	name: string = 'aws_media_store_container_policy';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/media_store_container_policy.html';
	groupName: string = 'MediaStore Resources';
	args: AwsMediaStoreContainerPolicyArgs;
	attrs: AwsMediaStoreContainerPolicyAttrs;

}
