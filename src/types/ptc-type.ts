import {
  type Document,
  type Node,
  type Record,
  type StructuredText as STType,
} from 'datocms-structured-text-utils';

interface PtcPage {
  tpcSectionTitles: string;
  titleTpcPages: string;
  timelineSectionTitle: string;
  targetDate: string;
  regisFeesSectionTitle: string;
  regisFeesDescription:
    | Document
    | Node
    | STType<Record, Record>
    | null
    | undefined;
  imageMascot: {
    title: string;
    width: number;
    url: string;
    height: number;
  };
  hadiahDescription:
    | Document
    | Node
    | STType<Record, Record>
    | null
    | undefined;
  hadiahSectionTitle: string;
  guideSectionTitle: string;
  guideDescription: Document | Node | STType<Record, Record> | null | undefined;
  faqSectionTitle: string;
  explanationDescription:
    | Document
    | Node
    | STType<Record, Record>
    | null
    | undefined;
  countdownSectionTitle: string;
  buttonTextSeeMore: string;
  buttonTextRegister: string;
  backgroundImages: {
    width: number;
    url: string;
    title: string;
    height: number;
  };
}

interface timeLinesPTC {
  id: string;
  text: string;
  date: Date;
}

interface FaqsPtc {
  id: string;
  question: string;
  answer: Document | Node | STType<Record, Record> | null | undefined;
}

export interface PTCProps {
  ptcPage: PtcPage;
  allFaqsPtcs: FaqsPtc[];
  allTimelinesPtcs: timeLinesPTC[];
}
