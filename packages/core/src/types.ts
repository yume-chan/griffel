import * as CSS from 'csstype';

export type GriffelStylesCSSValue = string | 0;

/**
 * Griffel doesn't support expansion of CSS shorthands.
 * They can be replaced either with the corresponding longhand properties or with the `shorthands` helper functions.
 * @see https://griffel.js.org/react/guides/limitations#css-shorthands-are-not-supported
 */
export interface GriffelStylesUnsupportedCSSProperties extends Record<keyof CSS.StandardShorthandProperties, never> {
  /** @deprecated */
  all: never;
  /** @deprecated Use corresponding longhand properties such as `animationName` and `animationDuration` instead. */
  animation: never;
  /** @deprecated Use corresponding longhand properties such as `backgroundImage` and `backgroundSize` instead. */
  background: never;
  /** @deprecated Use corresponding longhand properties `backgroundPositionX` and `backgroundPositionY` instead. */
  backgroundPosition: never;
  /** @deprecated Use `shorthands.border()` instead. */
  border: never;
  /** @deprecated Use corresponding longhand properties such as `borderBlockStartColor` and `borderBlockEndStyle` instead. */
  borderBlock: never;
  /** @deprecated Use corresponding longhand properties such as `borderBlockEndColor` and `borderBlockEndStyle` instead. */
  borderBlockEnd: never;
  /** @deprecated Use corresponding longhand properties such as `borderBlockStartColor` and `borderBlockStartStyle` instead. */
  borderBlockStart: never;
  /** @deprecated Use `shorthands.borderBottom()` instead. */
  borderBottom: never;
  /** @deprecated Use `shorthands.borderColor()` instead. */
  borderColor: never;
  /** @deprecated Use corresponding longhand properties such as `borderImageSource` and `borderImageWidth` instead. */
  borderImage: never;
  /** @deprecated Use corresponding longhand properties such as `borderInlineStartColor` and `borderInlineEndStyle` instead. */
  borderInline: never;
  /** @deprecated Use corresponding longhand properties such as `borderInlineEndColor` and `borderInlineEndStyle` instead. */
  borderInlineEnd: never;
  /** @deprecated Use corresponding longhand properties such as `borderInlineStartColor` and `borderInlineStartStyle` instead. */
  borderInlineStart: never;
  /** @deprecated Use `shorthands.borderLeft()` instead. */
  borderLeft: never;
  /** @deprecated Use `shorthands.borderRadius()` instead. */
  borderRadius: never;
  /** @deprecated Use `shorthands.borderRight()` instead. */
  borderRight: never;
  /** @deprecated Use `shorthands.borderStyle()` instead. */
  borderStyle: never;
  /** @deprecated Use `shorthands.borderTop()` instead. */
  borderTop: never;
  /** @deprecated Use `shorthands.borderWidth()` instead. */
  borderWidth: never;
  /** @deprecated Use corresponding longhand properties `columnCount` and `columnWidth` instead. */
  columns: never;
  /** @deprecated Use corresponding longhand properties such as `columnRuleWidth` and `columnRuleColor` instead. */
  columnRule: never;
  /** @deprecated Use `shorthands.flex()` instead. */
  flex: never;
  /** @deprecated Use corresponding longhand properties `flexWrap` and `flexDirection` instead. */
  flexFlow: never;
  /** @deprecated Use corresponding longhand properties such as `fontFamily` and `fontSize` instead. */
  font: never;
  /** @deprecated Use `shorthands.gap()` instead. */
  gap: never;
  /** @deprecated Use corresponding longhand properties such as `gridTemplateColumns` and `gridAutoRows` instead. */
  grid: never;
  /** @deprecated Use `shorthands.gridArea()` instead. */
  gridArea: never;
  /** @deprecated Use corresponding longhand properties `gridColumnStart` and `gridColumnEnd` instead. */
  gridColumn: never;
  /** @deprecated Use corresponding longhand properties `gridRowStart` and `gridRowEnd` instead. */
  gridRow: never;
  /** @deprecated Use corresponding longhand properties such as `gridTemplateColumns` and `gridTemplateRows` instead. */
  gridTemplate: never;
  /** @deprecated */
  lineClamp: never;
  /** @deprecated Use corresponding longhand properties such as `listStyleType` instead. */
  listStyle: never;
  /** @deprecated Use `shorthands.margin()` instead. */
  margin: never;
  /** @deprecated Use corresponding longhand properties such as `maskImage` and `maskSize` instead. */
  mask: never;
  /** @deprecated Use corresponding longhand properties such as `maskBorderSource` and `maskBorderWidth` instead. */
  maskBorder: never;
  /** @deprecated */
  motion: never;
  /** @deprecated Use corresponding longhand properties such as `offsetPath` and `offsetDistance` instead. */
  offset: never;
  /** @deprecated Use corresponding longhand properties such as `outlineColor` and `outlineWidth` instead. */
  outline: never;
  /** @deprecated Use `shorthands.overflow()` instead. */
  overflow: never;
  /** @deprecated Use corresponding longhand properties `overscrollBehaviorX` and `overscrollBehaviorY` instead. */
  overscrollBehavior: never;
  /** @deprecated Use `shorthands.padding()` instead. */
  padding: never;
  /** @deprecated Use corresponding longhand properties `alignItems` and `justifyItems` instead. */
  placeItems: never;
  /** @deprecated Use corresponding longhand properties `alignSelf` and `justifySelf` instead. */
  placeSelf: never;
  /** @deprecated Use corresponding longhand properties such as `textDecorationColor` and `textDecorationLine` instead. */
  textDecoration: never;
  /** @deprecated Use corresponding longhand properties `textEmphasisColor` and `textEmphasisStyle` instead. */
  textEmphasis: never;
  /** @deprecated Use `shorthands.transition()` instead. */
  transition: never;
}

