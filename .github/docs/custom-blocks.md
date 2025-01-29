# Custom Blocks

PayBlocks provides two ways to add custom blocks to your website:

## 1. Adding a CustomBlock

CustomBlocks are standalone block components that can be used anywhere in your layout builder.

### Creating a CustomBlock

1. Create a new directory in `src/blocks/CustomBlock/`:

```typescript
// src/blocks/CustomBlock/MyCustomBlock/config.ts
import { Block } from 'payload/types'

export type MyCustomBlockType = {
  blockType: 'my-custom'
  blockName?: string
  // Add your custom fields here
}

export const config: Block = {
  slug: 'my-custom',
  labels: {
    singular: 'My Custom Block',
    plural: 'My Custom Blocks',
  },
  fields: [
    // Define your block fields here
  ],
}
```

2. Create the component file:

```typescript
// src/blocks/CustomBlock/MyCustomBlock/Component.tsx
import React from 'react'
import { MyCustomBlockType } from './config'

export const MyCustomBlockComponent: React.FC<MyCustomBlockType> = (props) => {
  return (
    // Your block JSX here
  )
}
```

3. Register your block in `src/blocks/index.ts`:

```typescript
import { config as MyCustomBlock } from './CustomBlock/MyCustomBlock/config'

export const blocks = {
  // ... existing blocks
  'my-custom': MyCustomBlock,
}
```

## 2. Extending Existing Block Types

You can extend existing block types (like CTA, Feature, etc.) by adding new variants.

### Adding a Custom CTA Variant

1. Create your variant in the CTA block directory:

```typescript
// src/blocks/Cta/cta-custom.tsx
import React from 'react'
import { CtaBlock } from './types'

const CtaCustom: React.FC<CtaBlock> = ({
  title,
  content,
  buttons,
}) => {
  return (
    <section className="py-12 bg-background">
      {/* Your custom CTA variant JSX */}
    </section>
  )
}

export default CtaCustom
```

2. Update the block's config to include your variant:

```typescript
// src/blocks/Cta/config.ts
import CtaCustom from './cta-custom'

export const ctaVariants = {
  // ... existing variants
  'cta-custom': CtaCustom,
}
```

## Block Components Structure

```
src/blocks/
├── CustomBlock/           # For standalone custom blocks
│   └── MyCustomBlock/
│       ├── config.ts
│       └── Component.tsx
├── Cta/                  # Example existing block
│   ├── Component.tsx     # Main component
│   ├── config.ts        # Block configuration
│   ├── cta1.tsx         # Variant 1
│   ├── cta2.tsx         # Variant 2
│   └── cta-custom.tsx   # Your custom variant
└── RenderBlocks.tsx     # Main blocks registry
```

## Best Practices

1. **Naming Conventions**
   - Use kebab-case for block slugs (e.g., 'my-custom-block')
   - Use PascalCase for component names (e.g., 'MyCustomBlock')
   - For variants, follow the existing pattern (e.g., 'cta1', 'cta2', etc.)

2. **TypeScript**
   - Always define proper types for your blocks
   - Export types for reuse in other components

3. **Styling**
   - Use Tailwind CSS classes for styling
   - Follow the shadcn/ui component patterns
   - Maintain consistency with existing blocks

4. **Responsive Design**
   - Ensure all blocks are mobile-responsive
   - Test on multiple screen sizes
   - Use Tailwind's responsive modifiers

5. **Performance**
   - Lazy load images and heavy content
   - Optimize component re-renders
   - Use proper React hooks for state management

## Testing Your Blocks

1. Start the development server:
```bash
pnpm dev
```

2. Go to the admin panel and create a new page
3. Add your custom block using the layout builder
4. Preview the page to see your block in action
