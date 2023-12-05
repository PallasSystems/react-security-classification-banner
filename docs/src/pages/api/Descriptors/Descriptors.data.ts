import { ApiEnumTableEntry } from '../api.types';

export const DescriptorColumnDefData: ApiEnumTableEntry[] = [
  {
    field: 'COMMERCIAL',
    description:
      'Information that may be commercially damaging to your organisation or to a commercial partner if improperly accessed, or which is subject to terms of commercial confidentiality. If the information could have a material impact on financial markets, use the MARKET-SENSITIVE descriptor (see above) instead.',
  },
  {
    field: 'LEGAL PROFESSIONAL PRIVILEGE',
    description:
      'Information that exists for the purpose of giving or receiving legal advice and is contained in confidential communications passing between a client (e.g. a business area) and the client’s lawyer (e.g. a member of the Legal Directorate or external counsel); or, confidential communications between a lawyer and their client, or between either of them and a third party, that relate predominantly to litigation which is actual or pending at the time of the communication.',
  },
  {
    field: 'MARKET SENSITIVE',
    description:
      'Information that is not public and could have a material impact on financial markets i.e. could move market prices. This includes micro-level information on the pricing of financial instruments or the activities of specific market participants. It also covers macro-level information such as Bank of England policy initiatives which could influence market prices. A subset of this information will comprise ‘inside information’ as defined by the Market Abuse Regulation (Article 7).',
  },
];
