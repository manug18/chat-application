# Opinionated boilerplate for React development

> Please read through entire document to ensure code consistency and best practices.

## src folder structure

### Assets

Intended for

1. Static Images
2. Custom fonts that needs to be served with the bundle

### Services

Intended for network related files

1. Api calls
2. Core service boilerplate
3. Endpoints
4. Request and Response models

### Utils

Intended for utilities like

1. Datetime parsing and formatting
2. Data formatter
3. Logger
4. Storage helper

### Styles

Intented for

1. Theme
2. Default Style overides of the UI library in use

### Components

Intended for

1.  Atomic components like buttons, dropdowns, radio, time-pickers etc
2.  Custom reusable components

> Note: If few components are meant to be used for a specific type of output, group them in a folder.
> eg. table-row, table-cell, table-view should be under `components/table`.

### Router

Intented for page routing files

1. Routes enum
2. Authenicated routes

### Pages

Intented for container files that resolve to a particlar route

### State

Intended for global state managament

1. Context
2. Reducers
3. Storage lib config files

### ROOT_FILES

1. Constant.ts - For numeric and string constants used through out the project
2. AppSettings.ts - For exposing environment values and settings

##
