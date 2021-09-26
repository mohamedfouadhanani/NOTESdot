import {
	Page,
	Text,
	View,
	Document,
	StyleSheet,
	pdf,
} from '@react-pdf/renderer';

// UTILS
import { getLocalNote, setLocalNote } from '../utils/note';
import { noteFileExtenstion } from '../constants';

let saveNoteLocally = () => {
	let note = getLocalNote();
	if (note.title !== '') {
		let noteString = JSON.stringify(note);

		let file = new Blob([noteString], { type: 'text/plain' });

		let element = document.createElement('a');
		element.href = URL.createObjectURL(file);
		element.download = `${note.title}.${noteFileExtenstion}`;

		document.body.appendChild(element);
		element.click();
	}
};

let saveNoteAsPDF = async () => {
	let note = getLocalNote();
	if (note.title !== '') {
		let styles = StyleSheet.create({
			page: {
				backgroundColor: '#E4E4E4',
			},
			section: {
				margin: 0,
				padding: 20,
				fontSize: 12,
			},
			title: {
				margin: 0,
				padding: 20,
				marginTop: 0,
				fontSize: 25,
				fontWeight: 'bold',
			},
		});

		let PDFDocumentBlob = await pdf(
			<Document>
				<Page size="A4" style={styles.page}>
					<View style={styles.title}>
						<Text>{note.title}</Text>
					</View>
					<View style={styles.section}>
						<Text>{note.body}</Text>
					</View>
				</Page>
			</Document>
		).toBlob();

		let element = document.createElement('a');
		element.href = URL.createObjectURL(PDFDocumentBlob);
		element.download = `${note.title}.pdf`;

		document.body.appendChild(element);
		element.click();
	}
};

export default { saveNoteAsPDF, saveNoteLocally };
