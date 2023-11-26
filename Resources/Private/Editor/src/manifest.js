import manifest from '@neos-project/neos-ui-extensibility';

import ToggleEditor from './ToggleEditor';

manifest('Neos.Neos.Ui.ExtensibilityExamples:ColorPickerEditor', {}, globalRegistry => {
	const editorsRegistry = globalRegistry.get('inspector').get('editors');

	editorsRegistry.set('Beromir.ToggleEditor/Editor', {
		component: ToggleEditor
	});
});
