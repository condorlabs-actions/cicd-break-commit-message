const core = require('@actions/core');

const commitMessage = core.getInput('commit_message')
const delimiter = 'JIRA links:';

if (!commitMessage.includes(delimiter)) {
  throw new Error('No delimiter found in the commit message. Add the `JIRA links:` delimiter to the commit message.');
}

const [description, links] = commitMessage.split(delimiter)

const message = description.trim()
const linksList = links && links.trim().split(',');

core.setOutput('message', message);
core.setOutput('links_list', linksList)
