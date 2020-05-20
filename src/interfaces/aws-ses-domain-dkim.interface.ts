import { AwsSesDomainDkimArgsIntterface, AwsSesDomainDkimAttrsIntterface } from '.';

export interface AwsSesDomainDkimIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsSesDomainDkimArgsIntterface;
  attrs: AwsSesDomainDkimAttrsIntterface;

}
