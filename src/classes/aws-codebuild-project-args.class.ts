import { AwsCodebuildProjectArgsIntterface } from '../interfaces';
import { AwsCodebuildProjectArgsArtifacts,  AwsCodebuildProjectArgsEnvironment,  AwsCodebuildProjectArgsSource,  AwsCodebuildProjectArgsCache,  AwsCodebuildProjectArgsVpcConfig } from '.';

export class AwsCodebuildProjectArgs implements AwsCodebuildProjectArgsIntterface {
  	artifacts: AwsCodebuildProjectArgsArtifacts;
	environment: AwsCodebuildProjectArgsEnvironment;
	name: string;
	source: AwsCodebuildProjectArgsSource;
	badge_enabled?: string;
	build_timeout?: string;
	cache?: AwsCodebuildProjectArgsCache;
	description?: string;
	encryption_key?: string;
	service_role: string;
	tags?: string;
	vpc_config?: AwsCodebuildProjectArgsVpcConfig;
	secondary_artifacts?: string;
	secondary_sources?: string;
	type: string;
	resource?: string;

}
