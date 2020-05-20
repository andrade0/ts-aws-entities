import { AwsDirectoryServiceDirectoryArgsIntterface } from '../interfaces';
import { AwsDirectoryServiceDirectoryArgsConnectSettings, AwsDirectoryServiceDirectoryArgsVpcSettings } from '.';

export class AwsDirectoryServiceDirectoryArgs implements AwsDirectoryServiceDirectoryArgsIntterface {
  name: string;
  password: string;
  size: string;
  vpc_settings: AwsDirectoryServiceDirectoryArgsVpcSettings;
  connect_settings: AwsDirectoryServiceDirectoryArgsConnectSettings;
  alias?: string;
  description?: string;
  short_name?: string;
  enable_sso?: string;
  type?: string;
  edition?: string;
  tags?: string;

}
