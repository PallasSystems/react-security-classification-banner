# React UK Security Classification Banner
A library to generate  UK Security Classification Banners based on [UK Government Guidance](https://www.gov.uk/government/publications/government-security-classifications/government-security-classifications-policy-html). The UK has 3 Classification levels and various rules on handling instructions, this library provides a TSX Component which will generate a banner in the correct colours, with text laid out correctly and accessibility features incorporated.

The UK government guidance has sections for each part of a security classification banner, the library allows users to define a `SecurityClassification` object which has variables for each section. It will parse the object in order to generate a valid result. For example the descriptor 'FOR PUBLIC RELEASE' can't be used above 'OFFICIAL' and so will be dropped on 

## Getting Started

1. Ensure that you have React 18 or later installed
2. Install Peer Dependencies

```bash
npm install react
```

3. Install The Security Classification Banner

```bash
npm install @pallassystems/react-security-classification-banner
```

### Usage

## Develop and Contribute

We welcome questions, ideas, issues and code contributions to this project.

Use the [issues page](https://github.com/PallasSystems/react-security-classification-banner/issues) to get in touch with the community.

If you would like to make a code contribution please fork the repository and create a
[GitHub pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests) to the `main` branch.
