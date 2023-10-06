# Contributing

This code repository welcomes code contributions from other developers, but any submissions must satisfy the following constraints:

## Tests
Because thie code is *infrastructure* that runs the SLP token economy, 100% unit test coverage must be maintained. Any code submissions must include unit tests, and any submissions must not decrease the overall percentage of code coverage.

## Code Reviews
The GitHub repository has a branch protection rules on the `master` branch to prevent pull requests from being merged without a code review. Any developer who has landed a PR on a PSF code repository can review submissions.

## Index Regression
Prior to merging a PR, it's a good idea to run the indexer from SLP genesis to the current chain tip, to ensure that changes do not cause a regression error.

# Questions
If you have any questions or need guidence, reach on on the [Telegram channel](https://t.me/psf_slp).