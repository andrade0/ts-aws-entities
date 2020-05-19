import { AwsMacieS3BucketAssociationArgsIntterface } from '../interfaces';
import { AwsMacieS3BucketAssociationArgsClassificationType } from '.';

export class AwsMacieS3BucketAssociationArgs implements AwsMacieS3BucketAssociationArgsIntterface {
  	bucket_name: string;
	classification_type?: AwsMacieS3BucketAssociationArgsClassificationType;
	member_account_id?: string;
	prefix?: string;

}
