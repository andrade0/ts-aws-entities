import { AwsEksClusterAttrsIntterface } from '../interfaces';


export class AwsEksClusterAttrs implements AwsEksClusterAttrsIntterface {
  id?: string;
  arn?: string;
  certificate_authority?: string;
  endpoint?: string;
  platform_version?: string;
  version?: string;
  vpc_config?: string;

}
