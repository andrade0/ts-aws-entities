import { AwsRoute53ZoneArgsVpcIntterface } from '.';

export interface AwsRoute53ZoneArgsIntterface {
  name: string;
  comment?: string;
  delegation_set_id?: string;
  force_destroy?: string;
  tags?: string;
  vpc?: AwsRoute53ZoneArgsVpcIntterface;
  vpc_id: string;
  vpc_region: string;

}
