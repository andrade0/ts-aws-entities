import { AwsSecurityGroupAttrsIntterface } from '../interfaces';


export class AwsSecurityGroupAttrs implements AwsSecurityGroupAttrsIntterface {
  id?: string;
  arn?: string;
  vpc_id?: string;
  owner_id?: string;
  name?: string;
  description?: string;
  ingress?: string;
  egress?: string;

}
