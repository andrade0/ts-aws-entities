import { AwsStoragegatewaySmbFileShareArgsIdIntterface } from '.';

export interface AwsStoragegatewaySmbFileShareArgsIntterface {
  gateway_arn: string;
  location_arn: string;
  role_arn: string;
  authentication?: string;
  default_storage_class?: string;
  guess_mime_type_enabled?: boolean;
  invalid_user_list?: string;
  kms_encrypted?: boolean;
  kms_key_arn?: string;
  smb_file_share_defaults?: string;
  object_acl?: string;
  read_only?: boolean;
  requester_pays?: boolean;
  valid_user_list?: string;
  directory_mode?: string;
  file_mode?: string;
  group_id?: string;
  owner_id?: string;
  id: AwsStoragegatewaySmbFileShareArgsIdIntterface;
  arn: string;
  fileshare_id: string;
  path: string;

}
