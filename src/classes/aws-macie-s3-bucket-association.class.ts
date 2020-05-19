import { AwsMacieS3BucketAssociationIntterface } from '../interfaces';
import { AwsMacieS3BucketAssociationArgs,  AwsMacieS3BucketAssociationAttrs } from '.';

export class AwsMacieS3BucketAssociation implements AwsMacieS3BucketAssociationIntterface {
  	name: string = 'aws_macie_s3_bucket_association';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association.html';
	groupName: string = 'Macie Resources';
	args: AwsMacieS3BucketAssociationArgs;
	attrs: AwsMacieS3BucketAssociationAttrs;

}
