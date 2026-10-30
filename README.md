# oauth-review-regression-20260908
Disposable public fixture for Hutch GitHub OAuth and review regression testing

## Workspace analytics smoke check

Reviewing and merging changes to `analytics-smoke.mjs` provides a clearly
labeled analytics event. Running the fixture itself only counts labels; it has
no application integrations or network side effects.

Run the fixture with:

```sh
node --input-type=module -e 'import { countLabels } from "./analytics-smoke.mjs"; console.log(countLabels(["analytics", " analytics ", ""]))'
```

The expected output is `{ analytics: 2 }`.
