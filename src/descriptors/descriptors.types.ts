export type OfficialDescriptors = 'LEGAL' | 'HR / MANAGEMENT' | 'PERSONAL DATA';

export type Descriptors =
  /**
   * Information that relates to active or potential criminal or civil proceedings. If the
   * information in question includes protected legal advice, use the LPP descriptor (see above)
   * instead.
   */
  | 'LEGAL'
  /**
   * Information related to staff performance, well-being or personal data; for example,
   * employment contracts, annual appraisals, or medical information. This information should
   * only be shared with named individuals on a need-to-know basis. The information creator’s
   * permission should be sought before this information is circulated further, and in certain
   * circumstances, the staff member in question’s permission should also be sought.
   */
  | 'HR / MANAGEMENT'
  /**
   * Information relating to an identified or identifiable living individual.
   *
   * Where the information relates to a member of staff (including their performance),
   * use the HR / Management descriptor (see above) instead.
   */
  | 'PERSONAL DATA'
  /**
   * Information that may be commercially damaging to your organisation or to a commercial
   * partner if improperly accessed, or which is subject to terms of commercial confidentiality.
   * If the information could have a material impact on financial markets, use the
   * MARKET-SENSITIVE descriptor (see above) instead.
   */
  | 'COMMERCIAL'
  | 'PERONSAL'
  | 'SENSITIVE'
  /**
   * Information that exists for the purpose of giving or receiving legal advice and is
   * contained in confidential communications passing between a client (e.g. a business area)
   * and the client’s lawyer (e.g. a member of the Legal Directorate or external counsel); or,
   * confidential communications between a lawyer and their client, or between either of them
   * and a third party, that relate predominantly to litigation which is actual or pending at
   * the time of the communication.
   */
  | 'LEGAL PROFESSIONAL PRIVILEGE'
  /**
   * Information that is not public and could have a material impact on financial markets
   * i.e. could move market prices. This includes micro-level information on the pricing of
   * financial instruments or the activities of specific market participants. It also covers
   * macro-level information such as Bank of England policy initiatives which could influence
   * market prices. A subset of this information will comprise ‘inside information’ as defined
   * by the Market Abuse Regulation (Article 7).
   */
  | 'MARKET SENSITIVE';
