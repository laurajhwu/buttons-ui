# Getting Started with React Buttons UI

## Installment

`npm install react-buttons-ui`

## Import

`import { IconBtn } from "react-buttons-ui"`

## Overview

- Asides from `IconBtn`, all buttons include `iconStart` and `iconEnd` property to position your icon at the start or end of the button.

- All buttons include `disable` property that accepts a `boolean` value.

## Demo

Check out live demo and usage details [here](https://button-ui.web.app/ "react buttons ui")!

## Buttons

|    Name    | Description                                    | Highlights                                                                                                                                |
| :--------: | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| FullScreen | button that triggers full screen of an element | Can reference target element by passing callback to `target` property                                                                     |
|   Upload   | a customized button to upload files            | `onChange` property takes a callback the receives the file object directly, ie, `event.target.files[0]` from html `<input type="file />"` |
|   Select   | fully customizable select button               | `hideOnSelect` property when set to `true` hides option menu when an option is selected, and vice versa when set to `false`               |
|    Next    | a simple next button                           |                                                                                                                                           |
|  IconBtn   | a button based on an icon of your choice       | `circle` property to convert button to circle shape                                                                                       |
|  Confirm   | confirm button for confirmation use            | `disableOnConfirm` property allows developers to toggle the disable state depending on the fulfillment of a confirmation                  |

## Future Features

- Combining `next` button with a `previous` button as a set to enhance usage.

- Create a `cancel` button to pair with `confirm` button for more complete functionality

- Increase default styling options (color, size, shape, etc)
