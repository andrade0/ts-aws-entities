import { AwsEksClusterAuthArgsIntterface, AwsEksClusterAuthAttrsIntterface } from '.';

export interface AwsEksClusterAuthIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsEksClusterAuthArgsIntterface;
  attrs: AwsEksClusterAuthAttrsIntterface;

}
