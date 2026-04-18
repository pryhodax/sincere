declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.svg?react' {
  import * as React from 'react';
  const component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default component;
}

declare module '*.webp' {
  const src: string;
  export default src;
}
