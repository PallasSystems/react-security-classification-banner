import { ApiEnumTableEntry } from '../api.types';

export const ClassificationColumnDefData: ApiEnumTableEntry[] = [
  {
    field: 'OFFICIAL',
    description:
      'The majority of information that is created, processed, sent or received in the public sector and by partner organisations, which could cause no more than moderate damage if compromised and must be defended against a broad range of threat actors with differing capabilities using nuanced protective controls. Aggregated data sets of OFFICIAL information may warrant additional controls (see Guidance 1.5: Considerations for Security Advisors).',
  },
  {
    field: 'SECRET',
    description:
      'Very sensitive information that requires enhanced protective controls, including the use of secure networks on secured dedicated physical infrastructure and appropriately defined and implemented boundary security controls, suitable to defend against highly capable and determined threat actors, whereby a compromise could threaten life (an individual or group), seriously damage the UK’s security and/or international relations, its financial security/stability or impede its ability to investigate serious and organised crime.',
  },
  {
    field: 'TOP SECRET',
    description:
      'Exceptionally sensitive information assets that directly support or inform the national security of the UK or its allies AND require an extremely high assurance of protection from all threats with the use of secure networks on highly secured dedicated physical infrastructure, and robustly defined and implemented boundary security controls.',
  },
];
