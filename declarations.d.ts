declare module '*.module.css' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.svg' {
  import { FC, SVGAttributes } from 'react';

  const content: FC<SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}
