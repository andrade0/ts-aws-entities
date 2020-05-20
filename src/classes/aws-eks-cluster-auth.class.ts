import { AwsEksClusterAuthIntterface } from '../interfaces';
import { AwsEksClusterAuthArgs, AwsEksClusterAuthAttrs } from '.';

export class AwsEksClusterAuth implements AwsEksClusterAuthIntterface {
  name: string = 'aws_eks_cluster_auth';
  type: string = 'data_source';
  url: string = 'https://www.terraform.io/docs/providers/aws/d/eks_cluster_auth.html';
  groupName: string = 'Data Sources';
  args: AwsEksClusterAuthArgs;
  attrs: AwsEksClusterAuthAttrs;

}
