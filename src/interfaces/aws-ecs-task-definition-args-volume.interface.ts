

export interface AwsEcsTaskDefinitionArgsVolumeIntterface {
  	name: string;
	host_path?: string;
	docker_volume_configuration?: string;
	scope?: string;
	autoprovision?: string;
	driver?: string;
	driver_opts?: string;
	labels?: string;

}
