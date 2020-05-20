import { AwsElasticsearchDomainArgsVpcOptionsIntterface } from '../interfaces';


export class AwsElasticsearchDomainArgsVpcOptions implements AwsElasticsearchDomainArgsVpcOptionsIntterface {
  security_group_ids?: string;
  subnet_ids: string;

}
