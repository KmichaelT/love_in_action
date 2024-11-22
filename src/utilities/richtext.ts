import { DefaultNodeTypes } from '@payloadcms/richtext-lexical';

export type RichTextNode<T = DefaultNodeTypes> = {
  type?: string;
  tag?: string;
  children?: RichTextNode<T>[];
  [key: string]: any;
} & T;

export type RichTextContent<T = DefaultNodeTypes> = {
  root?: {
    children?: RichTextNode<T>[];
    [key: string]: any;
  };
  [key: string]: any;
};

type SplitOptions = {
  splitOn?: string[] | string; // e.g., ['heading', 'h1', 'h2'] or 'heading'
  takeFirst?: boolean; // if true, takes first matching node, if false takes first node regardless of type
};


/**
 * Splits a RichText content object into two parts: the first matching node and the rest.
 * Useful for layouts where you need to render part of the rich text content differently,
 * such as displaying a heading next to an icon and the remaining content below.
 * 
 * @template T - The type of the RichText content, must have a root object with children array
 * @param content - The RichText content to split
 * @param options - Configuration options for splitting
 * @param options.splitOn - String or array of strings to match against node type or tag
 * @param options.takeFirst - If true, takes first matching node from splitOn, if false takes first node regardless
 * @returns Object containing firstNode and rest, both preserving the original content type
 * 
 * @example
 * // Split on first node (default behavior)
 * const { firstNode, rest } = splitRichText(richTextContent);
 * 
 * @example
 * // Split on first heading (h1, h2, h3)
 * const { firstNode, rest } = splitRichText(richTextContent, {
 *   splitOn: ['h1', 'h2', 'h3'],
 *   takeFirst: true
 * });
 * 
 * @example
 * // Usage in a component
 * function MyComponent({ content }) {
 *   const { firstNode, rest } = splitRichText(content, {
 *     splitOn: ['h1', 'h2'],
 *     takeFirst: true
 *   });
 * 
 *   return (
 *     <div>
 *       <div className="header">
 *         <Icon />
 *         <RichText content={firstNode} />
 *       </div>
 *       <div className="content">
 *         <RichText content={rest} />
 *       </div>
 *     </div>
 *   );
 * }
 */
export const splitRichText = <T extends { root?: { children?: any[] } }>(
  content: T | null | undefined,
  options: SplitOptions = {}
): {
  firstNode: T | null;
  rest: T | null;
} => {
  if (!content?.root?.children?.length) {
    return { firstNode: null, rest: null };
  }

  const { splitOn = [], takeFirst = false } = options;
  const children = content.root.children;
  const splitTypes = Array.isArray(splitOn) ? splitOn : [splitOn];

  let splitIndex = 0;
  if (takeFirst && splitTypes.length > 0) {
    // Find the first node that matches any of the split types
    splitIndex = children.findIndex((node) => 
      (node.type && splitTypes.includes(node.type)) || 
      (node.tag && splitTypes.includes(node.tag))
    );
    if (splitIndex === -1) splitIndex = 0;
  }

  const firstNodeContent = children[splitIndex];
  const restNodes = children.slice(splitIndex + 1);

  return {
    firstNode: firstNodeContent
      ? { ...content, root: { ...content.root, children: [firstNodeContent] } }
      : null,
    rest: restNodes.length
      ? { ...content, root: { ...content.root, children: restNodes } }
      : null,
  };
};

/**
 * Example usage:
 * 
 * // Split on first node (default behavior)
 * const { firstNode, rest } = splitRichText(richTextContent);
 * 
 * // Split on first heading
 * const { firstNode, rest } = splitRichText(richTextContent, {
 *   splitOn: 'heading',
 *   takeFirst: true
 * });
 * 
 * // Split on specific heading levels
 * const { firstNode, rest } = splitRichText(richTextContent, {
 *   splitOn: ['h1', 'h2'],
 *   takeFirst: true
 * });
 * 
 * // With custom node types
 * interface MyCustomNodes extends DefaultNodeTypes {
 *   customNode: {
 *     myProp: string;
 *   }
 * }
 * const { firstNode, rest } = splitRichText<MyCustomNodes>(richTextContent);
 */
