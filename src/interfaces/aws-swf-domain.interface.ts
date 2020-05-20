import { AwsSwfDomainArgsIntterface, AwsSwfDomainAttrsIntterface } from '.';

export interface AwsSwfDomainIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsSwfDomainArgsIntterface;
  attrs: AwsSwfDomainAttrsIntterface;

}
