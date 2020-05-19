import { AwsS3BucketAttrsIntterface } from '../interfaces';


export class AwsS3BucketAttrs implements AwsS3BucketAttrsIntterface {
  	id?: string;
	arn?: string;
	bucket_domain_name?: string;
	bucket_regional_domain_name?: string;
	hosted_zone_id?: string;
	region?: string;
	website_endpoint?: string;
	website_domain?: string;

}
