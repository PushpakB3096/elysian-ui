# Elysian UI

## Overview

Elysian UI is a collection of reusable React components built with TypeScript. It provides a set of UI components that can be easily integrated into React applications.

## Installation

You can install the library from npm using the following command:

```bash
npm install @pushpakb306/elysian-ui
```
OR
```
yarn add @pushpakb306/elysian-ui
```
## Usage

Import the components you need and use them in your React application:

```react
import { Button, Card } from '@pushpakb306/elysian-ui';

function App() {
  return (
    <div>
      <Button onClick={() => alert('Button clicked!')}>Click me</Button>
      <Card title="Example Card" />
    </div>
  );
}

export default App;
```

## Usage
The library includes Storybook for component development and documentation. You can run Storybook locally to view and interact with the components:

```
npm run storybook
```

OR

```
yarn storybook
```

## Deployment

The library is deployed using GitHub Pages. You can view the live demo at https://pushpakb3096.github.io/elysian-ui/.
