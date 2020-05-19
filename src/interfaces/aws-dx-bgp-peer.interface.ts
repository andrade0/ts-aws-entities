import { AwsDxBgpPeerArgsIntterface, AwsDxBgpPeerAttrsIntterface } from '.';

export interface AwsDxBgpPeerIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsDxBgpPeerArgsIntterface;
	attrs: AwsDxBgpPeerAttrsIntterface;

}
