import { AwsSimpledbDomainIntterface } from '../interfaces';
import { AwsSimpledbDomainArgs, AwsSimpledbDomainAttrs } from '.';

export class AwsSimpledbDomain implements AwsSimpledbDomainIntterface {
  name: string = 'aws_simpledb_domain';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/simpledb_domain.html';
  groupName: string = 'SimpleDB Resources';
  args: AwsSimpledbDomainArgs;
  attrs: AwsSimpledbDomainAttrs;

}
