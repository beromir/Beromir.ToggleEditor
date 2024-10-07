# Toggle Editor for Neos CMS

The toggle editor lets you select one of multiple values. It provides different layout options.

![Example of the toggle editor in the Neos CMS backend](./docs/images/editor-example.png)

<details>

<summary>Property definitions from the screenshot</summary>

```yaml
properties:
  headingLevel:
    type: string
    ui:
      label: "Heading level"
      reloadIfChanged: true
      inspector:
        group: "general"
        editor: "Beromir.ToggleEditor/Editor"
        editorOptions:
          values:
            h1:
              label: "H1"
              description: "Heading level 1"
            h2:
              label: "H2"
              description: "Heading level 2"
            h3:
              label: "H3"
              description: "Heading level 3"
  alignment:
    type: string
    ui:
      label: "Alignment"
      reloadIfChanged: true
      inspector:
        group: "general"
        editor: "Beromir.ToggleEditor/Editor"
        editorOptions:
          values:
            left:
              label: "Left"
              icon: "align-left"
              description: "Align left"
            center:
              label: "Center"
              icon: "align-center"
            right:
              label: "Right"
              icon: "align-right"
  layout:
    type: string
    ui:
      label: "Layout"
      reloadIfChanged: true
      inspector:
        group: "general"
        editor: "Beromir.ToggleEditor/Editor"
        editorOptions:
          columns: 2
          values:
            grid:
              label: "Grid"
            flex:
              label: "Flex"
            list:
              label: "Radio"
            color:
              label: "Color"
  spacing:
    type: string
    ui:
      label: "Spacing"
      reloadIfChanged: true
      inspector:
        group: "general"
        editor: "Beromir.ToggleEditor/Editor"
        editorOptions:
          layout: "flex"
          values:
            none:
              icon: "times"
              description: "No spacing"
            small:
              label: "Small"
            medium:
              label: "Medium"
            large:
              label: "Large"
  size:
    type: string
    defaultValue: "auto"
    ui:
      label: "Size"
      reloadIfChanged: true
      inspector:
        group: "general"
        editor: "Beromir.ToggleEditor/Editor"
        editorOptions:
          layout: "list"
          values:
            auto:
              icon: "magic"
              label: "Auto"
            small:
              label: "Small"
            medium:
              label: "Medium"
            large:
              label: "Large"
  color:
    type: string
    ui:
      label: "Color"
      reloadIfChanged: true
      inspector:
        group: "general"
        editor: "Beromir.ToggleEditor/Editor"
        editorOptions:
          layout: "color"
          columns: 3
          allowEmpty: true
          values:
            primary:
              color: "#6366f1"
              label: "Primary"
              description: "Primary color"
            secondary:
              color: "#eab308"
              label: "Secondary"
            transparent:
              color: "transparent"
              label: "Transparent"
```

</details>

## Installation

Run the following command in your site package:

```bash
composer require --no-update beromir/neos-toggle-editor
```

Then run `composer update` in your project root.

## Usage

You can select one of the following layout options:

- grid
- flex
- list
- color

If you use the color layout or the grid layout, you can optionally specify the number of columns to render more than one
row.
The color layout is a special case for selecting a color. It renders the color in the editor. You can use `transparent`
as color value to render this value in a visible way for the editors (see screenshot above).

Add a property of type string to your NodeType definition and use the following editor configuration:

```yaml
properties:
  alignment:
    type: string
    defaultValue: "left"
    ui:
      label: "Alignment"
      reloadIfChanged: true
      inspector:
        editor: "Beromir.ToggleEditor/Editor"
        editorOptions:
          # One of 'grid', 'flex', 'list' or 'color'. Default: 'grid'
          layout: "flex"
          # Set number of columns to render multiple rows. Works only with 'grid' and 'color'
          columns: 2
          # Allow empty value
          allowEmpty: true
          # Define the size of the icons: 'xs', 'sm', 'lg', '2x' or '3x'. Default: null
          iconSize: "lg"
          # Disable the whole editor
          disable: false
          values:
            left:
              # Show a label
              label: "Left"
              # Show an icon. Does not work with the color layout
              icon: "align-left"
              # Rotate the icon (in degrees)
              iconRotate: -45
              # Show a description on hover
              description: "Align left"
              # Specify the color to display in the editor. Does only work with the color layout
              color: "#ffffff"
              # Hide the value. Great if you work with ClientEval
              hidden: "ClientEval: !!node.property.anotherProperty"
              # Add a preview image. Does not work with the color layout. Can be also a string with svg markup
              preview: "resource://Vendor.Package/filenameInPublicFolder.png"
              # If true and no label is defined, the margin from the button get's removed. Defaults to false
              previewFull: true
              # Disable an item option
              disabled: false
            center:
              label: "Center"
              icon: "align-center"
            right:
              label: "Right"
              icon: "align-right"

          # Optionally use a data source:
          # If `dataSourceIdentifier` or `dataSourceUri` is defined, the `values` from above will be ignored
          dataSourceIdentifier: "some-datasource"
          dataSourceUri: "some/custom-route"
          dataSourceAdditionalData:
            foo: "bar"
          dataSourceDisableCaching: false
```

## Credits

This package is inspired by:

- [Carbon.ColorValues](https://github.com/CarbonPackages/Carbon.ColorValues)
- [Shel.Neos.ColorPicker](https://github.com/Sebobo/Shel.Neos.ColorPicker)
- [Kirby CMS toggles field](https://getkirby.com/docs/reference/panel/fields/toggles)
- [I13e.ButtonEditor](https://github.com/ideenstadtwerke/I13e.ButtonEditor)
