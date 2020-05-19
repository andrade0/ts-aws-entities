

export interface AwsCurReportDefinitionArgsIntterface {
  	report_name: string;
	time_unit: string;
	format: string;
	compression: string;
	additional_schema_elements: string;
	s3_bucket: string;
	s3_prefix?: string;
	s3_region: string;
	additional_artifacts: string;

}
