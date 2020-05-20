import { AwsCodebuildProjectArgsVpcConfigIntterface } from '../interfaces';


export class AwsCodebuildProjectArgsVpcConfig implements AwsCodebuildProjectArgsVpcConfigIntterface {
  security_group_ids: string;
  subnets: string;
  vpc_id: string;

}