export type ValueOrArray<T> = T | Array<T>;

type GriffelStylesCSSProperties = Omit<
  CSS.PropertiesFallback<GriffelStylesCSSValue>,
  // We have custom definition for "animationName"
  'animationName'
> &
  Partial<GriffelStylesUnsupportedCSSProperties>;

export type GriffelStylesStrictCSSObject = GriffelStylesCSSProperties &
  GriffelStylesCSSPseudos & {
    animationName?: GriffelAnimation | GriffelAnimation[] | CSS.Property.Animation;
  };

type GriffelStylesCSSPseudos = {
  [Property in CSS.Pseudos]?:
    | (GriffelStylesStrictCSSObject & { content?: string | string[] })
    | (GriffelStylesCSSObjectCustomL1 & { content?: string | string[] });
};

//
// "GriffelStylesCSSObjectCustom*" is a workaround to avoid circular references in types that are breaking TS <4.
// Once we will support "typesVersions" (types downleleving) or update our requirements for TS this should be
// updated or removed.
//

type GriffelStylesCSSObjectCustomL1 = {
  [Property: string]: string | number | (string | number)[] | undefined | GriffelStylesCSSObjectCustomL2;
} & GriffelStylesStrictCSSObject;

type GriffelStylesCSSObjectCustomL2 = {
  [Property: string]: string | number | (string | number)[] | undefined | GriffelStylesCSSObjectCustomL3;
} & GriffelStylesStrictCSSObject;

type GriffelStylesCSSObjectCustomL3 = {
  [Property: string]: string | number | (string | number)[] | undefined | GriffelStylesCSSObjectCustomL4;
} & GriffelStylesStrictCSSObject;

type GriffelStylesCSSObjectCustomL4 = {
  [Property: string]: string | number | (string | number)[] | undefined | GriffelStylesCSSObjectCustomL5;
} & GriffelStylesStrictCSSObject;

type GriffelStylesCSSObjectCustomL5 = {
  [Property: string]: string | number | (string | number)[] | undefined | GriffelStylesStrictCSSObject;
} & GriffelStylesStrictCSSObject;

export type GriffelStyle = GriffelStylesStrictCSSObject | GriffelStylesCSSObjectCustomL1;

export type GriffelAnimation = Record<'from' | 'to' | string, GriffelStylesCSSObjectCustomL1>;

export interface MakeStylesOptions {
  dir: 'ltr' | 'rtl';
  renderer: GriffelRenderer;
}

export type GriffelStaticStyle = {
  [key: string]: CSS.Properties &
    // TODO Questionable: how else would users target their own children?
    Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
} & {
  '@font-face'?: {
    fontFamily: string;
    src: string;

    fontFeatureSettings?: string;
    fontStretch?: string;
    fontStyle?: string;
    fontVariant?: string;
    fontVariationSettings?: string;
    fontWeight?: number | string;

    unicodeRange?: string;
  };
};
export type GriffelStaticStyles = GriffelStaticStyle | string;

export interface MakeStaticStylesOptions {
  renderer: GriffelRenderer;
}

export interface IsomorphicStyleSheet {
  /**
   * Attributes applied to the underlying HTMLStyleElement
   */
  elementAttributes: Record<string, string>;
  /**
   * Underlying HTMLStyleElement
   */
  element: HTMLStyleElement | undefined;
  bucketName: StyleBucketName;
  /**
   * Returns all CSS rules on the stylesheet
   */
  cssRules(): string[];
  insertRule(rule: string): number | undefined;
}

export interface GriffelRenderer {
  id: string;

  /**
   * @private
   */
  insertionCache: Record<string, StyleBucketName>;

  /**
   * @private
   */
  stylesheets: { [key in StyleBucketName]?: IsomorphicStyleSheet } & Record<string, IsomorphicStyleSheet>;

  /**
   * @private
   */
  insertCSSRules(cssRules: CSSRulesByBucket): void;

  /**
   * @private
   */
  compareMediaQueries(a: string, b: string): number;
}

/**
 * Buckets under which we will group our stylesheets.
 */
export type StyleBucketName = keyof CSSRulesByBucket;
export type SequenceHash = string;
export type PropertyHash = string;

export type CSSClasses = /* ltrClassName */ string | [/* ltrClassName */ string, /* rtlClassName */ string];

export type CSSClassesMap = Record<PropertyHash, CSSClasses>;
export type CSSClassesMapBySlot<Slots extends string | number> = Record<Slots, CSSClassesMap>;

export type CSSRulesByBucket = {
  // default
  d?: CSSBucketEntry[];
  // link
  l?: CSSBucketEntry[];
  // visited
  v?: CSSBucketEntry[];
  // focus-within
  w?: CSSBucketEntry[];
  // focus
  f?: CSSBucketEntry[];
  // focus-visible
  i?: CSSBucketEntry[];
  // hover
  h?: CSSBucketEntry[];
  // active
  a?: CSSBucketEntry[];
  // @keyframes definitions
  k?: CSSBucketEntry[];
  // at-rules (@support, @layer)
  t?: CSSBucketEntry[];
  // @media rules
  m?: CSSBucketEntry[];
};

export type CSSBucketEntry = string | [string, Record<string, unknown>];

export type StylesBySlots<Slots extends string | number> = Record<Slots, GriffelStyle>;

export type LookupItem = [/* definitions */ CSSClassesMap, /* dir */ 'rtl' | 'ltr'];
