# Toggle Editor for Neos CMS

The toggle editor lets you select one of multiple values.

![Example of the toggle editor in the Neos CMS backend](./docs/images/editor-example.png)

## Installation

Run the following command in your site package:

```
composer require --no-update beromir/neos-toggle-editor
```

Then run `composer update` in your project root.

## Usage

Add a property of type string to your NodeType definition and use the following editor configuration:

```yaml
properties:
  alignment:
    type: string
    defaultValue: 'left'
    ui:
      label: 'Alignment'
      reloadIfChanged: true
      inspector:
        editor: 'Beromir.ToggleEditor/Editor'
        editorOptions:
          # Optional, make layout flexible. Use this option if you need more space. Default: 'grid'
          layout: 'flex'
          values:
            left:
              # You can use either a label, an icon or both
              label: 'Left'
              icon: 'align-left'
              # Optional, show a description on hover
              description: 'Align left'
            center:
              label: 'Center'
              icon: 'align-center'
            right:
              label: 'Right'
              icon: 'align-right'
```
