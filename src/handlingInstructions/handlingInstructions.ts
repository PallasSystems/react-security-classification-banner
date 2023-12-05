import { HandlingInstruction } from './handlingInstructions.types';

/**
 *
 * @returns
 */
export const GetOFFICIALHandlingInstructions = (): HandlingInstruction[] => {
  return ['RECIPIENTS ONLY', 'FOR PUBLIC RELEASE', 'HMG USE ONLY', 'EMBARGOED'];
};

/**
 *
 * @returns
 */
export const GetSecretHandlingInstructions = (): HandlingInstruction[] => {
  return ['RECIPIENTS ONLY', 'HMG USE ONLY', 'EMBARGOED'];
};

/**
 *
 * @returns
 */
export const GetTopSecretHandlingInstructions = (): HandlingInstruction[] => {
  return ['RECIPIENTS ONLY'];
};

/**
 *
 * @param classification
 * @param instructions
 * @returns
 */
export const GetHandlingInstructionsText = (classification?: string, instructions?: HandlingInstruction) => {
  let result = '';
  let allowed: HandlingInstruction[] = [];

  // Retrieve a list of statements allowed at a specific
  if (classification) {
    if (classification.startsWith('OFFICIAL')) {
      allowed = GetOFFICIALHandlingInstructions();
    } else if (classification.startsWith('SECRET')) {
      allowed = GetSecretHandlingInstructions();
    } else if (classification.startsWith('TOP SECRET')) {
      allowed = GetTopSecretHandlingInstructions();
    }
  }

  //
  if (instructions && allowed.includes(instructions)) {
    result = instructions;
  }

  return result;
};
