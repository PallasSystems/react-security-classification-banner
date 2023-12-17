// Getting Started Page Properties
import { ApiTableEntry } from '../api.types';

export const SecurityClassificationColumnDefData: ApiTableEntry[] = [
  {
    field: 'originatingEntity',
    type: 'Organisation | ISO_3166_1_ALPHA3 | ISO_3166_1_ALPHA2',
    required: 'false',
    description:
      'The Originating Entity is the organisation/country which produced the data record.\nOnly the information creator from the originating organisation can reclassify and/or change the classification of an asset.\n ALL assets sent to foreign governments or International Organisations (e.g. the North Atlantic Treaty Organisation (NATO)) must be marked with a UK prefix. The UK prefix is added to minimise the risk that HMG classified assets could be disclosed under an international partner’s public disclosure legislation. In addition, a handling instruction setting out the conditions for release may also be added to the information.',
  },
  {
    field: 'classification',
    type: 'Classification',
    required: 'false',
    description:
      'The majority of information that is created, processed, sent or received in the public sector and by partner organisations, which could cause no more than moderate damage if compromised and must be defended against a broad range of threat actors with differing capabilities using nuanced protective controls.',
  },
  {
    field: 'handlingInstruction',
    type: 'HandlingInstruction',
    required: 'false',
    description:
      'Within a classification tier, handling instructions can also be used to give a more detailed picture of the information’s sensitivity and how it should be appropriately handled. Handling instructions do not change the information’s classification as the threat profile is the same, nor do they offer additional technical protections; they just provide more detail around how information should be handled, how widely it should be disseminated and how it should be protected.',
  },
  {
    field: 'descriptors',
    type: 'OfficialDescriptors[] | Descriptors[]',
    required: 'false',
    description:
      'Descriptors are terms applied by users to easily identify certain categories of information with special sensitivities and highlight additional access restrictions. Descriptors are not additional classifications and do not need to be applied to all documents.',
  },
  {
    field: 'codeWords',
    type: 'string[]',
    required: 'false',
    description:
      'Codewords provide security cover for a particular asset or event. A codeword is a single word expressed in CAPITAL letters. They are most commonly applied to SECRET and TOP SECRET assets. Codewords are centrally allocated; please contact your SSA/SA if you require one for an asset at any tier.',
  },
  {
    field: 'nationalityCaveat',
    type: 'Organisation[] | ISO_3166_1_ALPHA3[] | ISO_3166_1_ALPHA2[]',
    required: 'false',
    description:
      'National Caveats are used to designate assets of particular sensitivity to the UK or where dissemination must be restricted to individuals from specific foreign nations. National Caveats (e.g. UK EYES ONLY) can only be applied to SECRET and TOP SECRET assets.',
  },
  {
    field: 'releaseabilityMarking',
    type: 'Organisation[] | ISO_3166_1_ALPHA3[] | ISO_3166_1_ALPHA2[]',
    required: 'false',
    description:
      'Under the UK’s security relationship with the European Union any UK classified information provided to an EU institution must, in addition to the UK prefix described above, include a releasability marking ‘REL EU’. ',
  },
];
