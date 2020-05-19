import { AwsS3BucketArgsWebsiteIntterface } from '../interfaces';


export class AwsS3BucketArgsWebsite implements AwsS3BucketArgsWebsiteIntterface {
  	index_document: string;
	error_document?: string;
	redirect_all_requests_to?: string;
	routing_rules?: string;

}
