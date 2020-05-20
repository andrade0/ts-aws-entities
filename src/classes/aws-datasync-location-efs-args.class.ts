import { AwsDatasyncLocationEfsArgsIntterface } from '../interfaces';
import { AwsDatasyncLocationEfsArgsEc2Config } from '.';

export class AwsDatasyncLocationEfsArgs implements AwsDatasyncLocationEfsArgsIntterface {
  ec2_config: AwsDatasyncLocationEfsArgsEc2Config;
  efs_file_system_arn: string;
  subdirectory?: string;
  tags?: string;
  id: string;
  arn: string;

}
