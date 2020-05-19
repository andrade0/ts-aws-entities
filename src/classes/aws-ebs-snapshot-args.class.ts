import { AwsEbsSnapshotArgsIntterface } from '../interfaces';


export class AwsEbsSnapshotArgs implements AwsEbsSnapshotArgsIntterface {
  	volume_id: string;
	description?: string;
	tags?: string;

}
