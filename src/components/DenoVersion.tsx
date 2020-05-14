import { React } from 'https://unpkg.com/es-react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      h2: any;
    }
  }
}

interface IProps {
  version: string;
}

export const DenoVersion = ({ version }: IProps) => <h2>🦕 {version}</h2>;
