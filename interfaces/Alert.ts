interface IAlert {
	type: EAlertType;
	message: string;
}

export enum EAlertType {
	ERROR = 'ERROR',
	SUCCESS = 'SUCCESS',
	INFO = 'INFO',
}

type Alert = IAlert | null;

export default Alert;
