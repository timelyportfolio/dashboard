# goals

1) datasources: RESTfull APIs, mongodb, plain json file, csv file, json-stat file

2) widgets
	- standard widgets (for visual thinking / visual data-analysis): D3 (with related libraries: C3, parallel-coordinates, ...), table view, DC/Crossfilter, ...
	- custom widgets made with Lyra?

3) dashboards (for visual communication)

- software design goals:
	- simple interface
	- responsive design
	- offline support
	- easy to install and maintain
	- good documentation
	- unit testing
	- browser testing
	- ...

# specific todo's

- finite-state-machine structure for a sane, highlevel application-state logic flow
	- tofix: state change issue: resetting "data-source selection" to '' does not work
	- tofix: component lifecycle / data issues: data-source-selection is async, how to update components after loading?

- store cortex in pouchdb
- store data/files in pouchdb

- data input (cortex and this.state in components) validation (using react-tcomb?)

- cookie storing and loading for essential, initial data
	- authentication tokens
	- pouchdb database name

- login / logout

- save app state

- load app state

- datasource admin
	- add
		- id, name, url, type, refresh
	- edit
	- remove

- widget admin
	- add
		- types of widgets
		- data handling methods (filtering, reducing)
	- edit
	- re-order by dragging?
	- remove

- dashboard admin
	- ...
