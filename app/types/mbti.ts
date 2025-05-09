export type DimensionType = 'EI' | 'SN' | 'TF' | 'JP';
export type TraitType = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export interface Question {
  id: number;
  text: string;
  dimension: DimensionType;
  options: {
    text: string;
    score: {
      E?: number;
      I?: number;
      S?: number;
      N?: number;
      T?: number;
      F?: number;
      J?: number;
      P?: number;
    };
  }[];
}

export interface MBTIResult {
  type: string;
  title: string;
  description: string;
  traits: string[];
  strengths: string[];
  challenges: string[];
  careTips: string[];
  imageUrl: string;
} 