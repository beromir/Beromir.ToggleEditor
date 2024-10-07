import manifest from "@neos-project/neos-ui-extensibility";

import ToggleEditor from "./ToggleEditor";

manifest("Beromir.ToggleEditor:Editor", {}, (globalRegistry) => {
    const editorsRegistry = globalRegistry.get("inspector").get("editors");

    editorsRegistry.set("Beromir.ToggleEditor/Editor", {
        component: ToggleEditor,
    });
});
