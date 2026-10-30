# oauth-review-regression-20260908
Disposable public fixture for Hutch GitHub OAuth and review regression testing

## Workspace analytics smoke check

The `analytics-smoke.mjs` fixture creates a clearly labeled review-and-merge
event for checking analytics. It has no application integrations or side effects.

Run the fixture with:

```sh
node --input-type=module -e 'import { countLabels } from "./analytics-smoke.mjs"; console.log(countLabels(["analytics", " analytics ", ""]))'
```

The expected output is `{ analytics: 2 }`.
