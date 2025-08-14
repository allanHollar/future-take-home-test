# What’s implemented

- Left pane: scrollable exercise list with live search (header search bar).

- Right pane: details view for the selected exercise (name, description, video, key attributes).

- Sticky filter controls (collapsible dropdowns) for: Equipment Required, Muscle Groups, Movement Patterns

- Filters are OR within a facet and AND across facets.

#### Responsive layout:

- Mobile: single column (list above details)

- ≥ md: two columns (1/3 list, 2/3 details)

## How to use

Type in the Search field to filter by exercise name (case-insensitive).

1. Expand filters and check options to narrow results:

1. Within a facet, any checked option will match (OR).

1. Across facets, an exercise must match all active facets (AND).

1. Click an exercise name to view details and video.

## Installation

### Prerequisites

- Node.js 18+ (LTS). If you use `nvm`:

```bash
nvm install 18
nvm use 18
```

1. Clone the repo:

````bash
git clone https://github.com/allanHollar/future-take-home-test.git```
cd future-take-home-test
````

2. Install dependencies:

```bash
npm install
```

3. Run the app (http://localhost:3000):

```bash
npm run dev
```

## Tech & choices

- Next.js (App Router) + TypeScript

- Tailwind CSS for styling; Heroicons for small icons

- No UI frameworks or heavy component libraries (per instructions)

### State:

- useExercises hook for fetching and basic loading/error state

- Page owns selected exercise and searchTerm

- ExerciseBrowser owns FilterState

### Filtering:

- `buildFacets() compiles unique, sorted option lists from CSV fields (equipment_required, muscle_groups, movement_patterns)

- Robust CSV parsing with trim, nullish handling, and case-insensitive de-dupe

### Performance:

- useMemo for facets and filtered results

- Stable keys (`key={e.id}`)

### Code style:

- Arrow functions for components and hooks

- Extracted types (Exercise, UseExercisesResult, FilterState, Facets)

## License

[MIT](https://choosealicense.com/licenses/mit/)
