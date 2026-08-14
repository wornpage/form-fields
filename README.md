# @wornpage/form-fields

Native Svelte 5 input, textarea, and select controls for the Wornpage design system.

## Svelte

```svelte
<script>
  import { Input, Textarea, Select } from '@wornpage/form-fields';

  let title = $state('');
  let context = $state('');
  let owner = $state('priya');
</script>

<label for="project-title">Project</label>
<Input id="project-title" bind:value={title} autocomplete="organization" />

<label for="project-context">Context</label>
<Textarea id="project-context" bind:value={context} rows={3} />

<label for="project-owner">Owner</label>
<Select
  id="project-owner"
  bind:value={owner}
  options={[{ value: 'priya', label: 'Priya Shah' }]}
/>
```

The components preserve native input, textarea, and select semantics. Remaining attributes are forwarded to the native control. `autocomplete` is omitted unless a consumer supplies it, so browsers and password managers are not suppressed by a component default.

Every field owns its minimum touch size, responsive containment, focus-visible treatment, disabled/read-only states, coarse-pointer font sizing, and reduced-motion behavior. The select arrow derives from `currentColor` instead of a fixed palette value.

## Browser bundle

```html
<script type="module" src="./dist/worn-form-fields.js"></script>

<worn-input aria-label="Project name"></worn-input>
<worn-textarea aria-label="Context" rows="3"></worn-textarea>
<worn-select
  aria-label="Owner"
  options='[{"value":"priya","label":"Priya Shah"}]'
></worn-select>
```

The bundle registers `<worn-input>`, `<worn-textarea>`, and `<worn-select>`. Set `aria-label` on each custom element because labels outside a shadow root cannot label the internal native control.

## Theme tokens

- `--cockpit-surface`
- `--cockpit-bg-secondary`
- `--cockpit-border`
- `--cockpit-border-strong`
- `--cockpit-text`
- `--cockpit-text-secondary`
- `--cockpit-text-muted`
- `--cockpit-accent`
- `--cockpit-accent-50`
- `--cockpit-radius-sm`
- `--font-typewriter`
