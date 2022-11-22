# cicd-break-commit-message
GitHub Action that analyzes and breaks a commit message used in CI/CD pipelines

## Usage

```yaml
  - name: Break commit message
    uses: condorlabs-actions/cicd-break-commit-message@v2.0.0
    with:
      commit_message: ${{ github.event.head_commit.message }}
```

Note that the commit message must have the following structure:

"This is the commit description. **JIRA tickets:** link1.com, link2.com, link3.com"

The string `JIRA tickets:` is required and the links must be separated by commas.

## Outputs

- **message**: The description portion of the commit message
- **links_list**: an array with the links as strings.
