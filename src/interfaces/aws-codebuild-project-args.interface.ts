import {
  AwsCodebuildProjectArgsArtifactsIntterface,
  AwsCodebuildProjectArgsCacheIntterface,
  AwsCodebuildProjectArgsEnvironmentIntterface,
  AwsCodebuildProjectArgsSourceIntterface,
  AwsCodebuildProjectArgsVpcConfigIntterface,
} from '.';

export interface AwsCodebuildProjectArgsIntterface {
  artifacts: AwsCodebuildProjectArgsArtifactsIntterface;
  environment: AwsCodebuildProjectArgsEnvironmentIntterface;
  name: string;
  source: AwsCodebuildProjectArgsSourceIntterface;
  badge_enabled?: string;
  build_timeout?: string;
  cache?: AwsCodebuildProjectArgsCacheIntterface;
  description?: string;
  encryption_key?: string;
  service_role: string;
  tags?: string;
  vpc_config?: AwsCodebuildProjectArgsVpcConfigIntterface;
  secondary_artifacts?: string;
  secondary_sources?: string;
  type: string;
  resource?: string;

}
