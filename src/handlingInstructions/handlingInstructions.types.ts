export type HandlingInstruction =
  /**
   * OFFICIAL information which can be distributed without restriction, because it has been
   * cleared for publication, is already in the public domain or is subject to release in
   * accordance with the FOIA or the Public Records Act 1958. The information is of low
   * sensitivity and there is a need-to-share the information with the general public.
   *
   * Before publication, ensure that appropriate quality assurance checks are undertaken
   * (including, if appropriate consulting your organisation’s press office and legal team).
   *
   */
  | 'FOR PUBLIC RELEASE'
  /**
   * Information that is only sensitive for a specific period of time and whose sensitivity
   * will be reduced at the end of that period.
   *
   * Where this marking is used, the relevant time and date, and subsequent handling instructions,
   * must be clearly indicated as close as possible to the classification marking.
   */
  | 'EMBARGOED'

  /**
   * This handling instruction is reserved for a small subset of particularly sensitive
   * information that carries high risks associated with compromise.
   *
   * The information creator should apply the RECIPIENTS ONLY marking (in the format
   * ‘OFFICIAL-SENSITIVE - RECIPIENTS ONLY’) to indicate that the information must be handled
   * on a strict need-to-know basis by select named individuals. The information creator should
   * have strict control over who the information gets shared with beyond the original
   * recipients.
   *
   * Meeting attendees should seek authorisation from the meeting chair before briefing to,
   * or discussing with, other colleagues not on the distribution list. Where this is not
   * possible, such as for large meetings, the chair may waive this requirement but should
   * notify meeting attendees that this information should only be distributed further on a
   * strict need-to-know basis.
   *
   */
  | 'RECIPIENTS ONLY'

  /**
   * Information that should only be shared with other HMG departments; not with external partners.
   */
  | 'HMG USE ONLY';
