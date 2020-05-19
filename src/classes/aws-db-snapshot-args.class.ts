import { AwsDbSnapshotArgsIntterface } from '../interfaces';


export class AwsDbSnapshotArgs implements AwsDbSnapshotArgsIntterface {
  	db_instance_identifier: string;
	db_snapshot_identifier: string;
	tags?: string;

}
