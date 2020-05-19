import { AwsStoragegatewayCachedIscsiVolumeIntterface } from '../interfaces';
import { AwsStoragegatewayCachedIscsiVolumeArgs,  AwsStoragegatewayCachedIscsiVolumeAttrs } from '.';

export class AwsStoragegatewayCachedIscsiVolume implements AwsStoragegatewayCachedIscsiVolumeIntterface {
  	name: string = 'aws_storagegateway_cached_iscsi_volume';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html';
	groupName: string = 'Storage Gateway Resources';
	args: AwsStoragegatewayCachedIscsiVolumeArgs;
	attrs: AwsStoragegatewayCachedIscsiVolumeAttrs;

}
