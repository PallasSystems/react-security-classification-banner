import { ApiEnumTableEntry } from '../api.types';

export const HandlingInstructionColumnDefData: ApiEnumTableEntry[] = [
  {
    field: 'FOR PUBLIC RELEASE',
    description:
      'OFFICIAL information which can be distributed without restriction, because it has been cleared for publication, is already in the public domain or is subject to release in accordance with the FOIA or the Public Records Act 1958. The information is of low sensitivity and there is a need-to-share the information with the general public.',
  },
  {
    field: 'EMBARGOED',
    description:
      'Information that is only sensitive for a specific period of time and whose sensitivity will be reduced at the end of that period.\nWhere this marking is used, the relevant time and date, and subsequent handling instructions, must be clearly indicated as close as possible to the classification marking.',
  },
  {
    field: 'RECIPIENTS ONLY',
    description:
      'This handling instruction is reserved for a small subset of particularly sensitive information that carries high risks associated with compromise.\nThe information creator should apply the RECIPIENTS ONLY marking (in the format ‘OFFICIAL-SENSITIVE - RECIPIENTS ONLY’) to indicate that the information must be handled on a strict need-to-know basis by select named individuals. The information creator should have strict control over who the information gets shared with beyond the original recipients.\nMeeting attendees should seek authorisation from the meeting chair before briefing to, or discussing with, other colleagues not on the distribution list. Where this is not possible, such as for large meetings, the chair may waive this requirement but should notify meeting attendees that this information should only be distributed further on a strict need-to-know basis.\nWhen this handling instruction is used, you should also use a meeting room where you will not be overheard, and consider banning mobile phones and other smart electronic devices (such as smart watches) from the meeting. The need-to-share without authorisation from the information creator is not justified due to the risks of compromise of this information.',
  },
];
