import { AwsStoragegatewayNfsFileShareArgsIntterface } from '../interfaces';
import { AwsStoragegatewayNfsFileShareArgsId } from '.';

export class AwsStoragegatewayNfsFileShareArgs implements AwsStoragegatewayNfsFileShareArgsIntterface {
  client_list: string;
  gateway_arn: string;
  location_arn: string;
  role_arn: string;
  default_storage_class?: string;
  guess_mime_type_enabled?: boolean;
  kms_encrypted?: boolean;
  kms_key_arn?: string;
  nfs_file_share_defaults?: string;
  object_acl?: string;
  read_only?: boolean;
  requester_pays?: boolean;
  squash?: string;
  directory_mode?: string;
  file_mode?: string;
  group_id?: string;
  owner_id?: string;
  id: AwsStoragegatewayNfsFileShareArgsId;
  arn: string;
  fileshare_id: string;
  path: string;

}
