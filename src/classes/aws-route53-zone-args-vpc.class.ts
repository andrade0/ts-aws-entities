import { AwsRoute53ZoneArgsVpcIntterface } from '../interfaces';


export class AwsRoute53ZoneArgsVpc implements AwsRoute53ZoneArgsVpcIntterface {
  vpc_id: string;
  vpc_region?: string;

}
