import { AwsEksClusterIntterface } from '../interfaces';
import { AwsEksClusterArgs,  AwsEksClusterAttrs } from '.';

export class AwsEksCluster implements AwsEksClusterIntterface {
  	name: string = 'aws_eks_cluster';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/eks_cluster.html';
	groupName: string = 'EKS Resources';
	args: AwsEksClusterArgs;
	attrs: AwsEksClusterAttrs;

}
