<?php

namespace Beromir\ToggleEditor\Aspects;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Aop\JoinPointInterface;

/**
 * @Flow\Aspect
 */
class NodeTypeEnrichmentServiceAspect
{
    /**
     * @Flow\Around("method(Neos\ContentRepositoryRegistry\Configuration\NodeTypeEnrichmentService->applyEditorLabels())")
     */
    public function aroundApplyEditorLabels(JoinPointInterface $joinPoint)
    {
        $editorName = $joinPoint->getMethodArgument("editorName");
        $editorOptions = $joinPoint->getMethodArgument("editorOptions");
        $translationIdGenerator = $joinPoint->getMethodArgument("translationIdGenerator");

        switch ($editorName) {
            case 'Beromir.ToggleEditor/Editor':
                if (!isset($editorOptions['values']) || !is_array($editorOptions['values'])) {
                    break;
                }
                foreach ($editorOptions['values'] as $value => &$optionConfiguration) {
                    if ($optionConfiguration === null) {
                        continue;
                    }
                    if ($this->shouldFetchTranslation($optionConfiguration)) {
                        $optionConfiguration['label'] = $translationIdGenerator('values.' . $value);
                    }
                    if ($this->shouldFetchTranslation($optionConfiguration, 'description')) {
                        $optionConfiguration['description'] = $translationIdGenerator('values.' . $value . '.description');
                    }
                }
                break;
        }

        $joinPoint->setMethodArgument("editorOptions", array_merge($editorOptions, ['toggleEditor' => true]));

        return $joinPoint->getAdviceChain()->proceed($joinPoint);
    }

    private function shouldFetchTranslation(array $configuration, string $fieldName = 'label'): bool
    {
        $fieldValue = $configuration[$fieldName] ?? '';
        return (is_string($fieldValue) && str_starts_with($fieldValue, 'i18n'));
    }
}