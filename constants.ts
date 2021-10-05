import { ILanguage } from './utils/settings';

interface ILanguageInstance {
	[key: string]: ILanguage;
}

export const LANGUAGE: ILanguageInstance = {
	ENGLISH: {
		name: 'English',
		navbar: {
			changeLanguage: 'Change the Language',
			install: 'Install',
			switchTheme: 'Switch Theme',
		},
		footer: {
			allRightsReserved: 'All rights reserved.',
			privacy: 'Privacy Policy',
			terms: 'Terms and Conditions',
		},
		index: {
			create: 'Create a note',
			open: 'Open an existing note',
			h1: 'Want to start writing notes asap?',
			h2: 'Start writing notes immediately without creating an account, spoiler alert! you can also install it on your desktop.',
		},
		notFound: {
			h1: 'Page not found unfortunately',
			h2: 'Looks like this page does not exist, please use the button below to navigate back to the app.',
			button: 'Go Back',
		},
		note: {
			error: 'The title must be at least 6 characters',
			placeholder: 'Title',
			emptyTitle:
				'Cannot perform the action when the title of the note is empty.',
			saveLocally: 'Save Locally',
			preview: 'Preview',
		},
	},
	FRANCAIS: {
		name: 'Français',
		navbar: {
			changeLanguage: 'Changer la Langue',
			install: 'Installer',
			switchTheme: 'Changer le thème',
		},
		footer: {
			allRightsReserved: 'Tous droits réservés.',
			privacy: 'Politique de Confidentialité',
			terms: 'Termes et Conditions',
		},
		index: {
			create: 'Créer une note',
			open: 'Ouvrir une note existante',
			h1: 'Vous voulez commencer à écrire des notes dès que possible?',
			h2: "Commencez à écrire des notes immédiatement sans créer de compte, alerte spoiler ! vous pouvez également l'installer sur votre bureau.",
		},
		notFound: {
			h1: 'Page introuvable malheureusement',
			h2: "Il semble que cette page n'existe pas, veuillez utiliser le bouton ci-dessous revenir à l'application.",
			button: 'Retourner',
		},
		note: {
			error: 'Le titre doit comporter au moins 6 caractères',
			placeholder: 'Titre',
			emptyTitle:
				"Impossible d'effectuer l'action lorsque le titre de la note est vide.",
			saveLocally: 'Enregistrer localement',
			preview: 'Aperçevoir',
		},
	},
	ESPANOL: {
		name: 'Español',
		navbar: {
			changeLanguage: 'Cambiar el idioma',
			install: 'Instalar',
			switchTheme: 'Cambiar el tema',
		},
		footer: {
			allRightsReserved: 'Todos los derechos reservados.',
			privacy: 'Política de confidencialidad',
			terms: 'Términos y Condiciones',
		},
		index: {
			create: 'Crea una nota',
			open: 'Abrir una nota existente',
			h1: '¿Quieres empezar a escribir notas lo antes posible?',
			h2: 'Empiece a escribir notas inmediatamente sin crear una cuenta, ¡alerta de spoiler! también puede instalarlo en su escritorio.',
		},
		notFound: {
			h1: 'Desafortunadamente, esta página no se puede encontrar.',
			h2: 'Parece que esta página no existe, utilice el botón de abajo para volver a la aplicación.',
			button: 'Regreso',
		},
		note: {
			error: 'El título debe tener al menos 6 caracteres.',
			placeholder: 'Título',
			emptyTitle:
				'No se puede realizar la acción cuando el título de la nota está vacío.',
			saveLocally: 'Guardar localmente',
			preview: 'Avance',
		},
	},
};

export const noteFileExtenstion = 'webnote';
