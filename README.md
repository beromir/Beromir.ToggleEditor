# Toggle Editor for Neos CMS

The toggle editor lets you select one of multiple values. It provides different layout options.

## Layouts

### Grid

<img alt="Screenshot of grid layouts" src="https://github.com/user-attachments/assets/59a680e4-da5e-4f47-a610-3a9a98928427" width="300" />

<details>
<summary>Property definitions from the screenshot</summary>

```yaml
headingLevel:
  type: string
  ui:
    label: Heading level
    inspector:
      editor: Beromir.ToggleEditor/Editor
      editorOptions:
        values:
          h1:
            label: H1
            description: Heading level 1
          h2:
            label: H2
            description: Heading level 2
          h3:
            label: H3
            description: Heading level 3
alignment:
  type: string
  ui:
    label: Alignment
    inspector:
      editor: Beromir.ToggleEditor/Editor
      editorOptions:
        values:
          left:
            icon: align-left
            description: Align left
          center:
            label: Center
            icon: align-center
          right:
            label: Right
            icon: align-right
layout:
  type: string
  ui:
    label: Layout
    inspector:
      editor: Beromir.ToggleEditor/Editor
      editorOptions:
        allowEmpty: true
        columns: 2
        values:
          grid:
            label: Grid
          flex:
            label: Flex
          list:
            label: Radio
          color:
            label: Color
```

</details>

### Flex

<img alt="Screenshot of flex" src="https://github.com/user-attachments/assets/ab880a7f-7ec7-4b5a-9e72-8d120ce3d859" width="300" />

<details>
<summary>Property definitions from the screenshot</summary>

```yaml
spacing:
  type: string
  ui:
    label: Spacing
    inspector:
      editor: Beromir.ToggleEditor/Editor
      editorOptions:
        layout: flex
        values:
          none:
            icon: times
            description: No spacing
          small:
            label: Small
          medium:
            label: Medium
          large:
            label: Large
```

</details>

### Flex Start

<img width="300" alt="Screenshot of flex-start layout" src="https://github.com/user-attachments/assets/f89d32f5-a87c-4191-a5e2-dc56eeed269e">

<details>
<summary>Property definitions from the screenshot</summary>

```yaml
toggle:
  type: array
  ui:
    label: Toggle Mode
    inspector:
      editor: Beromir.ToggleEditor/Editor
      editorOptions:
        multiple: true
        layout: flex-start
        values:
          enable:
            icon: toggle-off
            iconActive: toggle-on
```

</details>

### List

<img alt="Screenshot of list layout" src="https://github.com/user-attachments/assets/6cf075e1-c34b-4484-9221-130733ac9cf7" width="300" />

<details>
<summary>Property definitions from the screenshot</summary>

```yaml
size:
  type: string
  ui:
    label: Size
    inspector:
      editor: Beromir.ToggleEditor/Editor
      editorOptions:
        allowEmpty: true
        layout: list
        values:
          auto:
            icon: magic
            label: Auto
          small:
            label: Small
          medium:
            label: Medium
          large:
            label: Large
```

</details>

<img alt="Screenshot of list layout with multiple option" src="https://github.com/user-attachments/assets/9239e9c9-ae76-4d0d-9466-b173537cd049" width="300">

<details>
<summary>Property definitions from the screenshot</summary>

```yaml
checkboxGroup:
  type: array
  ui:
    label: Checkbox Group
    inspector:
      editor: Beromir.ToggleEditor/Editor
      editorOptions:
        multiple: true
        layout: list
        values:
          first:
            icon: wrench
            iconActiveRotate: 15
            label: First Checkbox
          second:
            iconActive: fire
            label: Second Checkbox
            labelActive: Second Checkbox checked
```

</details>

### Color

<img alt="Screenshot of color layout with multiple color values" src="https://github.com/user-attachments/assets/1fbaf7c6-48fd-4db5-9777-5ac14d6f09fd" width="300" />

<details>
<summary>Property definitions from the screenshot</summary>

```yaml
color:
  type: string
  ui:
    label: Color layout
    inspector:
      editor: Beromir.ToggleEditor/Editor
      editorOptions:
        layout: color
        values:
          three:
            color:
              - "#009246"
              - white
              - "#cd2b37"
            label: "Italy colors"
            description: "Pizza Margherita"
          two:
            color: ["#5d26c3", "#271150"]
            label: "Two colors"
            description: "Purple haze"
          one:
            color: "#0d0617"
            label: "Dark color"
          transparent:
            color: transparent
            label: Transparent
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
- flex-start
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
          # One of 'grid', 'flex', 'flex-start', 'list' or 'color'. Default: 'grid'
          layout: "flex"
          # Set number of columns to render multiple rows. Works only with 'grid' and 'color'
          # This can also be an expression like {items} / 2
          # Gets surrounded by Math.floor
          # Available values {items} = number of values / {maximalRows} = value from maximalRows
          # The smaller value from columns and maximalColumns will be used
          columns: 2
          # Alternativly you can set the maximal number of columns. Defaults to 4. Works only with 'grid' and 'color'
          # This can also be an expression like {items} / 2
          # Gets surrounded by Math.floor
          # Available values {items} = number of values
          maximalColumns: 4
          # Allow empty value
          allowEmpty: true
          # Define the size of the icons: 'xs', 'sm', 'lg', '2x' or '3x'. Default: null
          iconSize: "lg"
          # Disable the whole editor
          disable: false
          # This option makes it possible hide the whole editor (incl. label) based on data source
          hidden: false
          values:
            left:
              # Show a label
              label: "Left"
              # Label on active state
              labelActive: "Item is left"

              # Show a description on hover
              description: "Align left"
              # Description on active state
              descriptionActive: "Item is left aligned"

              # Show an icon. Does not work with the color layout
              icon: "align-right"
              # Icon on active state. Does not work with the color layout
              iconActive: "align-left"
              # Rotate the icon (in degrees)
              iconRotate: -45
              # Rotate the icon on active state (in degrees)
              iconActiveRotate: -45

              # Specify the color to display in the editor. Does only work with the color layout
              # If you pass multiple colors as an array (e.g. ['white', 'black]) it will generate a gradient with hard
              # stops. This is useful if you have light and dark mode on your website
              color: "#ffffff"

              # Hide the value. Great if you work with ClientEval
              hidden: "ClientEval: !!node.property.anotherProperty"

              # Add a preview image. Does not work with the color layout. Can be also a string with svg markup
              preview: "resource://Vendor.Package/filenameInPublicFolder.png"
              # Add a preview on active state image. Does not work with the color layout. Can be also a string with svg markup
              previewActive: "resource://Vendor.Package/filenameInPublicFolder.png"
              # Rotate the preview (in degrees)
              previewRotate: -45
              # Rotate the preview on active state (in degrees)
              previewActiveRotate: -45

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
